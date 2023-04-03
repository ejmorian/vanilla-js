/* jshint esversion: 9 */
// get references to the buttons and boxes
const buttons = document.querySelectorAll('button');
const [greenBox, redBox, blueBox] = document.querySelectorAll('#green, #red, #blueIn');

// remove the hidden class and reset positions
function show() {

    redBox.classList.remove('hidden');
    blueBox.classList.remove('hidden');
    greenBox.classList.remove('hidden');
}

// move boxes using the buttons 
function utilities() {

    buttons.forEach((button, index) => {
        // blue box translations
        const translations = ['0 0', '0 600px', '600px 0', '-320px 0', '45px 20px', '0,0'];

        button.addEventListener('click', () => {
            blueBox.style.translate = translations[index];
            redBox.style.translate = '0 0';
            if (index === 3) redBox.style.translate = '320px 0';
            if (index === 5) greenBox.classList.toggle('bgGreen');

            show();
        });
    });
}

window.onload = utilities;


