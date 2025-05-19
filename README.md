# IhreZuhauseBeratung Website

Welcome to the repository for **IhreZuhauseBeratung**'s website, built using modern web technologies for a fast, scalable, and responsive experience.

---

# 📅 Project Overview

**Built with:**
- Vite
- React 18
- TypeScript
- TailwindCSS
- shadcn-ui (based on Radix UI)

**Deployment:**
- Docker (with multi-stage builds)
- Caddy Server (for SSL termination and reverse proxy)

---

# 🔧 Local Development Setup

To start developing locally, follow these steps:

## Prerequisites
- Node.js (v18+ recommended)
- npm (comes with Node.js)
- Docker and Docker Compose installed (optional but recommended)

## Installation

```bash
# Step 1: Clone the repository
git clone <YOUR_GIT_REPOSITORY_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_FOLDER>

# Step 3: Install dependencies
npm install

# Step 4: Run the development server
npm run dev

# The app will be available at http://localhost:5173 by default
```

---

# 🚧 Production Deployment

## 1. Build the Website

Create an optimized production build:

```bash
npm run build
```

This will generate a `dist/` folder containing static assets.

---

## 2. Build the Docker Image

Use the multi-stage Dockerfile to build the final container:

```bash
docker build -t ihre-zuhause-website .
```

---

## 3. Docker Compose Setup

Run the site behind Caddy with `docker-compose.yml`:

```yaml

services:
  ihrezuhauseberatung:
    image: ihre-zuhause-website
    container_name: website-container
    restart: unless-stopped
    networks:
      - web

networks:
  web:
    name: web
    external: true
```

---

## 4. Example Caddyfile

```caddy
yourdomain.com {
  reverse_proxy ihrezuhauseberatung:80

  encode gzip
  file_server

  header {
    Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    Referrer-Policy "strict-origin-when-cross-origin"
    X-Content-Type-Options "nosniff"
    X-Frame-Options "DENY"
  }
}
```

Replace `yourdomain.com` with your actual domain.

✅ Caddy will automatically issue SSL certificates using Let's Encrypt.

---

# 🚀 Deployment Commands

```bash
# Launch everything

docker-compose up -d

# Check running containers

docker ps

# View logs

docker-compose logs -f
```

---

# 📊 Folder Structure

```plaintext
/
├── Dockerfile
├── docker-compose.yml
├── Caddyfile
├── nginx.conf
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
└── public/
```

---

# 🔗 Useful Links
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Caddy Documentation](https://caddyserver.com/docs/)
- [Docker Documentation](https://docs.docker.com/)

---

# 🌟 Notes
- Make sure your DNS is properly pointing to your server IP for domain-based SSL.
- Update the `nginx.conf` if you want even more fine-tuned caching or SPA settings.
- Always rebuild your Docker image when updating frontend code changes.

---
