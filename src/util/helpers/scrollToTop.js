export function scrollToTopOf(divID) {
	let view = document.getElementById(divID);
	if (view) {
		view.scrollTo(0, 0);
	} else {
		window.scrollTo(0, 0);
	}
}
