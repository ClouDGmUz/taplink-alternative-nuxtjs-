import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  apps: [{
    name: 'taplinknuxt',
    script: 'npm',
    args: 'run start',
    cwd: __dirname,
    watch: false,
    autorestart: true,
    env: {
      NODE_ENV: 'production'
    }
  }]
}