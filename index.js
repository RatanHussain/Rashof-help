/** @format */

// selet all element here.....
let aramex = document.querySelector('#aramex');
let tamex = document.querySelector('#tamex');
let jonex = document.querySelector('#jonex');
let postAge = document.querySelector('#postAge');
let businessFlow = document.querySelector('#businessFlow');
let dal = document.querySelector('#DAL');
let dataTextarea = document.querySelector('#dataTextarea');
let linksContainer = document.getElementById('linksContainer');
let allLinks = 'https://rashof.fastcoo-solutions.com/fm/Printpicklist3PL/';

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


	console.log('working func');
}

// Aramex Multiple Tracking Button Start

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

// pickup list bulk print here
function makeLink(event) {
	if (dataTextarea.value === '') {
		style1();
	} else {
		let url = allLinks + dataTextarea.value.trim() + '/' + event.target.value;
		window.open(url, '_blank');
	}
}

aramex.addEventListener('click', makeLink);
tamex.addEventListener('click', makeLink);
jonex.addEventListener('click', makeLink);
postAge.addEventListener('click', makeLink);
businessFlow.addEventListener('click', makeLink);
dal.addEventListener('click', makeLink);

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
