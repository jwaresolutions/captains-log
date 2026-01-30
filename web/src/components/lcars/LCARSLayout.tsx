import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import { OfflineIndicator } from '../OfflineIndicator'
import { NotificationPanel } from '../NotificationPanel'

// ---------------------------------------------------------------------------
// LCARS 2357 — Authentic TNG-era Library Computer Access/Retrieval System
// Layout: left sidebar with elbows connecting to horizontal header/footer bars
// ---------------------------------------------------------------------------

const SIDEBAR_W = '200px'
const ELBOW = '60px'
const HEADER_H = '60px'
const FOOTER_H = '40px'
const BAR_THICKNESS = '30px'
const GAP = '3px'
const BTN_H = '44px'
const MOBILE_BP = '768px'

// -- Animations ------------------------------------------------------------

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
`

// -- Root container --------------------------------------------------------

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: grid;
  background: ${p => p.theme.colors.background};
  grid-template-columns: ${SIDEBAR_W} 1fr;
  grid-template-rows: ${HEADER_H} 1fr ${FOOTER_H};
  grid-template-areas:
    "sidebar header"
    "sidebar content"
    "sidebar footer";
  gap: 0;
  animation: ${fadeIn} 0.6s ease;

  @media (max-width: ${MOBILE_BP}) {
    grid-template-columns: 1fr;
    grid-template-rows: ${HEADER_H} 1fr ${FOOTER_H};
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
`

// -- Sidebar ---------------------------------------------------------------
// The sidebar is a vertical strip composed of: top elbow, nav buttons, bottom elbow.
// There is no background — the colored blocks ARE the sidebar.

const Sidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: ${GAP};
  padding-right: ${GAP};
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${MOBILE_BP}) {
    display: none;
  }
`

// -- Elbow pieces ----------------------------------------------------------
// An elbow is an L-shaped connector. It's a colored rectangle with a
// quarter-circle cutout (achieved via an inner pseudo-element with
// border-radius and background: black).

const TopElbow = styled.div`
  width: ${SIDEBAR_W};
  height: ${ELBOW};
  background: ${p => p.theme.colors.primary.tanoi};
  position: relative;
  flex-shrink: 0;
  border-radius: 32px 0 0 0;

  /* Quarter-circle cutout — bottom-right corner */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: ${ELBOW};
    height: ${BAR_THICKNESS};
    background: ${p => p.theme.colors.background};
    border-radius: 0 24px 0 0;
  }
`

const BottomElbow = styled.div`
  width: ${SIDEBAR_W};
  height: ${ELBOW};
  background: ${p => p.theme.colors.primary.lilac};
  position: relative;
  flex-shrink: 0;
  border-radius: 0 0 0 32px;
  margin-top: auto;

  /* Quarter-circle cutout — top-right corner */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: ${ELBOW};
    height: ${BAR_THICKNESS};
    background: ${p => p.theme.colors.background};
    border-radius: 0 0 24px 0;
  }
`

// -- Sidebar nav buttons ---------------------------------------------------
// Pill-shaped: flat left edge, rounded right edge.

const NAV_COLORS = [
  'tanoi',
  'anakiwa',
  'lilac',
  'goldenTanoi',
  'neonCarrot',
  'paleCanary',
  'mariner',
  'anakiwa',
  'lilac',
  'tanoi',
  'goldenTanoi',
] as const

const activeGlow = keyframes`
  0%, 100% { box-shadow: 0 0 8px currentColor, inset 0 0 8px rgba(255,255,255,0.15); }
  50%      { box-shadow: 0 0 18px currentColor, inset 0 0 12px rgba(255,255,255,0.25); }
`

const SidebarButton = styled.button<{ $color: string; $isActive: boolean }>`
  width: 100%;
  height: ${BTN_H};
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  background: ${p => p.$color};
  color: ${p => p.theme.colors.text.inverse};
  font-family: ${p => p.theme.typography.fontFamily.primary};
  font-size: ${p => p.theme.typography.fontSize.md};
  font-weight: ${p => p.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.typography.letterSpacing.wide};
  text-align: right;
  padding: 0 18px 0 0;
  border-radius: 0 24px 24px 0;
  transition: filter 0.15s ease, transform 0.1s ease;
  position: relative;
  animation: ${slideIn} 0.4s ease backwards;

  ${p => p.$isActive && css`
    filter: brightness(1.35);
    animation: ${activeGlow} 2s ease-in-out infinite;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 4px;
      bottom: 4px;
      width: 4px;
      background: #fff;
      border-radius: 0 2px 2px 0;
    }
  `}

  &:hover:not(:disabled) {
    filter: brightness(1.25);
    transform: translateX(3px);
  }

  &:active:not(:disabled) {
    filter: brightness(1.4);
    transform: translateX(1px);
  }
