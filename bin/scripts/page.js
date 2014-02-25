/**
 * ID of the last object whose anchor was linked to.
 */
var lastScrollID;
/**
 * Fixes the scroll of the page and the content. Should be called by <code>document.body.onscroll</code>.
 */
function fixScroll() {
	document.body.scrollLeft = 0;
	document.documentElement.scrollLeft = 0;
	if (document.body.scrollTop > 0 || document.body.scrollTop < 0
		|| document.documentElement.scrollTop > 0 || document.documentElement.scrollTop < 0
		|| window.pageYOffset > 0 || window.pageYOffset < 0) {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		window.pageYOffset = 0;
		var id = location.href.split("#")[1];
		if (id != lastScrollID) {
			lastScrollID = id;
			var object = document.getElementById(id);
			var content = document.getElementById("content");
			if (object && content.scrollTop !== undefined) {
				content.scrollTop = object.offsetTop;
			}
		}
	}
}
/**
 * Retrieves the inner height of the browser window.
 * 
 * @return	Height, in pixels.
 */
function getWindowInnerHeight() {
	if (window.innerHeight) {
		return window.innerHeight;
	}
	if (document.documentElement.clientHeight) {
		return document.documentElement.clientHeight;
	}
	return document.body.clientHeight;
}
/**
 * Retrieves the inner width of the browser window.
 * 
 * @return	Width, in pixels.
 */
function getWindowInnerWidth() {
	if (window.innerWidth) {
		return window.innerWidth;
	}
	if (document.documentElement.clientWidth) {
		return document.documentElement.clientWidth;
	}
	return document.body.clientWidth;
}
/**
 * Resizes the content section to fit the window. Should be called by <code>document.body.onresize</code>.
 */
function resizeContent() {
	var siteNav = document.getElementById('site-nav');
	if (siteNav) {
		siteNav.style.width = String(getWindowInnerWidth() - 200) + 'px';
	}
	var content = document.getElementById('content');
	if (content) {
		content.style.height = String(getWindowInnerHeight() - 80) + 'px';
		content.style.width = String(getWindowInnerWidth() - 200) + 'px';
	}
}
/**
 * Initial calls.
 */
resizeContent();
fixScroll();
setInterval("fixScroll()", 50);