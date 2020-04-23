firebase.auth().onAuthStateChanged((user)=> {
    if (!user) {
        document.location.href= '../index.html';
    }
});


document.forms.add.addEventListener('submit', event => {
    event.preventDefault();

    const img = event.target.elements.img.value;
    const price = event.target.elements.price.value;
    const text = event.target.elements.text.value;
    const city = event.target.elements.city.value;

    firebase.firestore()
        .collection('properties')
        .add({
            img: img,
            price: price,
            text: text,
            city: city
        })
        .then(() => location.href = 'home.html')

});