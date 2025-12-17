import React from 'react'
import styled, { css } from 'styled-components'

interface LCARSBarProps {
  width?: string | number
  height?: string | number
  color?: 'orange' | 'purple' | 'blue'
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

const barColors = {
  orange: css`
    background-color: ${props => props.theme.colors.primary.orange};
  `,
  purple: css`
    background-color: ${props => props.theme.colors.primary.purple};
  `,
  blue: css`
    background-color: ${props => props.theme.colors.primary.blue};
  `,
}

const StyledBar = styled.div<{
  width: string | number
  height: string | number
  color: keyof typeof barColors
  orientation: 'horizontal' | 'vertical'
}>`
  display: inline-block;
  flex-shrink: 0;
  width: ${props => typeof props.width === 'number' ? `${props.width}px` : props.width};
  height: ${props => typeof props.height === 'number' ? `${props.height}px` : props.height};
  border-radius: ${props => props.theme.borderRadius.pill};
  
  ${props => barColors[props.color]}
  
  ${props => props.orientation === 'horizontal' && css`
    min-height: 8px;
  `}
  
  ${props => props.orientation === 'vertical' && css`
    min-width: 8px;
  `}
`

export const LCARSBar: React.FC<LCARSBarProps> = ({
  width = '100%',
  height = '8px',
  color = 'orange',
  orientation = 'horizontal',
  className,
}) => {
  // Adjust default dimensions based on orientation
  const defaultWidth = orientation === 'vertical' ? '8px' : width
  const defaultHeight = orientation === 'horizontal' ? '8px' : height

  return (
    <StyledBar
      width={defaultWidth}
      height={defaultHeight}
      color={color}
      orientation={orientation}
      className={className}
      aria-hidden="true"
    />
  )
}