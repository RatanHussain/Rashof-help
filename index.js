
let aramex = document.querySelector('#aramex');
let tamex = document.querySelector('#tamex');
let jonex = document.querySelector('#jonex');
let postAge = document.querySelector('#postAge')
let businessFlow = document.querySelector('#businessFlow');
let dal = document.querySelector('#DAL');
let dataTextarea = document.querySelector('#dataTextarea');
let linksContainer = document.getElementById('linksContainer');
let allLinks = 'https://rashof.fastcoo-solutions.com/fm/Printpicklist3PL/';


function makeLink(event){
    if(dataTextarea.value === ''){
        linksContainer.innerHTML = 'Please enter a pickup Id.......!'
        linksContainer.style.color = 'red';
        linksContainer.style.scale = '1.01';
        linksContainer.style.fontSize = '18px';
        linksContainer.style.transition = 'all .5s';
        setTimeout(() => {
            linksContainer.innerHTML = 'Link will show here...!'
            linksContainer.style.color = 'black'
            linksContainer.style.scale = '1';
            linksContainer.style.transition = 'all .5s'

        }, 2000);
    }else{
        let url = allLinks + dataTextarea.value + "/" + event.target.value;
         window.open(url, '_blank');
    }
}

aramex.addEventListener('click' , makeLink);
tamex.addEventListener('click' , makeLink);
jonex.addEventListener('click' , makeLink);
postAge.addEventListener('click' , makeLink);
businessFlow.addEventListener('click' , makeLink);
dal.addEventListener('click' , makeLink);


document.getElementById('generateLinks').addEventListener('click', () => {
    if(dataTextarea.value == ''){
        linksContainer.innerHTML = 'Please enter AWB number...!';
        linksContainer.style.scale = '1.01'
        linksContainer.style.fontSize = '18px'
        linksContainer.style.transition = 'all .5s'
        linksContainer.style.color = 'red'
        setTimeout(() => {
            linksContainer.innerHTML = 'Link will show here...!'
            linksContainer.style.color = 'black'
            linksContainer.style.scale = ''
            linksContainer.style.transition = 'all .5s'

        }, 2000);

    }else{
        let dataTextarea = document.getElementById('dataTextarea');
    let linksContainer = document.getElementById('linksContainer');

    // Get data from textarea and split it into an array
    let data = dataTextarea.value.split('\n').filter(Boolean);

    let first = "https://rashof.fastcoo-solutions.com/fm/assets/all_labels/";
    let last = ".pdf";

    // Clear previous links
    linksContainer.innerHTML = '';

    // Generate and append new links
    data.forEach((label) => {
        let atag = document.createElement('a');
        let tag = first + label + last;
        atag.innerHTML = tag;
        atag.href = tag;
        atag.target = "_blank";

        // Append the link to the container
        linksContainer.appendChild(atag);
        linksContainer.appendChild(document.createElement('br')); // Optional: add line break
    });
    }
});

document.getElementById('generateLinksDal').addEventListener('click', () => {
    if(dataTextarea.value === ''){
        linksContainer.innerHTML = 'Please enter AWB number...!';
        linksContainer.style.scale = '1.01'
        linksContainer.style.fontSize = '18px'
        linksContainer.style.transition = 'all .5s'
        linksContainer.style.color = 'red'
        setTimeout(() => {
            linksContainer.innerHTML = 'Link will show here...!'
            linksContainer.style.color = 'black'
            linksContainer.style.scale = ''
            linksContainer.style.transition = 'all .5s'

        }, 2000);
    }else{
        let dataTextarea = document.getElementById('dataTextarea');
    let linksContainer = document.getElementById('linksContainer');

    // Get data from textarea and split it into an array
    let data = dataTextarea.value.split('\n').filter(Boolean);

    let first = "https://rashof.fastcoo-solutions.com/fm/Printpicklist3PL_bulk/";
    let last = "/22";

    // Clear previous links
    linksContainer.innerHTML = '';

    // Generate and append new links
    data.forEach((label) => {
        let atag = document.createElement('a');
        let tag = first + label + last;
        atag.innerHTML = tag;
        atag.href = tag;
        atag.target = "_blank";

        // Append the link to the container
        linksContainer.appendChild(atag);
        linksContainer.appendChild(document.createElement('br')); // Optional: add line break
    });
    }

});



function orderNo(event) {
    if(dataTextarea.value === ''){
        linksContainer.innerHTML = 'Please enter AWB number...!';
        linksContainer.style.scale = '1.01'
        linksContainer.style.fontSize = '18px'
        linksContainer.style.transition = 'all .5s'
        linksContainer.style.color = 'red'
        setTimeout(() => {
            linksContainer.innerHTML = 'Link will show here...!'
            linksContainer.style.color = 'black'
            linksContainer.style.scale = ''
            linksContainer.style.transition = 'all .5s'

        }, 2000);
    }else{
        var orderno = document.getElementById('dataTextarea').value;
        var url = event + encodeURIComponent(orderno);
        // window.location.href = url;
        window.open(url, '_blank');
    }
}
function print(event , format) {
    if(dataTextarea.value === ''){
        linksContainer.innerHTML = 'Please enter AWB number...!';
        linksContainer.style.scale = '1.01'
        linksContainer.style.fontSize = '18px'
        linksContainer.style.transition = 'all .5s'
        linksContainer.style.color = 'red'
        setTimeout(() => {
            linksContainer.innerHTML = 'Link will show here...!'
            linksContainer.style.color = 'black'
            linksContainer.style.scale = ''
            linksContainer.style.transition = 'all .5s'

        }, 2000);
    }else{
        var orderno = document.getElementById('dataTextarea').value;
        var url = event + encodeURIComponent(orderno) + encodeURIComponent(format);
        // window.location.href = url;
        window.open(url, '_blank');
    }
}