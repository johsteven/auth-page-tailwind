// helpers
const elQS = el => document.querySelector(el);
const elQSA = el => document.querySelectorAll(el);
const on = (el, event, value) => el.addEventListener(event, value);

// variables
const closeBtn = elQS('.close');

// functions
function closeBtnEvent(e) {
    e.target.parentElement.remove();
}

// main
window.addEventListener('load', init);

function init() {
    load();
    eventListener();
}

function load() {}

function eventListener() {
    on(closeBtn, 'click', closeBtnEvent)
}