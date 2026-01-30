import React, { useState } from 'react'
import styled from 'styled-components'
import { LCARSPanel } from '../components/lcars/LCARSPanel'
import { LCARSButton } from '../components/lcars/LCARSButton'
import { LCARSHeader } from '../components/lcars/LCARSHeader'
import { LCARSDataDisplay } from '../components/lcars/LCARSDataDisplay'
import { useAuth } from '../hooks/useAuth'
import { apiService } from '../services/api'
import { useNavigate } from 'react-router-dom'

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};
`

const Label = styled.label`
  color: ${props => props.theme.colors.primary.anakiwa};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${props => props.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`

const Input = styled.input`
  background: ${props => props.theme.colors.surface.dark};
  border: 2px solid ${props => props.theme.colors.primary.anakiwa};
  color: ${props => props.theme.colors.text.primary};
  padding: ${props => props.theme.spacing.sm};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-size: ${props => props.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.neonCarrot};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const StatusMessage = styled.div<{ $type: 'success' | 'error' | 'info' }>`
  padding: ${props => props.theme.spacing.sm};
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  ${props => {
    switch (props.$type) {
      case 'success':
        return `
          background: ${props.theme.colors.status.success}20;
          color: ${props.theme.colors.status.success};
          border: 1px solid ${props.theme.colors.status.success};
        `
      case 'error':
        return `
          background: ${props.theme.colors.status.error}20;
          color: ${props.theme.colors.status.error};
          border: 1px solid ${props.theme.colors.status.error};
        `
      case 'info':
        return `
          background: ${props.theme.colors.primary.anakiwa}20;
          color: ${props.theme.colors.primary.anakiwa};
          border: 1px solid ${props.theme.colors.primary.anakiwa};
        `
    }
  }}
`

const UserInfoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${props => props.theme.spacing.md};
  align-items: center;
`

const InfoLabel = styled.div`
  color: ${props => props.theme.colors.primary.anakiwa};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${props => props.theme.typography.fontSize.sm};
`

const InfoValue = styled.div`
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.typography.fontFamily.monospace};
`

export const Settings: React.FC = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [passwordMessage, setPasswordMessage] = useState<{
    type: 'success' | 'error' | 'info'
    text: string
  } | null>(null)

  const handlePasswordChange = (field: keyof typeof passwordForm) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordForm(prev => ({
      ...prev,
      [field]: e.target.value,
    }))
    // Clear message when user starts typing
    if (passwordMessage) {
      setPasswordMessage(null)
    }
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
      setPasswordMessage({
        type: 'error',
        text: 'All password fields are required',
      })
      return
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordMessage({
        type: 'error',
        text: 'New passwords do not match',
      })
      return
    }

    if (passwordForm.newPassword.length < 8) {
      setPasswordMessage({
        type: 'error',
        text: 'New password must be at least 8 characters',
      })
      return
    }

    setIsChangingPassword(true)
    setPasswordMessage({
      type: 'info',
      text: 'Changing password...',
    })

    try {
      await apiService.changePassword(passwordForm.currentPassword, passwordForm.newPassword)
      
      setPasswordMessage({
        type: 'success',
        text: 'Password changed successfully. You will be logged out.',
      })
      
      // Clear form
      setPasswordForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      })
      
      // Log out user after successful password change
      setTimeout(() => {
        logout()
      }, 2000)
      
    } catch (error: any) {
      setPasswordMessage({
        type: 'error',
        text: error.message || 'Failed to change password',
      })
    } finally {
      setIsChangingPassword(false)
    }
  }

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to log out?')) {
      await logout()
    }
  }

  return (
    <SettingsContainer>
      <LCARSHeader>System Settings</LCARSHeader>
      
      <SettingsGrid>
        {/* User Account Information */}
        <LCARSPanel title="User Account">
          <UserInfoGrid>
            <InfoLabel>Username:</InfoLabel>
            <InfoValue>{user?.username || 'Unknown'}</InfoValue>
            
            <InfoLabel>Account Created:</InfoLabel>
            <InfoValue>
              {user?.createdAt 
                ? new Date(user.createdAt).toLocaleDateString()
                : 'Unknown'
              }
            </InfoValue>
            
            <InfoLabel>Last Updated:</InfoLabel>
            <InfoValue>
              {user?.updatedAt 
                ? new Date(user.updatedAt).toLocaleDateString()
                : 'Unknown'
              }
            </InfoValue>
          </UserInfoGrid>
          
          <div style={{ marginTop: '20px' }}>
            <LCARSButton 
              onClick={handleLogout}
              variant="secondary"
            >
              Logout
            </LCARSButton>
          </div>
        </LCARSPanel>

        {/* Password Change */}
        <LCARSPanel title="Change Password">
          <form onSubmit={handlePasswordSubmit}>
            <FormGroup>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                type="password"
                value={passwordForm.currentPassword}
                onChange={handlePasswordChange('currentPassword')}
                disabled={isChangingPassword}
                autoComplete="current-password"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={passwordForm.newPassword}
                onChange={handlePasswordChange('newPassword')}
                disabled={isChangingPassword}
                autoComplete="new-password"
                minLength={8}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={passwordForm.confirmPassword}
                onChange={handlePasswordChange('confirmPassword')}
                disabled={isChangingPassword}
                autoComplete="new-password"
                minLength={8}
              />
            </FormGroup>

            {passwordMessage && (
              <StatusMessage $type={passwordMessage.type}>
                {passwordMessage.text}
              </StatusMessage>
            )}

            <div style={{ marginTop: '20px' }}>
              <LCARSButton 
                type="submit"
                disabled={isChangingPassword}
              >
                {isChangingPassword ? 'Changing Password...' : 'Change Password'}
              </LCARSButton>
            </div>
          </form>
        </LCARSPanel>
      </SettingsGrid>

      {/* System Management */}
      <LCARSPanel title="System Management">
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <LCARSButton 
            onClick={() => navigate('/settings/backup')}
            variant="secondary"
          >
            Backup Manager
          </LCARSButton>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <LCARSDataDisplay
            label="Interface Version"
            value="LCARS v1.0"
            valueColor="anakiwa"
          />
          <LCARSDataDisplay
            label="System Status"
            value="Operational"
            valueColor="success"
          />
          <LCARSDataDisplay
            label="API Endpoint"
            value={import.meta.env.VITE_API_BASE_URL || 'http://localhost:8585/api/v1'}
            valueColor="anakiwa"
          />
          <LCARSDataDisplay
            label="Authentication"
            value="JWT Token-based"
            valueColor="lilac"
          />
        </div>
      </LCARSPanel>
    </SettingsContainer>
  )
}