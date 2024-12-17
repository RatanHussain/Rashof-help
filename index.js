/** @format */

// selet all element here.....
let aramex = document.querySelector('#aramex');
let tamex = document.querySelector('#tamex');
let dataTextarea = document.querySelector('#dataTextarea');
let linksContainer = document.getElementById('linksContainer');
let allLinks = 'https://rashof.fastcoo-solutions.com/fm/Printpicklist3PL/';
let postage = document.getElementById('postage')
let Fastlo = document.getElementById('Fastlo')

// Aramex Multiple Tracking Button Start

let araTrack = document.getElementById('araTrack');

araTrack.addEventListener('click', AraFunc);

function AraFunc() {
	let trackingNumber = dataTextarea.value.split('\n');
	let linkAra =
		'https://www.aramex.com/sa/en/track/track-results-new?source=aramex&ShipmentNumber=';
	trackingNumber.map(() => {
		let newtrack = trackingNumber + ',';

		let finalLink = linkAra + newtrack;
		console.log(finalLink);
		window.open(finalLink, '_black');
	});
}

// Aramex Multiple Tracking Button End

// Print Zid invoice Multiple Tracking Button Start

let inoicesBtn = document.getElementById('inoices');

inoicesBtn.addEventListener('click', () => {
	let inLink = 'https://web.zid.sa/orders/invoices?order_id=';
	let orders = dataTextarea.value.split('\n');
	let newOrders = '';
	orders.forEach((value, index) => {
		newOrders = newOrders + value + ',';
	});
	console.log(inLink + newOrders);
	window.open(inLink + newOrders, '_blank');
});

// Print Zid invoice Multiple Tracking Button End

// Print Zid search Multiple Tracking Button Start

let zidsrc = document.getElementById('zidsrc');

zidsrc.addEventListener('click', () => {
	let inLink = 'https://web.zid.sa/orders?search=';
	let orders = dataTextarea.value.split('\n');
	let newOrders = '';
	orders.forEach((value) => {
		newOrders = newOrders + value + ' ';
	});
	window.open(inLink + newOrders, '_blank');
});

// Print Zid search Multiple Tracking Button End

// style here
function style1() {
	linksContainer.innerHTML = 'Please enter a pickup Id.......!';
	linksContainer.style.color = 'red';
	dataTextarea.style.scale = '1.01';
	linksContainer.style.fontSize = '18px';
	linksContainer.style.transition = 'all .5s';
	dataTextarea.style.outline = '5px solid red';
	dataTextarea.style.color = 'red';
	dataTextarea.placeholder = 'Please fill me.';
	dataTextarea.style.transition = 'all .5s';

	setTimeout(() => {
		linksContainer.innerHTML = 'Link will show here...!';
		linksContainer.style.color = 'black';
		dataTextarea.style.scale = '1';
		linksContainer.style.transition = 'all .5s';
		dataTextarea.style.outline = '';
		dataTextarea.style.color = '';
		dataTextarea.style.transition = 'all .5s';
		dataTextarea.placeholder = '';
	}, 1000);
}

// pickup list bulk print here Start
function makeLink(event) {
	console.log('work1')
	if (dataTextarea.value === '') {
		style1();
		console.log('work2')
	} else {
		console.log('work3')
		let url = allLinks + dataTextarea.value.trim() + '/' + event.target.value;
		window.open(url, '_blank');
	}
}

aramex.addEventListener('click', makeLink);
tamex.addEventListener('click', makeLink);
postage.addEventListener('click', makeLink);
Fastlo.addEventListener('click', makeLink);

// Generate bulk link for all courier
document.getElementById('generateLinks').addEventListener('click', () => {
	if (dataTextarea.value === '') {
		style1();
	} else {
		let dataTextarea = document.getElementById('dataTextarea');
		let linksContainer = document.getElementById('linksContainer');

		// Get data from textarea and split it into an array
		let data = dataTextarea.value.split('\n').filter(Boolean);

		let first = 'https://rashof.fastcoo-solutions.com/fm/assets/all_labels/';
		let last = '.pdf';

		// Clear previous links
		linksContainer.innerHTML = '';

		// Generate and append new links
		data.forEach((label) => {
			let atag = document.createElement('a');
			let tag = first + label + last;
			atag.innerHTML = tag;
			atag.href = tag;
			atag.target = '_blank';

			// Append the link to the container
			linksContainer.appendChild(atag);
			linksContainer.appendChild(document.createElement('br')); // Optional: add line break
		});
	}
});

// Generate bulk link for Dal only
document.getElementById('generateLinksDal').addEventListener('click', () => {
	if (dataTextarea.value === '') {
		style1();
	} else {
		let dataTextarea = document.getElementById('dataTextarea');
		let linksContainer = document.getElementById('linksContainer');

		// Get data from textarea and split it into an array
		let data = dataTextarea.value.split('\n').filter(Boolean);

		let first =
			'https://rashof.fastcoo-solutions.com/fm/Printpicklist3PL_bulk/';
		let last = '/22';

		// Clear previous links
		linksContainer.innerHTML = '';

		// Generate and append new links
		data.forEach((label) => {
			let atag = document.createElement('a');
			let tag = first + label + last;
			atag.innerHTML = tag;
			atag.href = tag;
			atag.target = '_blank';

			// Append the link to the container
			linksContainer.appendChild(atag);
			linksContainer.appendChild(document.createElement('br')); // Optional: add line break
		});
	}
});

// additional option for work smart
function orderNo(event) {
	if (dataTextarea.value === '') {
		style1();
	} else {
		var orderno = document.getElementById('dataTextarea').value.trim();
		var url = event + encodeURIComponent(orderno);
		// window.location.href = url;
		window.open(url, '_blank');
	}
}

// for label print only
function print(event, format) {
	if (dataTextarea.value === '') {
		style1();
	} else {
		var orderno = document.getElementById('dataTextarea').value.trim();
		var url = event + encodeURIComponent(orderno) + encodeURIComponent(format);
		// window.location.href = url;
		window.open(url, '_blank');
	}
}

document.getElementById('wa').addEventListener('click', () => {
	if (dataTextarea.value !== '') {
		window.open(
			`https://web.whatsapp.com/send/?phone=966${dataTextarea.value}&text=hello&type=phone_number&app_absent=0`
		);
	} else {
		style1();
	}
});
