const servicesData = [
    { image: 'assets/img/pic_1.jpg', heading: 'Destination Wedding', description: 'We arrange destination weddings anywhere in the country.' },
    { image: 'assets/img/pic_2.jpg', heading: 'Decoration Service', description: 'We provide decoration services for various events.' },
    { image: 'assets/img/pic_3.jpg', heading: 'Catering Service', description: 'We offer catering services for different occasions.' }
];

const serviceContainer = document.getElementById('serviceContainer');

servicesData.forEach(service => {
    const card = document.createElement('div');
    card.className = 'card';

    const { image, heading, description } = service;

    card.innerHTML = `
        <img class="card__image" src="${image}" alt="">
        <div class="card__text">
            <h3 class="card__heading">${heading}</h3>
            <p class="card__description">${description}</p>
            <div class="card__button-container">
                <hr class="card__separator">
                <button class="card__button">Learn more</button>
            </div>
        </div>
    `;

    serviceContainer.appendChild(card);
});




// ВАРИАНТ БЕЗ innerHTML >>>
// const servicesData = [
//     { image: 'assets/img/pic_1.jpg', heading: 'Destination Wedding', description: 'We arrange destination weddings anywhere in the country.' },
//     { image: 'assets/img/pic_2.jpg', heading: 'Decoration Service', description: 'We provide decoration services for various events.' },
//     { image: 'assets/img/pic_3.jpg', heading: 'Catering Service', description: 'We offer catering services for different occasions.' }
// ];

// const serviceContainer = document.getElementById('serviceContainer');
// servicesData.forEach(service => {
//     const card = document.createElement('div');
//     card.className = 'card';

//     const image = document.createElement('img');
//     image.className = 'card__image';
//     image.src = service.image;
//     image.alt = '';

//     const textContainer = document.createElement('div');
//     textContainer.className = 'card__text';

//     const heading = document.createElement('h3');
//     heading.className = 'card__heading';
//     heading.textContent = service.heading;

//     const description = document.createElement('p');
//     description.className = 'card__description';
//     description.textContent = service.description;

//     const buttonContainer = document.createElement('div');
//     buttonContainer.className = 'card__button-container';

//     const separator = document.createElement('hr');
//     separator.className = 'card__separator';

//     const button = document.createElement('button');
//     button.className = 'card__button';
//     button.textContent = 'Learn more';

   
//     textContainer.appendChild(heading);
//     textContainer.appendChild(description);
//     buttonContainer.appendChild(separator);
//     buttonContainer.appendChild(button);
//     textContainer.appendChild(buttonContainer);
//     card.appendChild(image);
//     card.appendChild(textContainer);
//     serviceContainer.appendChild(card);
// });
