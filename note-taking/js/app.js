

const notes = [];

function clearDisplay() {
    document.getElementById('display-note').removeChild(document.getElementById('display-note').firstChild);
}


function addNote() {
    const noteInput = document.getElementById('note');
    notes.push(noteInput.value);
    console.log('click')
    console.log(notes)

    createNote();
}

function createNote() {
    clearDisplay();

    const displayNote = document.getElementById('display-note');
    const list = document.createElement('ul');

    notes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.innerText = note;
        list.append(listItem);
    })

    displayNote.append(list);
}


function init() {
    document.getElementsByTagName('form')[0].addEventListener('submit', (e) => { e.preventDefault() });

    document.getElementById('add-button').addEventListener('click', addNote);



}

window.onload = init;