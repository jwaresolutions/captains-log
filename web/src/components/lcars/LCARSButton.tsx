import React from 'react'
import styled, { css } from 'styled-components'

interface LCARSButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const buttonVariants = {
  primary: css`
    background-color: ${props => props.theme.colors.primary.orange};
    color: ${props => props.theme.colors.text.inverse};
    
    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colors.primary.orangeLight};
      box-shadow: ${props => props.theme.shadows.glow};
    }
  `,
  secondary: css`
    background-color: ${props => props.theme.colors.primary.purple};
    color: ${props => props.theme.colors.text.primary};
    
    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colors.primary.purpleLight};
      box-shadow: 0 0 20px rgba(204, 153, 204, 0.3);
    }
  `,
  accent: css`
    background-color: ${props => props.theme.colors.primary.blue};
    color: ${props => props.theme.colors.text.primary};
    
    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colors.primary.blueLight};
      box-shadow: 0 0 20px rgba(102, 136, 204, 0.3);
    }
  `,
  danger: css`
    background-color: ${props => props.theme.colors.status.error};
    color: ${props => props.theme.colors.text.inverse};
    
    &:hover:not(:disabled) {
      background-color: #FF8888;
      box-shadow: 0 0 20px rgba(255, 102, 102, 0.3);
    }
  `,
}

const buttonSizes = {
  sm: css`
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
    font-size: ${props => props.theme.typography.fontSize.sm};
    border-radius: ${props => props.theme.borderRadius.lg};
  `,
  md: css`
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
    font-size: ${props => props.theme.typography.fontSize.md};
    border-radius: ${props => props.theme.borderRadius.xl};
  `,
  lg: css`
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
    font-size: ${props => props.theme.typography.fontSize.lg};
    border-radius: ${props => props.theme.borderRadius.xl};
  `,
}

const StyledButton = styled.button<{ variant: keyof typeof buttonVariants; size: keyof typeof buttonSizes }>`
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  transition: all ${props => props.theme.animation.normal} ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  white-space: nowrap;
  
  ${props => buttonVariants[props.variant]}
  ${props => buttonSizes[props.size]}
  
  &:disabled {
    background-color: ${props => props.theme.colors.interactive.disabled};
    color: ${props => props.theme.colors.text.muted};
    cursor: not-allowed;
    box-shadow: none;
  }
  
  &:active:not(:disabled) {
    transform: translateY(1px);
  }
  
  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary.orangeLight};
    outline-offset: 2px;
  }
`

export const LCARSButton: React.FC<LCARSButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className,
  type = 'button',
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </StyledButton>
  )
}