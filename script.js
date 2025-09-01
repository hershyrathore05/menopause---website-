// Quick Tip buttons
let nutritionBtn = document.getElementById("nutritionBtn");
if (nutritionBtn) {
    nutritionBtn.onclick = function() {
        alert("Nutrition Tip: Include calcium-rich foods like milk, yogurt, and leafy greens!");
    };
}

let exerciseBtn = document.getElementById("exerciseBtn");
if (exerciseBtn) {
    exerciseBtn.onclick = function() {
        alert("Exercise Tip: 30 minutes of light walking or yoga daily improves wellness!");
    };
}

let productBtn = document.getElementById("productBtn");
if (productBtn) {
    productBtn.onclick = function() {
        alert("Product Tip: Use high-absorbency pads or cups for heavy flow days.");
    };
}
