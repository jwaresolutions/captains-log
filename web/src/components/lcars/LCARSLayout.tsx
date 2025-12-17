import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { LCARSBreadcrumbs } from './LCARSBreadcrumbs'
import { OfflineIndicator } from '../OfflineIndicator'
import { NotificationPanel } from '../NotificationPanel'

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
`

const Header = styled.header`
  background-color: ${props => props.theme.colors.surface.dark};
  padding: ${props => props.theme.spacing.md};
  border-bottom: 2px solid ${props => props.theme.colors.primary.orange};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.md};
    align-items: stretch;
  }
`

const HeaderTitle = styled.h1`
  color: ${props => props.theme.colors.primary.orange};
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primary.orangeLight};
  }
  
  @media (max-width: 1024px) {
    text-align: center;
    font-size: ${props => props.theme.typography.fontSize.lg};
  }
  
  @media (max-width: 480px) {
    font-size: ${props => props.theme.typography.fontSize.md};
    letter-spacing: 1px;
  }
`

const Navigation = styled.nav<{ $isOpen?: boolean }>`
  display: flex;
  gap: 20px;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: 2px solid ${props => props.theme.colors.primary.blue};
  color: ${props => props.theme.colors.primary.blue};
  padding: 8px 12px;
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary.orange};
    color: ${props => props.theme.colors.primary.orange};
  }
  
  @media (max-width: 768px) {
    display: block;
    align-self: center;
  }
`

const NavButton = styled.button<{ $isActive?: boolean }>`
  background: ${props => props.$isActive 
    ? props.theme.colors.primary.orange 
    : 'transparent'
  };
  border: 2px solid ${props => props.$isActive 
    ? props.theme.colors.primary.orange 
    : props.theme.colors.primary.blue
  };
  color: ${props => props.$isActive 
    ? props.theme.colors.background 
    : props.theme.colors.primary.blue
  };
  padding: 8px 16px;
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary.orange};
    color: ${props => props.$isActive 
      ? props.theme.colors.background 
      : props.theme.colors.primary.orange
    };
    background: ${props => props.$isActive 
      ? props.theme.colors.primary.orange 
      : `${props.theme.colors.primary.orange}20`
    };
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 1024px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.lg};
  
  @media (max-width: 768px) {
    padding: ${props => props.theme.spacing.md};
  }
  
  @media (max-width: 480px) {
    padding: ${props => props.theme.spacing.sm};
  }
`

const Footer = styled.footer`
  background-color: ${props => props.theme.colors.surface.dark};
  padding: ${props => props.theme.spacing.md};
  border-top: 2px solid ${props => props.theme.colors.primary.orange};
  text-align: center;
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  
  @media (max-width: 480px) {
    padding: ${props => props.theme.spacing.sm};
    font-size: ${props => props.theme.typography.fontSize.xs};
  }
`

interface LCARSLayoutProps {
  children: React.ReactNode
}

export const LCARSLayout: React.FC<LCARSLayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleTitleClick = () => {
    navigate('/')
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (path: string) => {
    navigate(path)
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path: string) => {
    if (path === '/' || path === '/dashboard') {
      return location.pathname === '/' || location.pathname === '/dashboard'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <LayoutContainer>
      <OfflineIndicator />
      <Header>
        <HeaderTitle onClick={handleTitleClick}>
          Captain's Log - LCARS Interface
        </HeaderTitle>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? 'Close Menu' : 'Menu'}
        </MobileMenuButton>
        <Navigation $isOpen={isMobileMenuOpen}>
          <NavButton 
            $isActive={isActive('/')} 
            onClick={() => handleNavClick('/')}
          >
            Dashboard
          </NavButton>
          <NavButton 
            $isActive={isActive('/boats')} 
            onClick={() => handleNavClick('/boats')}
          >
            Vessels
          </NavButton>
          <NavButton 
            $isActive={isActive('/trips')} 
            onClick={() => handleNavClick('/trips')}
          >
            Trip Log
          </NavButton>
          <NavButton 
            $isActive={isActive('/notes')} 
            onClick={() => handleNavClick('/notes')}
          >
            Notes
          </NavButton>
          <NavButton 
            $isActive={isActive('/todos')} 
            onClick={() => handleNavClick('/todos')}
          >
            To-Do Lists
          </NavButton>
          <NavButton 
            $isActive={isActive('/maintenance')} 
            onClick={() => handleNavClick('/maintenance')}
          >
            Maintenance
          </NavButton>
          <NavButton 
            $isActive={isActive('/map')} 
            onClick={() => handleNavClick('/map')}
          >
            Navigation
          </NavButton>
          <NavButton 
            $isActive={isActive('/reports')} 
            onClick={() => handleNavClick('/reports')}
          >
            Reports
          </NavButton>
          <NavButton 
            $isActive={isActive('/calendar')} 
            onClick={() => handleNavClick('/calendar')}
          >
            Calendar
          </NavButton>
          <NavButton 
            $isActive={isActive('/photos')} 
            onClick={() => handleNavClick('/photos')}
          >
            Photos
          </NavButton>
          <NavButton 
            $isActive={isActive('/settings')} 
            onClick={() => handleNavClick('/settings')}
          >
            Settings
          </NavButton>
          <NotificationPanel />
        </Navigation>
      </Header>
      <LCARSBreadcrumbs />
      <MainContent>
        {children}
      </MainContent>
      <Footer>
        LCARS Interface v1.0 - Captain's Log
      </Footer>
    </LayoutContainer>
  )
}