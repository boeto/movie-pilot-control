# Movie Pilot Control

This is a front-end web for [Movie Pilot](https://github.com/jxxghp/MoviePilot), developed using [Next.js](https://nextjs.org/) and [Flowbite React](https://www.flowbite-react.com/).

## To run and view the project locally using Docker

```bash
# docker-compose:
docker-compose -f docker-compose.local.yml up -d --build

# or docker:
docker build -t movie-pilot-control:local . &&
    docker run -d --name movie-pilot-control-local \
        -p 3002:3002 \
        -e NEXT_PUBLIC_BACKEND_URL=http://localhost:3001 \
        movie-pilot-control:local

```

## Steps to start development

1 Use Corepack to install pnpm. For more methods, please refer to [pnpm](https://pnpm.io/installation)

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

2 Initialize the dependencies

```bash
pnpm run ci
```

3 To run in development mode

```bash
pnpm run dev
```

4 To open your project in a browser for viewing：[http://localhost:3002](http://localhost:3002)

---

## Learn More

Take a look at the following resources:

- [MoviePilot](https://github.com/jxxghp/MoviePilot) - To view the backend project and its APIs
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub repository](https://github.com/vercel/next.js/)
- [Flowbite React Documentation](https://www.flowbite-react.com/docs/getting-started/introduction)
- [Flowbite React GitHub repository](https://github.com/themesberg/flowbite-react)
