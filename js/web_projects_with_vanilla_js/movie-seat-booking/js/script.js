const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
console.log('ticketPrice', ticketPrice);

// UPDATE TOTAL AND COUNT
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    console.log('selectedSeats', selectedSeats);

    const selectedSeatsCount = selectedSeats.length;
    console.log('selectedSeatsCount', selectedSeatsCount);

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// MOVIE SELECT EVENT
movieSelect.addEventListener('change', event => {
    ticketPrice = event.target.value;
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
