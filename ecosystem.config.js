module.exports = {
  apps: [
    {
      name: 'movie-pilot-control',
      script: 'pnpm run start',
      cwd: './',
      watch: false,

      min_uptime: '1h',
      max_memory_restart: '1G',
      max_restarts: 10,
      restart_delay: 4000,

      log_date_format: 'YYYY-MM-DD HH:mm Z',
      out_file: './log/out.log',
      error_file: './log/error.log',
      combine_logs: true,

      env_development: {
        NODE_ENV: 'development',
        NEXT_PUBLIC_BACKEND_URL:
          process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001',
      },
      env_production: {
        NODE_ENV: 'production',
        NEXT_PUBLIC_BACKEND_URL:
          process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001',
      },
    },
  ],
};
