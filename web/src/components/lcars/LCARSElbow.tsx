import React from 'react'
import styled, { css } from 'styled-components'

interface LCARSElbowProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'sm' | 'md' | 'lg'
  color?: 'orange' | 'purple' | 'blue'
  className?: string
}

const elbowPositions = {
  'top-left': css`
    border-top-left-radius: 0;
    border-top-right-radius: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 0;
  `,
  'top-right': css`
    border-top-left-radius: 100%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 100%;
  `,
  'bottom-left': css`
    border-top-left-radius: 100%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 100%;
  `,
  'bottom-right': css`
    border-top-left-radius: 0;
    border-top-right-radius: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 0;
  `,
}

const elbowSizes = {
  sm: css`
    width: 40px;
    height: 40px;
  `,
  md: css`
    width: 60px;
    height: 60px;
  `,
  lg: css`
    width: 80px;
    height: 80px;
  `,
}

const elbowColors = {
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

const StyledElbow = styled.div<{
  position: keyof typeof elbowPositions
  size: keyof typeof elbowSizes
  color: keyof typeof elbowColors
}>`
  display: inline-block;
  flex-shrink: 0;
  
  ${props => elbowPositions[props.position]}
  ${props => elbowSizes[props.size]}
  ${props => elbowColors[props.color]}
`

export const LCARSElbow: React.FC<LCARSElbowProps> = ({
  position,
  size = 'md',
  color = 'orange',
  className,
}) => {
  return (
    <StyledElbow
      position={position}
      size={size}
      color={color}
      className={className}
      aria-hidden="true"
    />
  )
}