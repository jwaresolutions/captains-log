import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiService } from '../services/api'
import { TodoList } from '../types/api'

// Query keys
const QUERY_KEYS = {
  todoLists: (boatId?: string) => ['todoLists', boatId],
  todoList: (id: string) => ['todoList', id],
}

// Todo Lists hooks
export const useTodoLists = (boatId?: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.todoLists(boatId),
    queryFn: () => apiService.getTodoLists(boatId),
  })
}

export const useTodoList = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.todoList(id),
    queryFn: () => apiService.getTodoList(id),
    enabled: !!id,
  })
}

export const useCreateTodoList = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (data: {
      title: string
      type: 'general' | 'boat'
      boatId?: string
    }) => apiService.createTodoList(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todoLists'] })
    },
  })
}

export const useUpdateTodoList = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<TodoList> }) =>
      apiService.updateTodoList(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.todoList(id) })
      queryClient.invalidateQueries({ queryKey: ['todoLists'] })
    },
  })
}

export const useDeleteTodoList = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (id: string) => apiService.deleteTodoList(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todoLists'] })
    },
  })
}

// Todo Items hooks
export const useAddTodoItem = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ listId, content }: { listId: string; content: string }) =>
      apiService.addTodoItem(listId, content),
    onSuccess: (_, { listId }) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.todoList(listId) })
      queryClient.invalidateQueries({ queryKey: ['todoLists'] })
    },
  })
}

export const useToggleTodoItem = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (itemId: string) => apiService.toggleTodoItem(itemId),
    onSuccess: (item: any) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.todoList(item.listId) })
      queryClient.invalidateQueries({ queryKey: ['todoLists'] })
    },
  })
}