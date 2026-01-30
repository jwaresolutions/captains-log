import { useState, useEffect, useContext, createContext, useCallback } from 'react'
import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { apiService } from '../services/api'
import { User } from '../types/api'
import { connectSyncEvents, disconnectSyncEvents } from '../services/syncEvents'

interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  needsSetup: boolean
  user: User | null
}

interface AuthContextValue extends AuthState {
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
  checkAuthStatus: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = useQueryClient()
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
    needsSetup: false,
    user: null,
  })

  const checkAuthStatus = useCallback(async () => {
    try {
      const token = localStorage.getItem('auth_token')
      if (!token) {
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          needsSetup: true,
          user: null,
        })
        return
      }

      await apiService.getBoats()

      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        needsSetup: false,
        user: { id: 'current', username: 'user', createdAt: '', updatedAt: '' },
      })
      connectSyncEvents(queryClient)
    } catch (error) {
      localStorage.removeItem('auth_token')
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        needsSetup: true,
        user: null,
      })
    }
  }, [])

  useEffect(() => {
    checkAuthStatus()
  }, [checkAuthStatus])

  const login = useCallback(async (username: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }))

      const response = await apiService.login(username, password)

      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        needsSetup: false,
        user: response.user,
      })
      connectSyncEvents(queryClient)

      return { success: true }
    } catch (error: any) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        isAuthenticated: false,
        needsSetup: true,
      }))
      return {
        success: false,
        error: error.message || 'Login failed',
      }
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await apiService.logout()
    } catch (error) {
      console.warn('Logout request failed:', error)
    } finally {
      disconnectSyncEvents()
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        needsSetup: false,
        user: null,
      })
    }
  }, [])

  const value: AuthContextValue = {
    ...authState,
    login,
    logout,
    checkAuthStatus,
  }

  return React.createElement(AuthContext.Provider, { value }, children)
}

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
