module.exports = {
  apps: [{
    name: 'taplinknuxt',
    script: 'npm',
    args: 'run start', // Now points to valid script
    cwd: __dirname,
    watch: false,
    autorestart: true,
    env: {
      NODE_ENV: 'production'
    }
  }]
}