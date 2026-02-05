# Hyderabad Flute Festival

A modern, responsive web application dedicated to celebrating the legacy of Late Sri Manda BalaRama Sarma through the Hyderabad Flute Festival. Built with React, TypeScript, Tailwind CSS, and Supabase for a seamless user experience.

## Project Overview

The Hyderabad Flute Festival website serves as a comprehensive platform for:
- Showcasing festival information and event details
- Managing participant registrations and event attendance
- Celebrating classical Carnatic flute music and its heritage
- Honoring the musical legacy of Late Sri Manda BalaRama Sarma

The platform features a beautiful, professional interface with secure authentication and real-time event management capabilities.

## Features

### Core Features
- **Responsive Design** - Mobile-first approach with full desktop support
- **User Authentication** - Secure login and registration system powered by Supabase
- **Event Registration** - Easy participant registration with form validation
- **Festival Information** - Comprehensive details about performances, schedule, and venue
- **Modern UI** - Clean, gradient-based design with smooth interactions
- **Real-time Updates** - Seamless data synchronization across the platform

### Authentication
- Email-based authentication with Supabase
- Secure session management
- Protected user routes
- Easy logout functionality
- Account registration and login flow

### Event Management
- Performance schedule and timing details
- Participant information and registration tracking
- Venue details and event logistics
- Contact information for organizers

## Tech Stack

### Frontend
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful, consistent icon library

### Backend & Database
- **Supabase** - Backend-as-a-Service platform
- **PostgreSQL** - Relational database
- **Row Level Security (RLS)** - Database security policies

### Build & Development
- **Node.js** - JavaScript runtime
- **npm** - Package management
- **ESLint** - Code quality
- **PostCSS & Autoprefixer** - CSS processing

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm 8.x or higher
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flute-festive
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the project root with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Create a production build:
```bash
npm run build
```

Compiled files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable React components
├── contexts/           # React Context API (Authentication)
├── lib/                # Utility libraries (Supabase client)
├── pages/              # Page components
│   ├── Home.tsx        # Main landing page
│   ├── Login.tsx       # User login
│   ├── Signup.tsx      # User registration
│   └── Registration.tsx # Event registration
├── App.tsx             # Main application component
├── main.tsx            # Entry point
└── index.css           # Global styles

public/                 # Static assets and images
supabase/
├── migrations/         # Database migrations
└── functions/          # Edge functions (if applicable)

vite.config.ts          # Vite configuration
tailwind.config.js      # Tailwind CSS configuration
tsconfig.json           # TypeScript configuration
```

## Database Schema

The application uses Supabase PostgreSQL with the following key tables:

### Registrations Table
Tracks festival participants and their attendance preferences.
- `id` - Unique identifier
- `user_id` - Reference to authenticated user
- `participation_type` - Type of participation (performer/observer)
- `created_at` - Registration timestamp

All tables have Row Level Security (RLS) policies enabled to ensure data privacy and security.

## Authentication Flow

1. **Landing Page** - Users see the festival information
2. **Sign Up** - New users create accounts with email/password
3. **Login** - Existing users authenticate
4. **Registration** - Authenticated users register for the event
5. **Dashboard** - Access to registered event details

## Styling

The project uses Tailwind CSS for all styling with:
- **Color Palette** - Warm tones (amber, orange, red) reflecting festival theme
- **Responsive Breakpoints** - Mobile (320px), Tablet (768px), Desktop (1024px+)
- **Spacing System** - 8px-based consistent spacing
- **Typography** - Clean hierarchy with optimized readability

### Color Scheme
- Primary: Amber (#F59E0B) - Festival warmth
- Secondary: Orange (#F97316) - Energy and celebration
- Accent: Red (#DC2626) - Cultural significance
- Neutral: Gray tones for text and backgrounds

## Code Quality

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types
- `npm run preview` - Preview production build

### Code Standards
- TypeScript for type safety
- ESLint configuration for code consistency
- Functional React components with hooks
- Props-based component communication

## Security

### Best Practices Implemented
- **Supabase Authentication** - Enterprise-grade user authentication
- **Row Level Security** - Database-level access control
- **Type Safety** - TypeScript prevents runtime errors
- **Environment Variables** - Sensitive data protected
- **HTTPS Ready** - Secure communication by default

## Performance Optimizations

- **Code Splitting** - Vite automatic code splitting
- **Image Optimization** - Responsive image delivery
- **CSS Optimization** - Tailwind purging unused styles
- **Fast Refresh** - HMR for development speed
- **Lazy Loading** - On-demand component loading

## Deployment

The application is ready for deployment on modern hosting platforms:

### Recommended Platforms
- **Vercel** - Optimized for Vite + React
- **Netlify** - Full-featured jamstack hosting
- **AWS Amplify** - Integrated with Supabase
- **Firebase Hosting** - Google's hosting solution

### Deployment Steps

1. Build the project: `npm run build`
2. Connect your git repository to your hosting platform
3. Set environment variables in platform dashboard
4. Deploy from the `dist/` directory

## Contributing

### Development Workflow
1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and test thoroughly
3. Commit with clear messages: `git commit -m "Add feature description"`
4. Push to your branch: `git push origin feature/your-feature`
5. Create a pull request for review

### Code Style Guidelines
- Use TypeScript for all new code
- Follow ESLint rules
- Write clear, descriptive variable and function names
- Keep components focused on single responsibility
- Add comments for complex logic

## Maintenance

### Regular Tasks
- Update dependencies monthly: `npm update`
- Review and fix security vulnerabilities: `npm audit`
- Monitor performance metrics
- Back up database regularly
- Review user feedback and logs

## Support & Contact

### Festival Organization
- **Contact** - Seshalatha Manda
- **Phone** - +91 9962243380
- **Email** - Latha.manda99@gmail.com

### Website Development
- **Developer** - Purna Chandra
- **Phone** - +91 7075069816
- **Email** - purnachandra.sde@gmail.com

### Venue
- **Location** - Shilparamam, Hyderabad
- **Duration** - 45 minutes performance
- **Audience** - Open to all visitors

## License

This project is developed specifically for the Hyderabad Flute Festival. All content and design are proprietary to the festival organization.

## Acknowledgments

This website is a tribute to **Late Sri Manda BalaRama Sarma**, a legendary flutist whose contributions to Carnatic music continue to inspire generations of musicians.

Special thanks to:
- SeshaLatha Manda - Festival organizer and artistic director
- Shesham Ramana - Flute ensemble conductor
- All supporting musicians and organizers
- The Supabase team for excellent backend infrastructure

## Changelog

### Version 1.0.0
- Initial release
- Complete festival information portal
- User authentication system
- Event registration functionality
- Responsive design
- Database integration with Supabase
- Production-ready deployment

---

**Last Updated** - February 2025

**Festival Date** - December 30, 2025

**Website URL** - [Your deployment URL]
