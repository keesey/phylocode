/**
 * Functions and data for creating the PhyloCode nav. 
 * 
 * @author	T. Michael Keesey
 */
/**
 * Nested array of objects storing all data for the code items.
 */
var CODE_ITEMS = [{
		id: "toc",
		className: "division",
		label: "Table of Contents",
		url: "./toc.html",
		navLabel: "CONTENTS"
	}, {
		id: "preface",
		className: "division",
		label: "Preface",
		url: "./preface.html",
		navLabel: "PREFACE",
		items: [{
				id: "citations",
				className: "citations",
				label: "Literature Cited",
				url: "./citations.html",
				navLabel: "LITERATURE"
			}
		]
	}, {
		id: "preamble",
		className: "division",
		label: "Preamble",
		url: "./preamble.html",
		navLabel: "PREAMBLE"
	}, {
		id: "principles",
		className: "division",
		label: "Division I",
		title: "Principles",
		url: "./principles.html",
		navLabel: "PRINCIPLES"
	}, {
		id: "rules",
		className: "division",
		label: "Division II",
		title: "Rules",
		url: "./art1-3.html",
		navLabel: "ARTS. 1-3",
		items: [{
				id: "chapter1",
				className: "chapter",
				codeNavLabel: "Arts. 1-3",
				label: "Chapter I",
				title: "Taxa",
				url: "./art1-3.html#chapter1",
				navLabel: "ARTS. 1–3",
				items: [{
						id: "art1",
						className: "article",
						codeNavLabel: "Art. 1",
						label: "Article 1",
						title: "The Nature of Taxa",
						url: "./art1-3.html#art1",
						navLabel: "ART. 1"
					}, {
						id: "art2",
						className: "article",
						codeNavLabel: "Art. 2",
						label: "Article 2",
						title: "Clades",
						url: "./art1-3.html#art2",
						navLabel: "ART. 2"
					}, {
						id: "art3",
						className: "article",
						codeNavLabel: "Art. 3",
						label: "Article 3",
						title: "Hierarchy and Rank",
						url: "./art1-3.html#art3",
						navLabel: "ART. 3"
					}
				]
			}, {
				id: "chapter2",
				className: "chapter",
				codeNavLabel: "Arts. 4-5",
				label: "Chapter II",
				title: "Publication",
				url: "./art4-5.html",
				navLabel: "ARTS. 4 & 5",
				items: [{
						id: "art4",
						className: "article",
						codeNavLabel: "Art. 4",
						label: "Article 4",
						title: "Publication Requirements",
						url: "./art4-5.html#art4",
						navLabel: "ART. 4"
					}, {
						id: "art5",
						className: "article",
						codeNavLabel: "Art. 5",
						label: "Article 5",
						title: "Publication Date",
						url: "./art4-5.html#art5",
						navLabel: "ART. 5"
					}
				]
			}, {
				id: "chapter3",
				className: "chapter",
				codeNavLabel: "Arts. 6-8",
				label: "Chapter III",
				title: "Names",
				url: "./art6.html",
				navLabel: "ART. 6",
				items: [{
						id: "chapter3-1",
						className: "section",
						codeNavLabel: "Art. 6",
						label: "Section 1",
						title: "Status",
						url: "./art6.html#section3.1",
						navLabel: "ART. 6",
						items: [{
								id: "art6",
								className: "article",
								codeNavLabel: "Art. 6",
								label: "Article 6",
								url: "./art6.html#art6",
								navLabel: "ART. 6"
							}
						]
					}, {
						id: "chapter3-2",
						className: "section",
						codeNavLabel: "Arts. 7-8",
						label: "Section 2",
						title: "Establishment",
						url: "./art7.html",
						navLabel: "ART. 7",
						items: [{
								id: "art7",
								className: "article",
								codeNavLabel: "Art. 7",
								label: "Article 7",
								title: "General Requirements",
								url: "./art7.html#art7",
								navLabel: "ART. 7"
							}, {
								id: "art8",
								className: "article",
								codeNavLabel: "Art. 8",
								label: "Article 8",
								title: "Registration",
								url: "./art8.html",
								navLabel: "ART. 8"
							}
						]
					}
				]
			}, {
				id: "chapter4",
				className: "chapter",
				codeNavLabel: "Arts. 9-11",
				label: "Chapter IV",
				title: "Clade Names",
				url: "./art9.html",
				navLabel: "ART. 9",
				items: [{
						id: "art9",
						className: "article",
						codeNavLabel: "Art. 9",
						label: "Article 9",
						title: "General Requirements for Establishment of Clade Names",
						url: "./art9.html#art9",
						navLabel: "ART. 9"
					}, {
						id: "art10",
						className: "article",
						codeNavLabel: "Art. 10",
						label: "Article 10",
						title: "Selection of Clade Names for Establishment",
						url: "./art10.html",
						navLabel: "ART. 10"
					}, {
						id: "art11",
						className: "article",
						codeNavLabel: "Art. 11",
						label: "Article 11",
						title: "Specifiers and Qualifying Clauses",
						url: "./art11.html",
						navLabel: "ART. 11"
					}
				]
			}, {
				id: "chapter5",
				className: "chapter",
				codeNavLabel: "Arts. 12-15",
				label: "Chapter V",
				title: "Selection of Accepted Names",
				url: "./art12.html",
				navLabel: "ART. 12",
				items: [{
						id: "art12",
						className: "article",
						codeNavLabel: "Art. 12",
						label: "Article 12",
						title: "Precedence",
						url: "./art12.html#art12",
						navLabel: "ART. 12"
					}, {
						id: "art13",
						className: "article",
						codeNavLabel: "Art. 13",
						label: "Article 13",
						title: "Homonymy",
						url: "./art13.html",
						navLabel: "ART. 13"
					}, {
						id: "art14",
						className: "article",
						codeNavLabel: "Art. 14",
						label: "Article 14",
						title: "Synonymy",
						url: "./art14.html",
						navLabel: "ART. 14"
					}, {
						id: "art15",
						className: "article",
						codeNavLabel: "Art. 15",
						label: "Article 15",
						title: "Conservation, Suppression, and Emendation",
						url: "./art15.html",
						navLabel: "ART. 15"
					}
				]
			}, {
				id: "chapter6",
				className: "chapter",
				codeNavLabel: "Art. 16",
				label: "Chapter VI",
				title: "Provisions for Hybrids",
				url: "./art16.html",
				navLabel: "ART. 16",
				items: [{
						id: "art16",
						className: "article",
						codeNavLabel: "Art. 16",
						label: "Article 16",
						url: "./art16.html",
						navLabel: "ART. 16"
					}
				]
			}, {
				id: "chapter7",
				className: "chapter",
				codeNavLabel: "Arts. 17-18",
				label: "Chapter VII",
				title: "Orthography",
				url: "./art17.html",
				navLabel: "ART. 17",
				items: [{
						id: "art17",
						className: "article",
						codeNavLabel: "Art. 17",
						label: "Article 17",
						title: "Orthographic Requirements for Establishment",
						url: "./art17.html#art17",
						navLabel: "ART. 17"
					}, {
						id: "art18",
						className: "article",
						codeNavLabel: "Art. 18",
						label: "Article 18",
						title: "Subsequent Use and Correction of Established Names",
						url: "./art18.html",
						navLabel: "ART. 18"
					}
				]
			}, {
				id: "chapter8",
				className: "chapter",
				codeNavLabel: "Art. 19",
				label: "Chapter VIII",
				title: "Authorship of Names and Definitions",
				url: "./art19.html",
				navLabel: "ART. 19",
				items: [{
						id: "art19",
						className: "article",
						codeNavLabel: "Art. 19",
						label: "Article 19",
						url: "./art19.html#art19",
						navLabel: "ART. 19"
					}
				]
			}, {
				id: "chapter9",
				className: "chapter",
				codeNavLabel: "Art. 20",
				label: "Chapter IX",
				title: "Citation of Authors and Registration Numbers",
				url: "./art20.html",
				navLabel: "ART. 20",
				items: [{
						id: "art20",
						className: "article",
						codeNavLabel: "Art. 20",
						label: "Article 20",
						url: "./art20.html",
						navLabel: "ART. 20"
					}
				]
			}, {
				id: "chapter10",
				className: "chapter",
				codeNavLabel: "Art. 21",
				label: "Chapter X",
				title: "Species Names",
				url: "./art21.html",
				navLabel: "ART. 21",
				items: [{
						id: "art21",
						className: "article",
						codeNavLabel: "Art. 21",
						label: "Article 21",
						url: "./art21.html",
						navLabel: "ART. 21"
					}
				]
			}, {
				id: "chapter11",
				className: "chapter",
				codeNavLabel: "Art. 22",
				label: "Chapter XI",
				title: "Governance",
				url: "./art22.html",
				navLabel: "ART. 22",
				items: [{
						id: "art22",
						className: "article",
						codeNavLabel: "Art. 22",
						label: "Article 22",
						url: "./art22.html",
						navLabel: "ART. 22"
					}
				]
			}
		]
	}, {
		id: "glossary",
		className: "division",
		label: "Glossary",
		url: "./glossary.html",
		navLabel: "GLOSSARY"
	}, {
		id: "appendices",
		className: "division",
		label: "Appendices",
		url: "./appendixA.html",
		navLabel: "APPENDIX A",
		items: [{
				id: "appendixA",
				className: "appendix",
				label: "Appendix A",
				title: "Registration Procedures and Data Requirements",
				url: "./appendixA.html",
				navLabel: "APPENDIX A"
			}, {
				id: "appendixB",
				className: "appendix",
				label: "Appendix B",
				title: "Code of Ethics",
				url: "./appendixB.html",
				navLabel: "APPENDIX B"
			}, {
				id: "appendixC",
				className: "appendix",
				label: "Appendix C",
				title: "Equivalence of Nomenclatural Terms",
				url: "./appendixC.html",
				navLabel: "APPENDIX C"
			}
		]
	}, {
		id: "index",
		className: "division",
		label: "Index",
		url: "./indx.html",
		navLabel: "INDEX"
	}
];
/**
 * Closes an item in the code nav.
 * 
 * @param	itemID	String ID of the item.
 */
