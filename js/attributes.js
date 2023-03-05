//* read only
// document.getElementById('get-input-value').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(document.getElementById('car').value) //? The value of a read-only input field will be sent when submitting the form!
// })

//* get value from the input filed that disabled
// document.getElementById('get-values').addEventListener('click', (e) => {
//     e.preventDefault();
//     const firstName = document.getElementById('first-name').value;
//     const lastName = document.getElementById('last-name').value;
//     console.log(firstName, lastName)
// })

//* maxLength attribute
// document.getElementById('get-max-length').addEventListener('keyup', (e) => {
//     const pin = e.target.value;
//     if(pin.length > 4){
//         alert('pin should be 4 characters')
//     }
// })

//* multiple attribute
// document.getElementById('get-files').addEventListener('click', (e) => {
//     e.preventDefault();
//     const files = document.getElementById('files').files;
//     for (let i = 0; i < files.length; i++) {
//         console.log(files[i])
//     }
// })

//* patter attribute
// document.getElementById('submit').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(document.getElementById('pattern-field').value)
// })