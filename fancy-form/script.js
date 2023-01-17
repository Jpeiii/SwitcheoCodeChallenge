const myButton = document.getElementById('submit-token')

myButton.addEventListener('click', (event) => {
    event.preventDefault();
    myButton.innerText = "SENDING";
    setTimeout(() => {
        myButton.innerText = "DONE!";
    }, 2000)
})