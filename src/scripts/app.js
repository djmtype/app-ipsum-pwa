


import {swup} from "./swupConfig.js"


	


// slider home

// import { sliderHome } from "./sliderHome.js"

// swup.on("contentReplaced", sliderHome)

// slider project

// import { sliderProject } from "./sliderProject.js"

// swup.on("contentReplaced", sliderProject)



// nav

import { setActiveMenuItem } from "./nav.js"

swup.on("contentReplaced", setActiveMenuItem)




// nav toggle

// import {responsiveToggle, closeMenu, mobileNavigation} from "./navToggle.js"

// swup.on("clickLink", _ => {
// 	mobileNavigation.classList.remove('show')
// 	// mobileNavigation.classList.contains('show')
// 		closeMenu(responsiveToggle)
// });