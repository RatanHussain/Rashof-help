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

// style here
function style1() {
	linksContainer.innerHTML = 'Please enter a pickup Id.......!';
	linksContainer.style.color = 'red';
	dataTextarea.style.scale = '1.01';
	linksContainer.style.fontSize = '18px';
	linksContainer.style.transition = 'all .5s';
	dataTextarea.style.outline = '5px solid red';
	dataTextarea.style.color = 'red';
	dataTextarea.innerHTML = 'Please fill me.';
	dataTextarea.style.transition = 'all .5s';

	setTimeout(() => {
		linksContainer.innerHTML = 'Link will show here...!';
		linksContainer.style.color = 'black';
		dataTextarea.style.scale = '1';
		linksContainer.style.transition = 'all .5s';
		dataTextarea.style.outline = '';
		dataTextarea.style.color = '';
		dataTextarea.style.transition = 'all .5s';
		dataTextarea.innerHTML = '';
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
		let link = 'https://wa.me/966';
		window.open(link + dataTextarea.value);
	} else {
		style1();
	}
});
