import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {VitePWA} from 'vite-plugin-pwa';
import {PWAOptions} from './build/PWA';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA(PWAOptions)
    ],
});
