document.getElementById('generateLinks').addEventListener('click', () => {
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
});

document.getElementById('generateLinksDal').addEventListener('click', () => {
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
});


// other section

let dataTextarea = document.getElementById('dataTextarea')

function orderNo() {
    var orderno = document.getElementById('dataTextarea').value;

    var url =
        'https://web.zid.sa/orders?search=' + encodeURIComponent(orderno);

    // window.location.href = url;
    window.open(url, '_blank');
}

function invoice() {
    var orderno = document.getElementById('dataTextarea').value;

    var url =
        'https://web.zid.sa/orders/invoices?order_id=' +
        encodeURIComponent(orderno);

    // window.location.href = url;
    window.open(url, '_blank');
}

function AwbNo() {
    var awbno = document.getElementById('dataTextarea').value;

    var url =
        'https://rashof.fastcoo-solutions.com/fm/TrackingDetails/' +
        encodeURIComponent(awbno);

    // window.location.href = url;
    window.open(url, '_blank');
}

function TrakNo() {
    var trakno = document.getElementById('dataTextarea').value;

    var url =
        'https://postagexp.com/en/track-order-post?track_number=' +
        encodeURIComponent(trakno);

    // window.location.href = url;
    window.open(url, '_blank');
}

function Traktamex() {
    var trakno = document.getElementById('dataTextarea').value;

    var url =
        'https://www.tamex.com.sa/track/' + encodeURIComponent(trakno);

    // window.location.href = url;
    window.open(url, '_blank');
}

function Label() {
    var awbno = document.getElementById('dataTextarea').value;

    var url =
        'https://rashof.fastcoo-solutions.com/fm/assets/all_labels/' +
        encodeURIComponent(awbno) +
        encodeURIComponent('.pdf');

    // window.location.href = url;
    window.open(url, '_blank');
}