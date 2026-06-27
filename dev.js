import { spawn } from 'child_process';

const server = spawn('node', ['server.js'], { stdio: ['inherit', 'pipe', 'inherit'] });
const vite = spawn('npx vite', [], { shell: true, stdio: ['inherit', 'pipe', 'inherit'] });

server.stdout.on('data', (d) => {
  const out = d.toString().trim();
  if (out && !out.includes('◇')) console.log(out);
});

vite.stdout.on('data', (d) => {
  const out = d.toString().trim();
  if (out && !out.includes('Re-optimizing')) console.log(out);
});

process.on('SIGINT', () => { server.kill(); vite.kill(); process.exit(); });
