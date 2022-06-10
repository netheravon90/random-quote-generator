/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/******************** 
 * Create 5 objects in 'quotes' array. Need to have the following properties:
  quote - string
  source - string
  citation - string (at least in one of the objects)
  year - string/number (at least in one of the objects)
  tags - string (good to have)
*********************/

const quotes = [
  {
    quote: 'The journey of a thousand miles begin with one step.',
    source: 'Lao Tzu',
  },
  {
    quote: 'That which does not kill us makes us stronger.',
    source: 'Friedrich Nietzsche',
  },
  {
    quote: 'You must be the change you wish to see in the world.',
    source: 'Mahatma Gandhi',
  },
  {
    quote: 'May the Force be with you',
    source: 'General Dodonna',
    citation: 'Star Wars',
    year: 1977,
    tags: 'Movie'
  },
  {
    quote: 'It does not do to dwell on dreams and forget to live.',
    source: 'Albus Dumbledore',
    citation: 'Harry Potter and the Sorcerer\'s Stone by J.K. Rowling',
    year: 1997,
    tags: 'Book'
  },
];

/***
 * `getRandomQuote` function 
***/

function getRandomQuote() {
  RandomNumber = Math.floor(Math.random() * quotes.length)  // Array index starts from 0. So this randomises the number 0 to 4.
  return quotes[RandomNumber];   // Access the random quotes by returning the random index [] of quotes array.
}

/***
 * `getRandomColor` function 
***/

function getRandomColor() {
  let RandomRGB = [];
  for (let i = 0; i <3; i++ ){
  RandomNumber = Math.floor(Math.random() * 255);
  RandomRGB.push(RandomNumber);
  } 
  RandomColor = `rgb(${RandomRGB[0]}, ${RandomRGB[1]}, ${RandomRGB[2]})`;
  return RandomColor;
}



/***
 * `printQuote` function
***/

function printQuote () {
   // create Var to hold the random quote.
  let RandomQuote = getRandomQuote();            
  // Print Quote and Source of the random quotes in HTML.
  let html = `
  <p class="quote">${RandomQuote.quote}</p>
  <p class="source">${RandomQuote.source}
  `;
  // Print Citation of the random quotes in HTML if citation string is found.
  if (RandomQuote.hasOwnProperty('citation')) {
    html += `<span class="citation">${RandomQuote.citation}</span>`
  };
  // Print Year of the random quotes in HTML if year string is found.
  if (RandomQuote.hasOwnProperty('year')) {
    html += `<span class="year">${RandomQuote.year}</span>`
  }
  // Print Tags of the random quotes in HTML if tags string is found.
  if (RandomQuote.hasOwnProperty('tags')) {
    html += `<span class="tags">${RandomQuote.tags}</span>`
  }
  // Concat to close off the paragraph
  html += `</p>`
  // Find 'quote-box' element and print the string within the element.
  document.getElementById('quote-box').innerHTML = html; 
  // Change background colour randomly using getRandomColor function.
  document.body.style.backgroundColor = getRandomColor();
} 

setInterval (printQuote, 5000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);