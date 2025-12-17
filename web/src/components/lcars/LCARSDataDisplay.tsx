import React from 'react'
import styled, { css } from 'styled-components'

interface LCARSDataDisplayProps {
  label: string
  value: string | number
  unit?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'orange' | 'purple' | 'blue' | 'green'
  className?: string
}

const displaySizes = {
  sm: css`
    .data-label {
      font-size: ${props => props.theme.typography.fontSize.xs};
    }
    .data-value {
      font-size: ${props => props.theme.typography.fontSize.md};
    }
    .data-unit {
      font-size: ${props => props.theme.typography.fontSize.sm};
    }
  `,
  md: css`
    .data-label {
      font-size: ${props => props.theme.typography.fontSize.sm};
    }
    .data-value {
      font-size: ${props => props.theme.typography.fontSize.lg};
    }
    .data-unit {
      font-size: ${props => props.theme.typography.fontSize.md};
    }
  `,
  lg: css`
    .data-label {
      font-size: ${props => props.theme.typography.fontSize.md};
    }
    .data-value {
      font-size: ${props => props.theme.typography.fontSize.xl};
    }
    .data-unit {
      font-size: ${props => props.theme.typography.fontSize.lg};
    }
  `,
}

const displayColors = {
  orange: css`
    .data-value {
      color: ${props => props.theme.colors.primary.orange};
    }
  `,
  purple: css`
    .data-value {
      color: ${props => props.theme.colors.primary.purple};
    }
  `,
  blue: css`
    .data-value {
      color: ${props => props.theme.colors.primary.blue};
    }
  `,
  green: css`
    .data-value {
      color: ${props => props.theme.colors.status.success};
    }
  `,
}

const StyledDataDisplay = styled.div<{
  size: keyof typeof displaySizes
  color: keyof typeof displayColors
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.sm};
  background-color: ${props => props.theme.colors.surface.dark};
  border: 1px solid ${props => props.theme.colors.surface.light};
  border-radius: ${props => props.theme.borderRadius.sm};
  
  ${props => displaySizes[props.size]}
  ${props => displayColors[props.color]}
`

const DataLabel = styled.div`
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.text.secondary};
`

const DataValueContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${props => props.theme.spacing.xs};
`

const DataValue = styled.div`
  font-family: ${props => props.theme.typography.fontFamily.monospace};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  line-height: ${props => props.theme.typography.lineHeight.tight};
`

const DataUnit = styled.div`
  font-family: ${props => props.theme.typography.fontFamily.primary};
  color: ${props => props.theme.colors.text.muted};
  text-transform: uppercase;
`

export const LCARSDataDisplay: React.FC<LCARSDataDisplayProps> = ({
  label,
  value,
  unit,
  size = 'md',
  color = 'orange',
  className,
}) => {
  return (
    <StyledDataDisplay size={size} color={color} className={className}>
      <DataLabel className="data-label">
        {label}
      </DataLabel>
      <DataValueContainer>
        <DataValue className="data-value">
          {value}
        </DataValue>
        {unit && (
          <DataUnit className="data-unit">
            {unit}
          </DataUnit>
        )}
      </DataValueContainer>
    </StyledDataDisplay>
  )
}