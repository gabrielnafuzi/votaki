/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.join(__dirname, 'src') }],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
      all: true,
      include: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.stories.tsx',
        '!src/pages/**/*.{ts,tsx}',
        '!src/styles/**/*.ts',
        '!src/types/**/*.d.ts',
        '!src/**/*.mock.ts',
        '!src/utils/test-utils/**/*.{ts,tsx}',
        '!src/test/setup.ts',
      ],
    },
    exclude: [
      'src/env/**',
      'src/utils/test-utils/**',
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/e2e/**',
      '**/.storybook/**',
      '**/coverage/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
})
