# MG Cre8ive Website

A modern, responsive creative agency website built with React. This project is fully restructured and organized for scalability and maintainability.

## 📁 Project Structure

```
mg-creative-hub/
├── src/
│   ├── components/
│   │   ├── Cursor/              # Custom cursor component
│   │   ├── Nav/                 # Navigation bar
│   │   ├── Ticker/              # Scrolling ticker
│   │   ├── WABtn/               # WhatsApp floating button
│   │   └── Footer/              # Footer component
│   │
│   ├── pages/
│   │   ├── HomePage/            # Landing page
│   │   ├── AboutPage/           # About company
│   │   ├── ServicesPage/        # Services listing
│   │   ├── PortfolioPage/       # Portfolio showcase
│   │   ├── AcademyPage/         # Academy/courses
│   │   ├── HirePage/            # Project inquiry
│   │   └── ContactPage/         # Contact form
│   │
│   ├── constants/
│   │   ├── config.js            # App configuration
│   │   ├── services.js          # Services data
│   │   ├── portfolio.js         # Portfolio items
│   │   ├── courses.js           # Academy courses
│   │   ├── stats.js             # Statistics
│   │   └── index.js             # Barrel export
│   │
│   ├── styles/
│   │   └── globals.js           # Global CSS
│   │
│   └── App.jsx                  # Main app component
```

## 🎨 Features

- **Modular Architecture**: Separated components and pages for easier maintenance
- **Global Constants**: Centralized data management in `constants/` folder
- **Responsive Design**: Mobile-first approach using CSS variables
- **Custom Cursor**: Interactive custom cursor experience
- **Animation Library**: Smooth animations and transitions
- **Form Validation**: Built-in form validation for submissions
- **Dark Theme**: Professional dark UI with accent colors
- **WhatsApp Integration**: Direct messaging capabilities

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd mg-creative-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📝 Configuration

All app configuration is centralized in `src/constants/config.js`. Update the following:

```javascript
export const CONFIG = {
  companyName: "MG CREA8IVE",
  tagline: "Creative Studio",
  adminPhone: "your_phone_number",
  email: "your_email@example.com",
  phone: "your_phone_display",
  location: "Your Location, Country",
  instagram: "your_instagram_url",
  behance: "your_behance_url",
  dribbble: "your_dribbble_url",
  youtube: "your_youtube_url",
  isAcademyOpen: true, // Set to false to close academy admissions
};
```

## 📊 Data Management

### Services
Edit `src/constants/services.js` to add or modify services

### Portfolio Items
Edit `src/constants/portfolio.js` to update portfolio projects

### Academy Courses
Edit `src/constants/courses.js` to add new courses

### Statistics
Edit `src/constants/stats.js` for company metrics

## 🎨 Styling

Global styles are defined in `src/styles/globals.js`. The design uses CSS variables:

- `--black`: Primary dark background
- `--dark`: Secondary dark background
- `--accent`: Primary accent color (Orange)
- `--display`: Display font (Bebas Neue)
- `--body`: Body font (DM Sans)
- `--mono`: Monospace font (DM Mono)

## 🔧 Customization

### Adding a New Page

1. Create a new folder in `src/pages/`
2. Create `index.jsx` with your page component
3. Import and add to the switch statement in `src/App.jsx`
4. Add navigation link in `src/components/Nav/index.jsx`

### Adding a New Component

1. Create folder in `src/components/`
2. Create `index.jsx` inside
3. Export the component
4. Import and use it where needed

### Modifying Styles

All animations, colors, and typography are in `src/styles/globals.js`. Edit the CSS there for global changes.

## 📱 Responsive Design

The site uses a mobile-first approach with CSS Grid and Flexbox. Breakpoints and responsive behavior are handled through CSS media queries.

## 🔗 API Integration

Currently, WhatsApp forms are pre-filled and sent via WhatsApp Web API. For backend integration:

1. Replace form submission handlers with API calls
2. Update URLs in components that use `window.open()`
3. Add environment variables for API endpoints

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment

Deploy the `build` folder to:
- Vercel: `vercel deploy`
- Netlify: Drag and drop the build folder
- GitHub Pages: Use `gh-pages` package

## 🤝 Contributing

To add features or fix bugs:

1. Create a feature branch
2. Make changes following the existing structure
3. Test thoroughly
4. Submit a pull request

## 📝 License

This project is proprietary and owned by MG Cre8ive.

## 📞 Support

For issues or questions, contact: hello@mgcreativehub.com

---

**Last Updated**: 2024
**Version**: 1.0.0
