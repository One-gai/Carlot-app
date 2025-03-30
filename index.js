// document.getElementById("inputGroupSelect01").addEventListener("change", function() {
//     let selectedCategory = this.value;
//     let cars = document.querySelectorAll("#carList li");

//     cars.forEach(car => {
//         if (selectedCategory === "Cars Selection") {
//             car.style.display = "list-item"; // Show all cars
//         } else {
//             car.style.display = car.dataset.category === selectedCategory ? "list-item" : "none";
//         }
//     });
// });

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (for interactive components)

document.getElementById("inputGroupSelect01").addEventListener("change", function() {
    let selectedCategory = this.value; // Get selected value from dropdown
    let cars = document.querySelectorAll(".car-item"); // Get all car images

    cars.forEach(car => {
        if (selectedCategory === "all") {
            car.style.display = "block"; // Show all cars
        } else {
            car.style.display = car.dataset.category === selectedCategory ? "block" : "none"; // Show only matching category
        }
    });
});
