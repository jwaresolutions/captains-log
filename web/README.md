# Captain's Log - Web Application

A React-based web application with LCARS (Library Computer Access/Retrieval System) design inspired by Star Trek TNG/Voyager for the Boat Tracking System.

## Features

- **LCARS Design System**: Authentic Star Trek TNG/Voyager interface aesthetic
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Full type safety throughout the application
- **Vite**: Fast build tool and development server
- **Styled Components**: CSS-in-JS with theme support
- **React Query**: Efficient data fetching and caching
- **React Router**: Client-side routing
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend API running on port 8585

### Installation

1. Navigate to the web directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
web/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   └── lcars/         # LCARS design system components
│   ├── pages/             # Page components
│   ├── services/          # API client services
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   ├── styles/            # Global styles and theme
│   ├── utils/             # Utility functions
│   └── test/              # Test setup and utilities
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## LCARS Design System

The application implements an authentic LCARS interface with:

### Color Palette
- **Primary Orange**: #FF9966, #FFCC99
- **Purple**: #CC99CC, #9999CC  
- **Blue**: #6688CC, #99CCFF
- **Background**: #000000
- **Surface**: #111111, #222222, #333333

### Typography
- **Primary Font**: Antonio (Google Fonts)
- **Monospace**: Courier New
- **Uppercase labels and headers**
- **Bold weights for emphasis**

### Components
- **LCARSButton**: Pill-shaped buttons with LCARS styling
- **LCARSPanel**: Rounded rectangular panels for content
- **LCARSElbow**: Corner elements for layout structure
- **LCARSBar**: Horizontal decorative bars
- **LCARSColumn**: Vertical side panels
- **LCARSDataDisplay**: Monospace data readouts
- **LCARSHeader**: Large bold headers
- **LCARSAlert**: Blinking alert indicators

## Environment Variables

Create a `.env` file with:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8585/api/v1

# Environment
VITE_NODE_ENV=development

# Feature Flags
VITE_ENABLE_MOCK_DATA=false
VITE_ENABLE_DEBUG_LOGS=true
```

## Development

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation if needed

### Adding New Components

1. Create component in appropriate `src/components/` subdirectory
2. Export from component's index file
3. Add to Storybook if applicable

### API Integration

1. Add type definitions to `src/types/api.ts`
2. Add service methods to `src/services/api.ts`
3. Create React Query hooks in `src/hooks/`

## Testing

The application uses Vitest for testing with React Testing Library:

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

## Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist/` directory.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Follow the existing code style and patterns
2. Maintain LCARS design consistency
3. Add tests for new functionality
4. Update documentation as needed

## License

This project is part of the Boat Tracking System.