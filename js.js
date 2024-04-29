let hour = upd;
const name = 'LarynXeon';

var slider = document.getElementById("slider");
// Get the element to update
var upd = document.getElementById("upd");

// Update the element value when slider changes
slider.addEventListener("input", function() {
  upd.textContent = this.value;
});

slider.addEventListener("input", function() {
    hour = parseInt(this.value); // Update the hour variable
    upd.textContent = hour; // Update the text content of the element
  });

function dmsg() {
    let msg = hour >= 6 && hour <= 12 ? `Good morning ${name}` : hour >= 13 && hour <= 17 ? `Good Afternoon ${name}` : `Good Night ${name}`;
    document.getElementById('dmsg').innerHTML = msg;
    document.getElementById('upd').innerHTML = slide;
};
