import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/migrate",  // 👈 Yeh ensure karega ki saare assets `/migrate/` ke andar serve ho
});