function closeCodeNavItem(itemID) {
	showElementByID("code-nav-item-" + itemID + "-open");
	hideElementByID("code-nav-item-" + itemID + "-close");
	hideElementByID("code-nav-item-" + itemID + "-children");
}
/**
 * Tells whether an item is considered to have children, for the purposes of the code nav.
 * 
 * @param	item	Object storing the code item's information.
 * @return	Boolean value.
 */
function codeNavItemHasChildren(item) {
	if (!item.items) {
		return false;
	}
	if ((item.className == "chapter" || item.className == "section") && item.items.length <= 1) {
		return false;
	}
	return item.items.length > 0;
}
/**
 * Creates HTML for the children of a code item.
 * 
 * @param	item	Object storing the code item's information.
 * @return	HTML element.
 */
function createCodeNavChildren(item) {
	var itemChildren = document.createElement("div");
	itemChildren.className = "item-children";
	itemChildren.id = "code-nav-item-" + item.id + "-children";
	itemChildren.style.display = "none";
	itemChildren.style.visibility = "hidden";
	for (var i = 0; i < item.items.length; ++i) {
		itemChildren.appendChild(createCodeNavItem(item.items[i]));
	}
	return itemChildren;
}
/**
 * Creates an image tag for a closing widget.
 * 
 * @return	HTML element.
 */
