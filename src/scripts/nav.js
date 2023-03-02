// variables
const mainNav = document.querySelector("#main-navigation")
const mainMenu = mainNav.querySelector("ul")


// functions
export const setActiveMenuItem = () => {
	const menuItems = [...mainMenu.querySelectorAll('a:not([rel*="external"])')]

	menuItems.forEach((menuItem) => {
		if (menuItem.pathname === window.location.pathname) {
			menuItem.classList.add("active")
			menuItem.setAttribute("aria-current", "page")
		} else if (menuItem.pathname !== window.location.pathname) {
			menuItem.classList.remove("active")
			menuItem.removeAttribute("aria-current", "page")

			// ...
		}
	})
}



setActiveMenuItem()
