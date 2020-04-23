firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        document.location.href = '../index.html';
    }
});

const vilniusBtn = document.querySelector('#vilnius');
const kaunasBtn = document.querySelector('#kaunas');
const klaipedaBtn = document.querySelector('#klaipeda');


const db = firebase.firestore();
const cardsGroup = document.querySelector('.cards-group');

db.collection('properties').get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            displayCity(doc);
        })
    })


vilniusBtn.addEventListener('click', () => {
    cardsGroup.innerHTML = '';
    db.collection('properties').get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                if (doc.data().city.toLowerCase() === 'vilnius') {
                    displayCity(doc);
                }
            })
        })
});

kaunasBtn.addEventListener('click', () => {
    cardsGroup.innerHTML = '';
    db.collection('properties').get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                if (doc.data().city.toLowerCase() === 'kaunas') {
                    displayCity(doc);
                }
            })
        })
});

klaipedaBtn.addEventListener('click', () => {
    cardsGroup.innerHTML = '';
    db.collection('properties').get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                if (doc.data().city.toLowerCase() === 'klaipeda') {
                    displayCity(doc);
                }
            })
        })
});

/*db.collection('properties').get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            displayCity(doc);

            vilniusBtn.addEventListener('click', () => {
                if (doc.data().city.toLowerCase() === 'vilnius') {
                    cardsGroup.innerHTML = '';
                    displayCity(doc);
                }
            })

            kaunasBtn.addEventListener('click', () => {
                if (doc.data().city.toLowerCase() === 'kaunas') {
                    cardsGroup.innerHTML = '';
                    displayCity(doc);
                }
            })

            klaipedaBtn.addEventListener('click', () => {
                if (doc.data().city.toLowerCase() === 'klaipeda') {
                    cardsGroup.innerHTML = '';
                    displayCity(doc);
                }
            })
        })
    });*/

function displayCity(doc) {
    const img = doc.data().img;
    const price = doc.data().price;
    const city = doc.data().city;
    const text = doc.data().text;

    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');

    const image = document.createElement('img')
    image.src = img;

    cardImage.append(image);
    card.append(cardImage);

    const content = document.createElement('div');
    content.classList.add('media-content');
    const p1 = document.createElement('p');
    p1.classList.add('title', 'is-4');
    const p2 = document.createElement('p');
    p2.classList.add('subtitle', 'is-6');
    const content2 = document.createElement('div');
    content2.classList.add('content');
    const p3 = document.createElement('p');
    p3.classList.add('subtitle', 'is-5');

    p1.textContent = price;
    p2.textContent = city;
    p3.textContent = text;


    content.append(p1);
    content.append(p2);
    card.append(content);

    content2.append(p3);
    card.append(content2);

    cardsGroup.append(card);
}