function createCodeNavCloseImage() {
	var image = createCodeNavWidgetImage();
	image.src ="./images/nav-close.gif";
	image.alt = "[close section]";
	return image;
}
/**
 * Creates a closing widget.
 * 
 * @param	itemID	ID string of the item.
 * @return	HTML element.
 */
function createCodeNavCloseWidget(itemID) {
	var image = createCodeNavCloseImage();
	var widget = createCodeNavWidget();
	widget.href = "javascript:closeCodeNavItem('" + itemID + "')";
	widget.id = "code-nav-item-" + itemID + "-close";
	widget.style.display = "none";
	widget.style.visibility = "hidden";
	widget.appendChild(image);
	return widget;
}
/**
 * Creates a document link for the code nav.
 * 
 * @param	label	Label for the link.
 * @param	href	URL for the link.
 * @return	HTML element.
 */
function createCodeNavDocLink(label, href) {
	var doc = document.createElement("div");
	doc.classname = "item";
	doc.appendChild(document.createTextNode("Download "));
	var link = document.createElement("a");
	link.className = "label";
	link.href = href;
	link.appendChild(document.createTextNode(label));
	doc.appendChild(link);
	return doc;
}
/**
 * Creates the header for the code nav.
 * 
 * @return	HTML element.
 */
function createCodeNavHeader() {
	var header = document.createElement("div");
	header.className = "header";
	header.appendChild(document.createTextNode("CURRENT DRAFT"));
	return header;
}
/**
 * Given an item object, creates an HTML element for displaying it.
 * 
 * @param	item	Object storing the code item's information.
 * @return	HTML element.
 */
