// Register form event
const notification = document.querySelectorAll('.tile');

document.forms.register.addEventListener('submit', event => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() =>{
            notification[0].style.color = '#48c774';
            notification[0].textContent = "Registration is success "
        })
        .catch(err => {
            notification[0].style.color = '#f14668';
            notification[0].textContent = err.message;
        })
});

// Login form event

document.forms.login.addEventListener('submit', event => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() =>{
                document.location.href = './pages/home.html';
            })
        .catch(err => {
            notification[0].style.color = '#f14668';
            notification[0].textContent = err.message;
        })

});