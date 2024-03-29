'use strict';

// ==========================================================
//            246. Asynchronous JavaScript, AJAX and APIs
// ==========================================================

/*
* SYNCHRONOUS CODE
* Thread of execution
* Most code is synchronous
* Synchronous code is executed line by line
* Each line of code waits for previous line to finish
* Long-running operations block code execution.
* Part of execution context that actually executes the code in computer's CPU
*
* * */

/*
* ASYNCHRONOUS CODE
* Asynchronous code is executed after a task that runs in the "background" finishes;
* Asynchronous code is non-blocking;
* Execution doesn't wait for an asynchronous task to finish its work;
* Callback functions alone do NOT make code asynchronous!
* Coordinating behavior of a program over a period of time.
* * */

/*
* AJAX
* Asynchronous JavaScript And XML: Allows us to communicate with remote web servers in a asynchronous was.
* With AJAX calls, we can request data from web servers dynamically.
* */

/*
* API
* Application Programming Interface: Piece of software that can be used by another piece of software, in order to
*  allow applications to talk to each other;
*
* There are many types of APIs in web development:
* DOM API
* Geolocation API
* Own Class API
* Online API
* */



// ==========================================================
//            248. Our First AJAX Call: XMLHttpRequest
// ==========================================================


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `
     <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v2/name/portugal');
// request.send();
// console.log(request.responseText);
//
//
// request.addEventListener('load', function() {
//   console.log(this.responseText);
//
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);
//
//   const html = `
//      <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//   `;
//
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// });


const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  console.log(request.responseText);


  request.addEventListener('load', function() {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    const html = `
     <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');


// =======================================================================
//            250. Welcome to Callback Hell
// =======================================================================

const getCountryAndNeighbour = function (country) {

  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function() {
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data.borders?.[0];
    if(!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function() {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    })

  });
};

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');


// CALLBACK HELL
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);



// =======================================================================
//            251. Promises and the Fetch API
// =======================================================================

/*
* Promise: An object that is used as a placeholder for the future result of an asynchronous operation.
* Promise: A container for an asynchronously delivered value.
* Promise: A container for a future value.
* */

const requestFetch = fetch('https://restcountries.com/v2/name/portugal');
// console.log(requestFetch);

// DETAILED VARIANT
const getCountryDataFetchOne = function(country) {
  fetch(`https://restcountries.com/v2/name/${country}`).then(function(response) {
    console.log('response', response);
    return response.json();
  })
    .then(function(data) {
      console.log('data', data);
      renderCountry(data[0]);
    })
}

// getCountryDataFetchOne('portugal');


// SHORT VARIANT
const getCountryDataFetchTwo = (country) => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

// getCountryDataFetchTwo('portugal');
// getCountryDataFetchTwo('USA');
// getCountryDataFetchTwo('Germany');


// =======================================================================
//            253. Chaining Promises
// =======================================================================

const getCountryDataFetchChaining = (country) => {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if(!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};



// getCountryDataFetchChaining('portugal');
// getCountryDataFetchChaining('germany');



// =======================================================================
//            254. Handling Rejected Promises
// =======================================================================

const getJSON = function(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// LONG OPTION
// const getCountryDataFetchHandingRejected = (country) => {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dfdfdf';
//
//       if(!neighbour) return;
//
//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response =>  {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err =>  {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong  💥💥 ${err.message}. Try again!`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
// };

// OPTIMIZE OPTION
const getCountryDataFetchHandingRejected = (country) => {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // const neighbour = 'dfdfdf';
      // console.log('neighbour', neighbour);

      if (!neighbour) throw new Error('No neighbour found!');

      if(!neighbour) return;

      // Country 2
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err =>  {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong  💥💥 ${err.message}. Try again!`)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function() {
  getCountryData('portugal');
});



// getCountryDataFetchHandingRejected('portugal');
// getCountryDataFetchHandingRejected('germany');
// getCountryDataFetchHandingRejected('australia');



// ==========================================================
//             256 Coding Challenge #1
// ==========================================================

/*
  In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
  Here are your tasks:
  PART 1
    1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
    2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
    The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
    3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
    4. Chain a .catch method to the end of the promise chain and log errors to the console
    5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
  PART 2
    6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
    7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
    TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
    TEST COORDINATES 2: 19.037, 72.873
    TEST COORDINATES 2: -33.933, 18.474
  GOOD LUCK 😀
*/

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in, ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
  })
    .then(res => {
      if (!res.ok) throw new Error(`Country no found (${res.status})`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}💥`));
};

// whereAmI(52.508,13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);






