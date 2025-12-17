import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* Import Antonio font from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&display=swap');

  /* CSS Reset and Base Styles */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily.primary};
    font-size: ${props => props.theme.typography.fontSize.md};
    line-height: ${props => props.theme.typography.lineHeight.normal};
    color: ${props => props.theme.colors.text.primary};
    background-color: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
  }

  /* LCARS-specific global styles */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.primary.orange};
  }

  h1 {
    font-size: ${props => props.theme.typography.fontSize.xxxl};
  }

  h2 {
    font-size: ${props => props.theme.typography.fontSize.xxl};
  }

  h3 {
    font-size: ${props => props.theme.typography.fontSize.xl};
  }

  h4 {
    font-size: ${props => props.theme.typography.fontSize.lg};
  }

  h5, h6 {
    font-size: ${props => props.theme.typography.fontSize.md};
  }

  /* Button reset */
  button {
    font-family: inherit;
    font-size: inherit;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
  }

  /* Input reset */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: ${props => props.theme.colors.surface.dark};
    border: 2px solid ${props => props.theme.colors.primary.orange};
    border-radius: ${props => props.theme.borderRadius.sm};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary.orangeLight};
      box-shadow: ${props => props.theme.shadows.glow};
    }
    
    &::placeholder {
      color: ${props => props.theme.colors.text.muted};
    }
  }

  /* Link styles */
  a {
    color: ${props => props.theme.colors.primary.blue};
    text-decoration: none;
    
    &:hover {
      color: ${props => props.theme.colors.primary.blueLight};
      text-decoration: underline;
    }
  }

  /* Scrollbar styling for LCARS theme */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.surface.dark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary.orange};
    border-radius: ${props => props.theme.borderRadius.pill};
    
    &:hover {
      background: ${props => props.theme.colors.primary.orangeLight};
    }
  }

  /* Selection styling */
  ::selection {
    background-color: ${props => props.theme.colors.primary.orange};
    color: ${props => props.theme.colors.text.inverse};
  }

  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .font-mono {
    font-family: ${props => props.theme.typography.fontFamily.monospace};
  }

  /* Animation classes */
  .fade-in {
    animation: fadeIn ${props => props.theme.animation.normal} ease-in-out;
  }

  .slide-in-right {
    animation: slideInRight ${props => props.theme.animation.normal} ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* LCARS blink animation for alerts */
  @keyframes lcars-blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0.3;
    }
  }

  .lcars-blink {
    animation: lcars-blink 1s infinite;
  }

  /* Responsive utilities */
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    body {
      font-size: ${props => props.theme.typography.fontSize.sm};
    }
    
    h1 {
      font-size: ${props => props.theme.typography.fontSize.xxl};
    }
    
    h2 {
      font-size: ${props => props.theme.typography.fontSize.xl};
    }
  }
`