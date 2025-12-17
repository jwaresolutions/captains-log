import React from 'react'
import styled, { css } from 'styled-components'

interface LCARSPanelProps {
  children: React.ReactNode
  title?: string
  variant?: 'primary' | 'secondary' | 'accent'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
}

const panelVariants = {
  primary: css`
    border: 2px solid ${props => props.theme.colors.primary.orange};
    background-color: ${props => props.theme.colors.surface.dark};
    
    .panel-header {
      background-color: ${props => props.theme.colors.primary.orange};
      color: ${props => props.theme.colors.text.inverse};
    }
  `,
  secondary: css`
    border: 2px solid ${props => props.theme.colors.primary.purple};
    background-color: ${props => props.theme.colors.surface.dark};
    
    .panel-header {
      background-color: ${props => props.theme.colors.primary.purple};
      color: ${props => props.theme.colors.text.primary};
    }
  `,
  accent: css`
    border: 2px solid ${props => props.theme.colors.primary.blue};
    background-color: ${props => props.theme.colors.surface.dark};
    
    .panel-header {
      background-color: ${props => props.theme.colors.primary.blue};
      color: ${props => props.theme.colors.text.primary};
    }
  `,
}

const paddingVariants = {
  none: css`
    padding: 0;
  `,
  sm: css`
    padding: ${props => props.theme.spacing.sm};
  `,
  md: css`
    padding: ${props => props.theme.spacing.md};
  `,
  lg: css`
    padding: ${props => props.theme.spacing.lg};
  `,
}

const StyledPanel = styled.div<{ variant: keyof typeof panelVariants; padding: keyof typeof paddingVariants }>`
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  
  ${props => panelVariants[props.variant]}
`

const PanelHeader = styled.div`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${props => props.theme.typography.fontSize.sm};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const PanelContent = styled.div<{ padding: keyof typeof paddingVariants }>`
  ${props => paddingVariants[props.padding]}
`

export const LCARSPanel: React.FC<LCARSPanelProps> = ({
  children,
  title,
  variant = 'primary',
  padding = 'md',
  className,
}) => {
  return (
    <StyledPanel variant={variant} padding={padding} className={className}>
      {title && (
        <PanelHeader className="panel-header">
          {title}
        </PanelHeader>
      )}
      <PanelContent padding={padding}>
        {children}
      </PanelContent>
    </StyledPanel>
  )
}