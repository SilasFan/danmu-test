import {VitePWAOptions} from 'vite-plugin-pwa';

export const PWAOptions: Partial<VitePWAOptions> = {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt', 'icon-192.png', 'icon-512.png', 'favicon.svg'],
    manifest: {
      name: 'danmu-test',
      short_name: 'danmu',
      theme_color: '#4792e6',
      display: 'standalone',
      background_color: '#ffffff',
        icons: [
            {
                src: "icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "icon-512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any maskable",
            }
        ],
    },
};
