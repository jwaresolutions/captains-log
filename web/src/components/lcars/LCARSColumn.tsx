import React from 'react'
import styled, { css } from 'styled-components'

interface LCARSColumnProps {
  children: React.ReactNode
  width?: string | number
  position?: 'left' | 'right'
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

const columnPositions = {
  left: css`
    border-right: 2px solid ${props => props.theme.colors.primary.orange};
    padding-right: ${props => props.theme.spacing.md};
  `,
  right: css`
    border-left: 2px solid ${props => props.theme.colors.primary.orange};
    padding-left: ${props => props.theme.spacing.md};
  `,
}

const gapSizes = {
  sm: css`
    gap: ${props => props.theme.spacing.sm};
  `,
  md: css`
    gap: ${props => props.theme.spacing.md};
  `,
  lg: css`
    gap: ${props => props.theme.spacing.lg};
  `,
}

const StyledColumn = styled.div<{
  width: string | number
  position: keyof typeof columnPositions
  gap: keyof typeof gapSizes
}>`
  display: flex;
  flex-direction: column;
  width: ${props => typeof props.width === 'number' ? `${props.width}px` : props.width};
  min-height: 100%;
  
  ${props => columnPositions[props.position]}
  ${props => gapSizes[props.gap]}
`

const ColumnItem = styled.div`
  flex-shrink: 0;
`

export const LCARSColumn: React.FC<LCARSColumnProps> = ({
  children,
  width = '200px',
  position = 'left',
  gap = 'md',
  className,
}) => {
  return (
    <StyledColumn
      width={width}
      position={position}
      gap={gap}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <ColumnItem key={index}>
          {child}
        </ColumnItem>
      ))}
    </StyledColumn>
  )
}