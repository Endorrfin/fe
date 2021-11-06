const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();
let ticketPrice = +movieSelect.value;
console.log('ticketPrice', ticketPrice);

// SAVE SELECTED MOVIE INDEX AND PRICE
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// UPDATE TOTAL AND COUNT
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    console.log('selectedSeats', selectedSeats);

    // Copy selected seats into arr
    // Map through array
    // return a new array indexes

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    console.log('seatsIndex', seatsIndex);

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    console.log('selectedSeatsCount', selectedSeatsCount);

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// GET DATA FROM LOCALSTORAGE AND POPULATE UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    console.log('getItem selectedSeats', selectedSeats)

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// MOVIE SELECT EVENT
movieSelect.addEventListener('change', event => {
    ticketPrice = +event.target.value;
    setMovieData(event.target.selectedIndex, event.target.value);
    console.log('selectedIndex & price', event.target.selectedIndex, event.target.value);
    updateSelectedCount();
})

// SEAT CLICK EVENT
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        console.log(e.target);
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

// INITIAL COUNT AND TOTAL SET
updateSelectedCount();
