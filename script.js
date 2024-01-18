/* 
	Version: script.js.1.0.0.1-commented
	Author: Matthew Gross

	Caller: index.html
*/

/* My JavaScript style is based on ES6; no semi-colons at the end of lines. */

d = document 
d.gebi = d.getElementById
d.gebc = d.getElementsByClassName

/* I do document variable reassignment in my JavaScript files at the beginning to help with 
grabbing tags. I'll also add d.gebt = d.getElementsByTagName if I'm grabbing tags. */

const sliderElementWidth = 224

/* I built out the breadcrumbs measuring for different responsive widths of the slider showing 1, 2, 3, and 4 images, respectively. */

const breadcrumbWidths = {
	"wbc01": 0, /* "wbc" for "wide breadcrumbs". 4 images across */
	"wbc02": sliderElementWidth * 4, 
	"wbc03": sliderElementWidth * 8,
	"mbc01": 0, /* "mbc" for "medium breadcrumbs". 3 images across */
	"mbc02": sliderElementWidth * 3,
	"mbc03": sliderElementWidth * 6,
	"mbc04": sliderElementWidth * 9,
	"sbc01": 0, /* "sbc" for "small breadcrumbs". 2 images across */
	"sbc02": sliderElementWidth * 2,
	"sbc03": sliderElementWidth * 4,
	"sbc04": sliderElementWidth * 6,
	"sbc05": sliderElementWidth * 8,
	"sbc06": sliderElementWidth * 10,
	"ebc01": 0, /* "ebc" for "extra small breadcrumbs". 1 image displayed per slide */
	"ebc02": sliderElementWidth * 1,
	"ebc03": sliderElementWidth * 2,
	"ebc04": sliderElementWidth * 3,
	"ebc05": sliderElementWidth * 4,
	"ebc06": sliderElementWidth * 5,
	"ebc07": sliderElementWidth * 6,
	"ebc08": sliderElementWidth * 7,
	"ebc09": sliderElementWidth * 8,
	"ebc10": sliderElementWidth * 9,
	"ebc11": sliderElementWidth * 10,
	"ebc12": sliderElementWidth * 11,
}

const breadcrumbs = d.gebc('breadcrumb') /* Get the breadcrumb collection by class name "breadcrumb". */

/* Loop through the breadcrumbs and give them an onclick action with style "left" used from the breadcrumb object. 
The id of the breadcrumb is taken so the correct widths can be used from the breadcrumb object. */

for (var i = 0; i < breadcrumbs.length; i++) {
	breadcrumbs[i].onclick = function () {
		d.gebi('innerSliderContainer').style.left = -1 * breadcrumbWidths[this.id] + 'px'
	}
}

/* A word on breadcrumbs... There are many forms of pagination that are workable and many different ways to go about 
creating measurements. Another way to go about it might be to measure the images in the slider using JavaScript and count 
them to get accurate workable solutions for a slider that auto-adjusts to the number of images provided by a user such as 
in systems like WordPress. */

var mountainLinks = d.gebc('mountain-link')
var mountainLinkName = ''

/* The mountain links for a schedule layout box are made using an "a" (hyperlink) tag so when they are clicked the default 
link action needs to be disabled; that of linking to somewhere else. The way I set up the onclick to interact with the 
schedule information just removes and adds classes to the selected mountain link, setting the style and hiding/showing the schedule 
box that has a nice basic transition added to it I felt was appropriate to the content of the page. */

for (var i = 0; i < mountainLinks.length; i++) {
	mountainLinks[i].onclick = function (e) {
		e.preventDefault() /* Default link click prevented */

		var mountainLinkName = e.target.name /* Get the name attribute from clicked on hyperlink. */

		d.gebc('active')[0].classList.remove('active') /* Get ALL (Just one) elements with class "active" attached to it (The last active this is) */

		/* When there are only one active at any time by design we can grab it from the first array spot of the returned class name call */

		d.gebi(mountainLinkName).classList.add('active')

		/* The element targeted "mountainLinkName = e.target.name" above is where the id of the schedule for the selected mountain resided. */
		
		d.gebc('selected-mountain-schedule-link')[0].classList.remove('selected-mountain-schedule-link')

		/* Again, simply grab the first array spot of the "selected-mountain-schedule-link" class name call since it's the only element, by design, 
		with the "selected-mountain-schedule-link" class on the page. I don't really worry about making names for things anything more than a 
		convention to be updated as time calls for it. */
		
		this.parentElement.classList.add('selected-mountain-schedule-link') /* Add selected class to the newly selected 'this's parent element. */
	}
}

/* I can work with any code style guidelines if there are ones you work from. This file is just an attempt to clarify my 
code for whomever reads over it. I'm the real deal. */