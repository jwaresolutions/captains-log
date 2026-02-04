import React, { useState } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const StyledInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.colors.surface.dark};
  border: 2px solid ${props => props.theme.colors.primary.neonCarrot};
  border-radius: ${props => props.theme.borderRadius.sm};
  padding: ${props => props.theme.spacing.md};
  padding-right: 50px;
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.fontSize.md};
  font-family: ${props => props.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.tanoi};
    box-shadow: ${props => props.theme.shadows.glow};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ToggleButton = styled.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary.anakiwa};
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    color: ${props => props.theme.colors.primary.neonCarrot};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

interface PasswordInputProps {
  id?: string
  name?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  disabled?: boolean
  minLength?: number
  autoComplete?: string
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  minLength,
  autoComplete,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <InputWrapper>
      <StyledInput
        type={showPassword ? 'text' : 'password'}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        minLength={minLength}
        autoComplete={autoComplete}
      />
      <ToggleButton
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        disabled={disabled}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? 'Hide' : 'Show'}
      </ToggleButton>
    </InputWrapper>
  )
}