function createCodeNavItem(item) {
	var html = document.createElement("div");
	html.id = "code-nav-item-" + item.id;
	html.className = "item";
	if (!codeNavItemHasChildren(item)) {
		html.appendChild(createCodeNavTerminalImage());
	} else {
		html.appendChild(createCodeNavOpenWidget(item.id));
		html.appendChild(createCodeNavCloseWidget(item.id));
	}
	html.appendChild(document.createTextNode(" "));
	html.appendChild(createCodeNavLabel(item));
	if (item.title) {
		html.appendChild(document.createTextNode(". "));
		html.appendChild(createCodeNavTitle(item));
	}
	if (codeNavItemHasChildren(item)) {
		html.appendChild(createCodeNavChildren(item));
	}
	return html;
}
/**
 * Creates a linked label for a code item.
 * 
 * @param	item	Object storing the code item's information.
 * @return	HTML element.
 */
function createCodeNavLabel(item) {
	var label = document.createElement("a");
	label.className =  "label";
	label.href = item.url;
	label.appendChild(document.createTextNode(item.codeNavLabel ? item.codeNavLabel : item.label));
	return label;
}
/**
 * Creates an image tag for a opening widget.
 * 
 * @return	HTML element.
 */
function createCodeNavOpenImage() {
	var image = createCodeNavWidgetImage();
	image.src ="./images/nav-open.gif";
	image.alt = "[open section]";
	return image;
}
/**
 * Creates an opening widget.
 * 
 * @param	itemID	ID string of the item.
 * @return	HTML element.
 */
function createCodeNavOpenWidget(itemID) {
	var image = createCodeNavOpenImage();
	var widget = createCodeNavWidget();
	widget.href = "javascript:openCodeNavItem('" + itemID + "')";
	widget.id = "code-nav-item-" + itemID + "-open";
	widget.appendChild(image);
	return widget;
}
/**
 * Creates an image tag for a terminal widget.
 * 
 * @return	HTML element.
 */
function createCodeNavTerminalImage() {
	var image = createCodeNavWidgetImage();
	image.src ="./images/nav-terminal.gif";
	image.alt = "-";
	return image;
}
/**
 * Creates a title element for a code item.
 * 
 * @param	item	Object storing the code item's information.
 * @return	HTML element.
 */
function createCodeNavTitle(item) {
	var title = document.createElement("span");
	title.className = "title";
	title.appendChild(document.createTextNode(item.title));
	return title;
}
/**
 * Creates a basic widget.
 * 
 * @return	HTML element.
 */
function createCodeNavWidget() {
	var widget = document.createElement("a");
	widget.className = "widget";
	return widget;
}
/**
 * Creates a basic image tag for a widget.
 * 
 * @return	HTML element.
 */
