# Stage 1: Build the app
FROM node:lts-alpine3.21 AS builder

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve static files
FROM nginx:stable-alpine3.21-perl

COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Add minimal nginx.conf for SPA fallback (if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
