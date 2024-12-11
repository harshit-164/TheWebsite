// Select the elements
const confirmButton = document.getElementById('confirmButton');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Show the popup when the button is clicked
confirmButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent link default behavior
    popup.style.display = 'flex'; // Show the popup
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the popup
});
