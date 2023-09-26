import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
});
