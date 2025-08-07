# Datablize

A modern, responsive web application for data solutions and services, built with React and Vite.

## 🚀 Features

- **Modern Tech Stack**: React 19, Vite, Tailwind CSS
- **3D Visualizations**: Three.js integration with React Three Fiber
- **Smooth Animations**: GSAP and Framer Motion for fluid user experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multi-page Architecture**: React Router for seamless navigation
- **Production-Ready**: Docker support with nginx for optimal performance

## 📋 Prerequisites

- Node.js 20+ 
- npm or yarn
- Docker (optional, for containerized deployment)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/SujitSaran-GIT/Datablize.git
cd Datablize
```

2. Install dependencies:
```bash
npm install
```

## 💻 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🐳 Docker Development

### Using Docker Compose

For development with hot reload:
```bash
docker-compose up frontend-dev
```

For production build testing:
```bash
docker-compose up frontend-prod
```

### Building Docker Image

```bash
docker build -t datablize-frontend .
```

## 🏗️ Project Structure

```
Datablize/
├── public/              # Static assets
│   ├── models/         # 3D model files (.glb)
│   └── favicon.svg     # Site favicon
├── src/
│   ├── components/     # Reusable components
│   │   ├── common/    # Shared components
│   │   ├── Card3D.jsx # 3D card component
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/         # Route pages
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Features.jsx
│   │   ├── Services.jsx
│   │   └── ...
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles
├── Dockerfile         # Production Docker config
├── Dockerfile.dev     # Development Docker config
└── nginx.conf        # Nginx configuration
```

## 🎨 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### 3D & Animation
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **GSAP** - Professional animation library
- **Framer Motion** - Declarative animations
- **Lenis** - Smooth scroll library

### UI Components
- **MUI Material** - Material Design components
- **Lucide React** - Icon library
- **React Icons** - Popular icon packs

## 🚀 Deployment

### Dokploy Deployment

The application is configured for deployment on Dokploy:

- **Host**: 69.62.73.10
- **Domain**: datablize.com
- **Port**: 3100 (nginx)

The production Dockerfile uses a multi-stage build:
1. Build stage with Node.js
2. Production stage with nginx serving static files

### Environment Configuration

The app supports multiple deployment environments:
- `datablize.com` (Dokploy)
- `datablize.onrender.com` (Render)

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration with production optimizations
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint rules for code quality
- `nginx.conf` - Production server configuration
- `docker-compose.yml` - Docker services configuration

## 📝 Pages

- **Home** - Landing page with hero section
- **Products** - Product showcase
- **Features** - Feature highlights
- **Services** - Service offerings
- **Use Cases** - Real-world applications
- **Resources** - Documentation and guides
- **Contact** - Contact form
- **Demo Request** - Request a demo
- **FAQ** - Frequently asked questions
- **Legal** - Privacy Policy, Terms of Use, Responsible Disclosure

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👥 Team

- Development Team - [Datablize](https://datablize.com)

## 🔗 Links

- **Production**: [https://datablize.com](https://datablize.com)
- **Repository**: [https://github.com/SujitSaran-GIT/Datablize](https://github.com/SujitSaran-GIT/Datablize)

---

Built with ❤️ by the Datablize Team