function createCodeNavWidgetImage() {
	var image = document.createElement("img");
	image.width = "9";
	image.height = "11";
	return image;
}
/**
 * Creates a basic image tag for a site nav arrow.
 * 
 * @return	HTML element.
 */
function createSiteNavArrow() {
	var image = document.createElement("img");
	image.width = "9";
	image.height = "9";
	return image;
}
/**
 * Creates a link for a code item for the site nav.
 * 
 * @param	item	Object storing the code item's information.
 */
function createSiteNavItemLink(item) {
	var link = document.createElement("a");
	link.href = item.url;
	link.appendChild(document.createTextNode(item.navLabel));
	return link;
}
/**
 * Creates an image tag for a "next" arrow.
 * 
 * @return	HTML element.
 */
function createSiteNavNextArrow() {
	var image = createSiteNavArrow();
	image.src = "./images/site-nav-rarr.gif";
	image.alt = "=>";
	return image;
}
/**
 * Creates an image tag for a "previous" arrow.
 * 
 * @return	HTML element.
 */
function createSiteNavPrevArrow() {
	var image = createSiteNavArrow();
	image.src = "./images/site-nav-larr.gif";
	image.alt = "<=";
	return image;
}
/**
 * Creates a linked label for a code item.
 * 
 * @param	item	Object storing the code item's information.
 * @return	HTML element.
 */
function createTOCLabel(item) {
	var label = document.createElement("a");
	label.className =  "label";
	label.href = item.url;
	label.appendChild(document.createTextNode(item.label));
	return label;
}
/**
 * Finds an item in the code by its string ID.
 * 
 * @param	itemID	ID string of the item.
 * @return	Object storing the code item's information, or <code>null</code>.
 */
function findCodeItemByID(itemID) {
	return findItemByIDInArray(itemID, CODE_ITEMS);
}
/**
 * Finds an item in an array by its string ID.
 * 
 * @param	itemID	ID string of the item. Corresponds to a field called <code>id</code> on the desired item.
 * @param	items	Array to search in. Also searches any array called <code>items</code> on any of the elements.
 * @return	Found object, or <code>null</code>.
 */
function findItemByIDInArray(itemID, items) {
	for (var i = 0; i < items.length; ++i) {
		if (items[i].id == itemID) {
			return items[i];
		}
		if (items[i].items) {
			var item = findItemByIDInArray(itemID, items[i].items);
			if (item) {
				return item;
			}
		}
	}
	return null;
}
/**
 * Checks whether an item has a certain ID, or if any of its descendants have a certain ID.
 * 
 * @param	item	Item to check.
 * @param	itemID	ID string to look for.
 * @return	Boolean value.
 */
function hasCodeItem(item, itemID) {
	if (item.id == itemID) {
		return true;
	}
	if (item.items && item.items.length > 0) {
		for (var i = 0; i < item.items.length; ++i) {
			if (hasCodeItem(item.items[i], itemID)) {
				return true;
			}
		}
	}
	return false;
}
/**
 * Hides the element with a given ID.
 * 
 * @param	id	ID string of the element to hide.
 */
function hideElementByID(id) {
	var element = document.getElementById(id);
	if (element) {
		element.style.display = "none";
		element.style.visibility = "hidden";
	}
}
/**
 * Initializes the navs, adding the code nav and the side nav next and previous items.
 */
function initNav() {
	renderCodeNavItems(document.getElementById('code-nav-items'));
	renderSiteNavPrev(document.getElementById('site-nav-prev'));
	renderSiteNavNext(document.getElementById('site-nav-next'));
	selectCodeNavItem(DEFAULT_SECTION);
	if (CURRENT_SECTION == "toc") {
		renderTOC();
	}
}
/**
 * Opens an item in the code nav.
 * 
 * @param	itemID	String ID of the item.
 */
