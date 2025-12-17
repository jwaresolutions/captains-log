// LCARS (Library Computer Access/Retrieval System) Theme
// Based on Star Trek TNG/Voyager interface design

export const lcarsTheme = {
  colors: {
    // Primary LCARS colors
    primary: {
      orange: '#FF9966',
      orangeLight: '#FFCC99',
      purple: '#CC99CC',
      purpleLight: '#9999CC',
      blue: '#6688CC',
      blueLight: '#99CCFF',
    },
    
    // Background and surface colors
    background: '#000000',
    surface: {
      dark: '#111111',
      medium: '#222222',
      light: '#333333',
    },
    
    // Text colors
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
      muted: '#999999',
      inverse: '#000000',
    },
    
    // Status colors
    status: {
      success: '#66FF66',
      warning: '#FFFF66',
      error: '#FF6666',
      info: '#66CCFF',
    },
    
    // Interactive states
    interactive: {
      hover: '#FFFFFF',
      active: '#FFCC99',
      disabled: '#666666',
    },
  },
  
  // Typography
  typography: {
    fontFamily: {
      primary: "'Antonio', 'Helvetica Neue', Arial, sans-serif",
      monospace: "'Courier New', monospace",
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '24px',
      xxl: '32px',
      xxxl: '48px',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      loose: 1.8,
    },
  },
  
  // Spacing
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
  },
  
  // Border radius for LCARS elements
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    pill: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px rgba(255, 153, 102, 0.1)',
    md: '0 4px 6px rgba(255, 153, 102, 0.1)',
    lg: '0 10px 15px rgba(255, 153, 102, 0.1)',
    glow: '0 0 20px rgba(255, 153, 102, 0.3)',
  },
  
  // Z-index layers
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
  
  // Animation durations
  animation: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
}

export type LCARSTheme = typeof lcarsTheme

// Styled-components theme type augmentation
declare module 'styled-components' {
  export interface DefaultTheme extends LCARSTheme {}
}