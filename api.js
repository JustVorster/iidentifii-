// Creating variables to store the API Endpoints
const randomUserUrl = 'https://randomuser.me/api';
const numbersUrl = 'http://numbersapi.com/random/math';
const boredUrl = 'https://www.boredapi.com/api/activity';

// Initializing variables to store data for API calls + while waiting for API call to be successful

let myData = [];
let numbersData;
let boredData;
let loading = true;

// Selectors for headings, loading animation, table and paragraphs to display data + click events

let randomActivity = document.querySelector('.random-activity');
let randomNumberFact = document.querySelector('.random-number');
let tableHeaders = document.querySelector('.bg-info');
let numberDisplay = document.getElementById('math-fact');
let activityDisplay = document.getElementById('activity');
let loadingAnimation = document.getElementById('loading-ani');

// onclick function on ice-cream loader on loading page to link to data table page

function goHome(){
    window.location = 'index.html'    
};

/* Debugging using console.logs 
function consoleLogStuff(){
    console.log(boredData);
    console.log(numbersData);
    console.log(typeof(boredData));
    console.log(typeof(numbersData));
}
*/