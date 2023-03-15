import { defineConfig } from "astro/config"
import { siteMeta } from "./src/site.config"
import { astroImageTools } from "astro-imagetools"

import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
import mdx from "@astrojs/mdx"

// https://astro.build/config
import prefetch from "@astrojs/prefetch"

// https://astro.build/config
import compress from "astro-compress"

// https://astro.build/config
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	site: siteMeta.url,
	markdown: {
		extendDefaultPlugins: true,
	},
	integrations: [
    AstroPWA({
      // mode: 'development',
      // base: '/',
      // scope: '/',
      includeAssets: ['favicon.svg'],
      registerType: 'autoUpdate',
      
      manifest: {
        globDirectory: "dist",
        name: siteMeta.title,
        short_name: siteMeta.title,
        description: siteMeta.description,
        start_url: '/',
        display: "standalone",
        display_override: [
          "window-control-overlay",
        ],
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "any"
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "any"
          },
          {
            src: 'pwa-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "maskable"
          }
        ],
      },
      workbox: {
        globDirectory: "dist",
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,webp,woff2}'],
      },
      // devOptions: {
      //   enabled: true,
      //   navigateFallback: '/404',
      // },
    }),
		astroImageTools,
		mdx({
			extendPlugins: "markdown",
		}),
		prefetch(),
		compress({
			css: false,
			html: true,
			img: false,
			js: false,
			svg: true,
			logger: 2,
		}),
		sitemap(),
	],
	vite: {
		// plugins: [],
		css: {
			devSourcemap: true,
		},
	},
})
