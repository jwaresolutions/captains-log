import { useState, useEffect } from 'react'
import { apiService } from '../services/api'
import { User } from '../types/api'

interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  needsSetup: boolean
  user: User | null
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
    needsSetup: false,
    user: null,
  })

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      // Check if we have a token
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

      // Try to make an authenticated request to verify the token
      await apiService.getBoats()
      
      // If successful, user is authenticated
      // Note: In a real app, you might want to fetch user info here
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        needsSetup: false,
        user: { id: 'current', username: 'user', createdAt: '', updatedAt: '' }, // Placeholder
      })
    } catch (error) {
      // Token is invalid or expired
      localStorage.removeItem('auth_token')
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        needsSetup: true,
        user: null,
      })
    }
  }

  const login = async (username: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }))
      
      const response = await apiService.login(username, password)
      
      // Update auth state immediately after successful login
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        needsSetup: false,
        user: response.user,
      })
      
      return { success: true }
    } catch (error: any) {
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false,
        isAuthenticated: false,
        needsSetup: true 
      }))
      return { 
        success: false, 
        error: error.message || 'Login failed' 
      }
    }
  }

  const logout = async () => {
    try {
      await apiService.logout()
    } catch (error) {
      // Even if logout fails on server, clear local state
      console.warn('Logout request failed:', error)
    } finally {
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        needsSetup: false,
        user: null,
      })
    }
  }

  return {
    ...authState,
    login,
    logout,
    checkAuthStatus,
  }
}