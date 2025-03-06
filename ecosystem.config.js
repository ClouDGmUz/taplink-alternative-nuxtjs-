module.exports = {
  apps: [{
    name: 'nuxt-dev',
    script: 'npm',
    args: 'run dev -- --host=dew.condoroil.uz --port=5173',
    watch: true,
    autorestart: true,
    env: {
      NODE_ENV: 'development'
    }
  }]
};