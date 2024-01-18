notification = d.gebi('enhancedNotification')

if (localStorage['notificationClosed'] = "yes") {
	window.setTimeout(function() {
		notification.remove()
	}, 0)
}

closeNotificationBtn = d.gebi('closeNotificationBtn')

closeNotificationBtn.onclick = function (e) {
	e.preventDefault()
	
	notification.classList.add('notificationClose')
	
	localStorage['notificationClosed']  = "yes" /* Store closed as yes to localStorage browser storage. Like a cookie.*/
	
	window.setTimeout(function() {
		notification.classList.add('hidden')
	}, 500)
}

historyImages = d.gebc('history-slider-image')

for (var i = 0; i < historyImages.length; i++) {
	historyImages[i].onclick = function (e) {
		d.gebc('selected')[0].classList.remove('selected')
		this.classList.add('selected')
	}
}