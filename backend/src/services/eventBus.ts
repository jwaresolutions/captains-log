import { EventEmitter } from 'events';
import { Response } from 'express';
import { logger } from '../utils/logger';

export interface SyncEvent {
  type: string;
  action: string;
  entityId?: string;
  timestamp: string;
}

interface SseClient {
  id: string;
  res: Response;
}

class EventBus {
  private emitter = new EventEmitter();
  private clients: SseClient[] = [];
  private heartbeatInterval: NodeJS.Timeout | null = null;

  constructor() {
    this.emitter.setMaxListeners(100);
    this.startHeartbeat();
  }

  addClient(id: string, res: Response): void {
    this.clients.push({ id, res });
    logger.info('SSE client connected', { clientId: id, totalClients: this.clients.length });
  }

  removeClient(id: string): void {
    this.clients = this.clients.filter(c => c.id !== id);
    logger.info('SSE client disconnected', { clientId: id, totalClients: this.clients.length });
  }

  publish(type: string, action: string, entityId?: string): void {
    const event: SyncEvent = {
      type,
      action,
      entityId,
      timestamp: new Date().toISOString(),
    };

    const data = JSON.stringify(event);

    this.clients.forEach(client => {
      try {
        client.res.write(`data: ${data}\n\n`);
      } catch (err) {
        logger.warn('Failed to send SSE event to client', { clientId: client.id });
        this.removeClient(client.id);
      }
    });
  }

  private startHeartbeat(): void {
    this.heartbeatInterval = setInterval(() => {
      this.clients.forEach(client => {
        try {
          client.res.write(`: heartbeat\n\n`);
        } catch (err) {
          this.removeClient(client.id);
        }
      });
    }, 30000);
  }

  getClientCount(): number {
    return this.clients.length;
  }
}

export const eventBus = new EventBus();