`

// Thin filler bars between buttons (decorative)
const FillerBar = styled.div<{ $color: string }>`
  width: 60%;
  height: 3px;
  background: ${p => p.$color};
  border-radius: 0 2px 2px 0;
  flex-shrink: 0;
  opacity: 0.6;
`

// -- Header bar ------------------------------------------------------------
// Horizontal bar spanning from after the elbow to the right edge.

const HeaderBar = styled.header`
  grid-area: header;
  background: ${p => p.theme.colors.primary.tanoi};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  /* Left notch — connects visually to the elbow cutout */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 24px;
    height: ${BAR_THICKNESS};
    background: ${p => p.theme.colors.background};
    border-radius: 0 12px 0 0;
  }

  @media (max-width: ${MOBILE_BP}) {
    border-radius: 0;
    justify-content: center;
    &::before { display: none; }
  }
`

const HeaderTitle = styled.h1`
  color: ${p => p.theme.colors.text.inverse};
  font-family: ${p => p.theme.typography.fontFamily.primary};
  font-size: ${p => p.theme.typography.fontSize.xl};
  font-weight: ${p => p.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.typography.letterSpacing.extraWide};
  margin: 0;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.2s;

  &:hover { opacity: 0.8; }

  @media (max-width: ${MOBILE_BP}) {
    font-size: ${p => p.theme.typography.fontSize.lg};
    letter-spacing: ${p => p.theme.typography.letterSpacing.wide};
  }
`

const HeaderStardate = styled.span`
  color: ${p => p.theme.colors.text.inverse};
  font-family: ${p => p.theme.typography.fontFamily.primary};
  font-size: ${p => p.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.typography.letterSpacing.wide};
  margin-right: auto;
  padding-left: 40px;
  opacity: 0.75;

  @media (max-width: ${MOBILE_BP}) {
    display: none;
  }
`

// -- Content area ----------------------------------------------------------

const ContentArea = styled.main`
  grid-area: content;
  background: ${p => p.theme.colors.background};
  overflow-y: auto;
  padding: ${p => p.theme.spacing.lg};
  position: relative;

  /* Subtle inner border glow on left edge */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: ${p => p.theme.colors.primary.eggplant};
    opacity: 0.4;
  }

  @media (max-width: ${MOBILE_BP}) {
    padding: ${p => p.theme.spacing.md};
    &::before { display: none; }
  }
`

// -- Footer bar ------------------------------------------------------------

const FooterBar = styled.footer`
  grid-area: footer;
  background: ${p => p.theme.colors.primary.lilac};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  /* Left notch — mirrors header */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: ${BAR_THICKNESS};
    background: ${p => p.theme.colors.background};
    border-radius: 0 0 12px 0;
  }

  @media (max-width: ${MOBILE_BP}) {
    border-radius: 0;
    justify-content: center;
    &::before { display: none; }
  }
`

const FooterText = styled.span`
  color: ${p => p.theme.colors.text.inverse};
  font-family: ${p => p.theme.typography.fontFamily.primary};
  font-size: ${p => p.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.typography.letterSpacing.wide};
  opacity: 0.8;
`

// -- Mobile overlay menu ---------------------------------------------------

const MobileOverlay = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: ${MOBILE_BP}) {
    display: ${p => p.$open ? 'flex' : 'none'};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    z-index: ${p => p.theme.zIndex.modal};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 24px;
  }
`

const MobileOverlayBtn = styled.button<{ $color: string; $isActive: boolean }>`
  width: 80%;
  max-width: 320px;
  height: 48px;
  border: none;
  cursor: pointer;
  background: ${p => p.$isActive ? p.$color : `${p.$color}44`};
  color: ${p => p.$isActive ? p.theme.colors.text.inverse : p.$color};
  font-family: ${p => p.theme.typography.fontFamily.primary};
  font-size: ${p => p.theme.typography.fontSize.md};
  font-weight: ${p => p.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.typography.letterSpacing.wide};
  border-radius: 0 24px 24px 0;
  transition: background 0.15s, transform 0.1s;

  &:hover {
    filter: brightness(1.2);
    transform: translateX(4px);
  }
`

const MobileCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: ${p => p.theme.colors.primary.neonCarrot};
  color: ${p => p.theme.colors.text.inverse};
  border: none;
  font-family: ${p => p.theme.typography.fontFamily.primary};
  font-size: ${p => p.theme.typography.fontSize.md};
  font-weight: ${p => p.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 24px;
  cursor: pointer;
`

const MobileMenuTrigger = styled.button`
  display: none;
  @media (max-width: ${MOBILE_BP}) {
    display: block;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: 2px solid ${p => p.theme.colors.text.inverse};
    color: ${p => p.theme.colors.text.inverse};
    font-family: ${p => p.theme.typography.fontFamily.primary};
    font-size: ${p => p.theme.typography.fontSize.sm};
    font-weight: ${p => p.theme.typography.fontWeight.bold};
    text-transform: uppercase;
    padding: 6px 12px;
    border-radius: 12px;
    cursor: pointer;
  }
`

// -- Utilities panel -------------------------------------------------------

const UtilityRow = styled.div`
  position: absolute;
  top: 4px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 2;
`

// ---------------------------------------------------------------------------
// Navigation data
// ---------------------------------------------------------------------------

interface NavItem {
  label: string
  path: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: '/' },
  { label: 'Vessels', path: '/boats' },
  { label: 'Trip Log', path: '/trips' },
  { label: 'Notes', path: '/notes' },
  { label: 'To-Do Lists', path: '/todos' },
  { label: 'Maintenance', path: '/maintenance' },
  { label: 'Navigation', path: '/map' },
  { label: 'Reports', path: '/reports' },
  { label: 'Calendar', path: '/calendar' },
  { label: 'Photos', path: '/photos' },
  { label: 'Settings', path: '/settings' },
]

// Compute a TNG-style stardate (just decorative)
function getStardate(): string {
  const now = new Date()
  const year = now.getFullYear()
  const start = new Date(year, 0, 1).getTime()
  const fraction = ((now.getTime() - start) / (365.25 * 86400000)) * 1000
  return `${year - 323}.${fraction.toFixed(1)}`
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface LCARSLayoutProps {
  children: React.ReactNode
}

export const LCARSLayout: React.FC<LCARSLayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '/dashboard'
    return location.pathname.startsWith(path)
  }

  const go = (path: string) => {
    navigate(path)
    setMobileMenuOpen(false)
  }

  const stardate = getStardate()

  // Pick LCARS palette colors for each nav item
  const FILLER_COLORS = ['#664466', '#3366CC', '#006699', '#CC99CC', '#FFCC66']

  return (
    <LayoutContainer>
      <OfflineIndicator />

      {/* ---- Sidebar (desktop) ---- */}
      <Sidebar>
        <TopElbow />

        {NAV_ITEMS.map((item, i) => {
          const colorKey = NAV_COLORS[i % NAV_COLORS.length]
          // Resolve the hex color from theme at render via a lookup
          const colorMap: Record<string, string> = {
            tanoi: '#FFCC99',
            goldenTanoi: '#FFCC66',
            neonCarrot: '#FF9933',
            lilac: '#CC99CC',
            anakiwa: '#99CCFF',
            mariner: '#3366CC',
            paleCanary: '#FFFF99',
            eggplant: '#664466',
            bahamBlue: '#006699',
          }
          const hex = colorMap[colorKey] || '#FFCC99'

          return (
            <React.Fragment key={item.path}>
              {i > 0 && (
                <FillerBar $color={FILLER_COLORS[i % FILLER_COLORS.length]} />
              )}
              <SidebarButton
                $color={hex}
                $isActive={isActive(item.path)}
                onClick={() => go(item.path)}
                style={{ animationDelay: `${i * 50}ms` }}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </SidebarButton>
            </React.Fragment>
          )
        })}

        <BottomElbow />
      </Sidebar>

      {/* ---- Header bar ---- */}
      <HeaderBar>
        <MobileMenuTrigger onClick={() => setMobileMenuOpen(true)}>
          Menu
        </MobileMenuTrigger>
        <HeaderStardate>Stardate {stardate}</HeaderStardate>
        <HeaderTitle onClick={() => go('/')}>Captain&apos;s Log</HeaderTitle>
        <UtilityRow>
          <NotificationPanel />
        </UtilityRow>
      </HeaderBar>

      {/* ---- Main content ---- */}
      <ContentArea>
        {children}
      </ContentArea>

      {/* ---- Footer bar ---- */}
      <FooterBar>
        <FooterText>LCARS v47.3 &mdash; Library Computer Access/Retrieval System</FooterText>
      </FooterBar>

      {/* ---- Mobile overlay menu ---- */}
      <MobileOverlay $open={mobileMenuOpen}>
        <MobileCloseBtn onClick={() => setMobileMenuOpen(false)}>Close</MobileCloseBtn>
        {NAV_ITEMS.map((item, i) => {
          const colorMap: Record<string, string> = {
            tanoi: '#FFCC99', goldenTanoi: '#FFCC66', neonCarrot: '#FF9933',
            lilac: '#CC99CC', anakiwa: '#99CCFF', mariner: '#3366CC',
            paleCanary: '#FFFF99', eggplant: '#664466', bahamBlue: '#006699',
          }
          const hex = colorMap[NAV_COLORS[i % NAV_COLORS.length]] || '#FFCC99'
          return (
            <MobileOverlayBtn
              key={item.path}
              $color={hex}
              $isActive={isActive(item.path)}
              onClick={() => go(item.path)}
            >
              {item.label}
            </MobileOverlayBtn>
          )
        })}
      </MobileOverlay>
    </LayoutContainer>
  )
}
