

FROM node:lts-hydrogen AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm run ci
COPY . .
RUN pnpm run build


FROM node:hydrogen-alpine
ENV PNPM_HOME="$HOME/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV=production

WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm run ci:prod

COPY --from=builder /app/.next ./.next
COPY ./public ./public
COPY ./next.config.js ./ecosystem.config.js ./

RUN pnpm add -g pm2
EXPOSE 3002

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
