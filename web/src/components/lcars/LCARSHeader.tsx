import React from 'react'
import styled, { css } from 'styled-components'

interface LCARSHeaderProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  color?: 'orange' | 'purple' | 'blue'
  align?: 'left' | 'center' | 'right'
  className?: string
}

const headerLevels = {
  1: css`
    font-size: ${props => props.theme.typography.fontSize.xxxl};
  `,
  2: css`
    font-size: ${props => props.theme.typography.fontSize.xxl};
  `,
  3: css`
    font-size: ${props => props.theme.typography.fontSize.xl};
  `,
  4: css`
    font-size: ${props => props.theme.typography.fontSize.lg};
  `,
  5: css`
    font-size: ${props => props.theme.typography.fontSize.md};
  `,
  6: css`
    font-size: ${props => props.theme.typography.fontSize.md};
  `,
}

const headerColors = {
  orange: css`
    color: ${props => props.theme.colors.primary.orange};
  `,
  purple: css`
    color: ${props => props.theme.colors.primary.purple};
  `,
  blue: css`
    color: ${props => props.theme.colors.primary.blue};
  `,
}

const headerAlignments = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
}

const StyledHeader = styled.div<{
  level: keyof typeof headerLevels
  color: keyof typeof headerColors
  align: keyof typeof headerAlignments
}>`
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: ${props => props.theme.typography.lineHeight.tight};
  margin: 0;
  
  ${props => headerLevels[props.level]}
  ${props => headerColors[props.color]}
  ${props => headerAlignments[props.align]}
`

export const LCARSHeader: React.FC<LCARSHeaderProps> = ({
  children,
  level = 1,
  color = 'orange',
  align = 'left',
  className,
}) => {
  const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <StyledHeader
      as={HeaderTag}
      level={level}
      color={color}
      align={align}
      className={className}
    >
      {children}
    </StyledHeader>
  )
}