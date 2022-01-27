// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrase');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

const catchphrases = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    let headvalue = headDropdown.value;
    headCount++;
    headEl.style.backgroundImage = `url("./assets/${headvalue}-head.png")`;
    // increment the head change count state
    displayStats();  
    // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (refactor to/call displayStats() to do this work)

});
middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    let middlevalue = middleDropdown.value;
    // increment the middle change count state
    middleCount++;
    middleEl.style.backgroundImage = `url("./assets/${middlevalue}-middle.png")`;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    displayStats();
    // update the stats to show the new count (refactor to/call displayStats() to do this work)
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    let bottomvalue = bottomDropdown.value;
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url("./assets/${bottomvalue}-pants.png")`;
    // update the stats to show the new count (refactor to/call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const catchPhrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(catchPhrase);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    displayCatchphrases();
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

});

function displayStats() {
    // change the text content of the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(headCount, middleCount, bottomCount); // call this function with the correct arguments
    reportEl.innerText = statsString;

}

function displayCatchphrases() {}
    // clear out the DOM for the currently displayed catchphrases
catchphrases.innerHTML = '';
    // loop through each catchphrase in state
const ul = document.createElement('ul');
ul.classList.add('catchphrase');
catchphrasesEl.appendChild(ul);
for (let cp of catchphrases) {
    let li = document.createElement('li');
    li.innerText = cp;
    ul.appendChild(li);
}
   
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM

