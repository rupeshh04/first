// script.js
document.addEventListener("DOMContentLoaded", function() {
    const movieList = document.getElementById("movie-list");
    const seatMap = document.getElementById("seat-map");
    const bookBtn = document.getElementById("book-btn");

    // Dummy movie data
    const movies = [
        { title: "Movie 1", seats: 100 },
        { title: "Movie 2", seats: 80 },
        { title: "Movie 3", seats: 120 }
    ];

    // Populate movie list
    movies.forEach((movie, index) => {
        const li = document.createElement("li");
        li.textContent = `${movie.title} (${movie.seats} seats available)`;
        li.addEventListener("click", () => displaySeats(index));
        movieList.appendChild(li);
    });

    // Function to display seats for selected movie
    function displaySeats(movieIndex) {
        seatMap.innerHTML = "";
        const movie = movies[movieIndex];
        for (let i = 1; i <= movie.seats; i++) {
            const seat = document.createElement("div");
            seat.textContent = i;
            seat.classList.add("seat");
            seatMap.appendChild(seat);
        }
    }

    // Event listener for booking button
    bookBtn.addEventListener("click", () => {
        const selectedSeats = document.querySelectorAll(".seat.selected");
        const numSeats = selectedSeats.length;
        if (numSeats > 0) {
            alert(`You have booked ${numSeats} seats.`);
            selectedSeats.forEach(seat => seat.classList.remove("selected"));
        } else {
            alert("Please select at least one seat.");
        }
    });

    // Event delegation for seat selection
    seatMap.addEventListener("click", function(event) {
        if (event.target.classList.contains("seat")) {
            event.target.classList.toggle("selected");
        }
    });
});
