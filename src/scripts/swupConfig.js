import Swup from "swup"
import SwupA11yPlugin from '@swup/a11y-plugin'
import SwupHeadPlugin from "@swup/head-plugin"
import SwupBodyClassPlugin from "@swup/body-class-plugin"
import SwupScrollPlugin from '@swup/scroll-plugin'

export const swup = new Swup({
	plugins: [
		new SwupA11yPlugin(),
		new SwupHeadPlugin({
			//  persistAssets: true
		}),
		new SwupBodyClassPlugin(),
		new SwupScrollPlugin({
			animateScroll: {
				betweenPages: false,
				samePageWithHash: false,
				samePage: false
			}
		})
	]
})

