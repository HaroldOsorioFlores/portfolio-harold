# syntax=docker.io/docker/dockerfile:1

FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk update && \
    apk upgrade && \
    apk add --no-cache libc6-compat openssl

WORKDIR /app

# Primero copia solo los archivos necesarios para instalar dependencias
COPY package.json package-lock.json* ./

RUN npm ci --legacy-peer-deps

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# COPY prisma/ ./prisma/

# Generar cliente de Prisma y actualizar esquema
# RUN npx prisma db pull || echo "DB pull failed, continuing..."

# RUN npx prisma generate || echo "Prisma generate failed, continuing..."

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
