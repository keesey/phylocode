var versionSplit = navigator.appVersion.split("MSIE");
var version = parseFloat(versionSplit[1]);
if (version >= 5.5 && document.body.filters) {
	for (var i = 0; i < document.images.length; ++i) {
		var img = document.images[i];
		var imgName = img.src.toUpperCase();
		if (imgName.substr(imgName.length - 3) == "PNG") {
			var imgID = img.id ? ("id='" + img.id + "' ") : "";
			var imgClass = img.className ? ("class='" + img.className + "' ") : "";
			var imgTitle = img.title ? ("title='" + img.title + "' ") : ("title='" + img.alt + "' ");
			var imgStyle = "display:inline-block;" + img.style.cssText;
			if (img.parentElement.href) {
				imgStyle = "cursor:hand;" + imgStyle;
			}
			img.outerHTML = "<span " + imgID + imgClass + imgTitle
				+ " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
				+ "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
				+ "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
			--i;
		}
	}
}