function openCodeNavItem(itemID) {
	hideElementByID("code-nav-item-" + itemID + "-open");
	showElementByID("code-nav-item-" + itemID + "-close");
	showElementByID("code-nav-item-" + itemID + "-children");
}
/**
 * Adds HTML elements to represent the items of the code nav.
 * 
 * @param	element	Element to add the items to.
 */
function renderCodeNavItems(element) {
	element.appendChild(createCodeNavHeader());
	for (var i = 0; i < CODE_ITEMS.length; ++i) {
	    element.appendChild(createCodeNavItem(CODE_ITEMS[i]));
	}
	element.appendChild(document.createElement("br"));
	element.appendChild(createCodeNavDocLink("PDF VERSION", "./PhyloCode4c.pdf"));
	element.appendChild(createCodeNavDocLink("WORD VERSION", "./PhyloCode4c.doc"));
}
/**
 * Renders a link to the page's previous item.
 * 
 * @param	element	Element to write the link in.
 */
function renderSiteNavPrev(element) {
	if (PREV_ITEM) {
		var item = findCodeItemByID(PREV_ITEM);
		if (item) {
			element.appendChild(createSiteNavPrevArrow());
			element.appendChild(document.createTextNode(" "));
			element.appendChild(createSiteNavItemLink(item));
		}
	}
}
/**
 * Renders a link to the page's next item.
 * 
 * @param	element	Element to write the link in.
 */
function renderSiteNavNext(element) {
	if (NEXT_ITEM) {
		var item = findCodeItemByID(NEXT_ITEM);
		if (item) {
			element.appendChild(createSiteNavItemLink(item));
			element.appendChild(document.createTextNode(" "));
			element.appendChild(createSiteNavNextArrow());
		}
	}
}
/**
 * Renders the table of contents.
 */
function renderTOC() {
	var toc = document.getElementById("toc");
	if (toc) {
		renderTOCItems(toc, CODE_ITEMS);
	}
}
/**
 * Renders a table of contents item.
 * 
 * @param	element	Element to write the element in.
 * @param	item	Object storing the code item's information.
 */
function renderTOCItem(element, item) {
	var html = document.createElement("div");
	html.className = "toc-" + item.className;
	html.appendChild(createTOCLabel(item));
	if (item.title) {
		html.appendChild(document.createTextNode(". "));
		html.appendChild(createCodeNavTitle(item));
	}
	element.appendChild(html);
	if (item.items && item.items.length > 0) {
		for (var i = 0; i < item.items.length; ++i) {
			renderTOCItem(element, item.items[i]);
		}
	}
}
/**
 * Renders an array of table of contents items.
 * 
 * @param	element	Element to write the elements in.
 * @param	items	Array of objects storing data on each element.
 */
function renderTOCItems(element, items) {
	for (var i = 0; i < items.length; ++i) {
		if (items[i].id != "toc") {
			renderTOCItem(element, items[i]);
		}
	}
}
/**
 * Opens a particular code nav item.
 * 
 * @param	itemID	ID string of the item to open.
 */
function selectCodeNavItem(itemID) {
	for (var i = 0; i < CODE_ITEMS.length; ++i) {
		updateCodeNavItem(CODE_ITEMS[i], itemID);
	}
}
/**
 * Shows the element with a given ID.
 * 
 * @param	id	ID string of the element to show.
 */
function showElementByID(id) {
	var element = document.getElementById(id);
	if (element) {
		element.style.display = "";
		element.style.visibility = "visible";
	}
}
/**
 * Updates whether a goven code nav item is selected.
 * 
 * @param	item		Item to update. (Also updates all descendants.)
 * @param	selectedID	ID string of the currently-selected item.
 */
function updateCodeNavItem(item, selectedID) {
	if (hasCodeItem(item, selectedID)) {
		openCodeNavItem(item.id);
	} else {
		closeCodeNavItem(item.id);
	}
	if (item.items && item.items.length > 0) {
		for (var i = 0; i < item.items.length; ++i) {
			updateCodeNavItem(item.items[i], selectedID);
		}
	}
}
/**
 * Initial call.
 */
initNav();
