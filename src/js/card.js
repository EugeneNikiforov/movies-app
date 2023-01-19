import getMovies from './fetchApiByQuery';
const q = 'zombie'
onSearchInput(q)

async function onSearchInput(q) {
    const a = await getMovies(q);
    console.log(a);
    console.log('SFLhf');
}


const {cardList} = {
    cardList: document.querySelector('.card-list'),
}

const array = [{ 
    url: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    name: 'GREYHOUND',
    genre: 'Drama',
    data: '2020',
    rating: 10
}, { 
    url: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    name: 'GREYHOUND',
    genre: 'Drama',
    data: '2020',
    rating: 10
},{ 
    url: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    name: 'GREYHOUND',
    genre: 'Drama',
    data: '2020',
    rating: 10
},{ 
    url: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    name: 'GREYHOUND',
    genre: 'Drama',
    data: '2020',
    rating: 10
},{ 
    url: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    name: 'GREYHOUND',
    genre: 'Drama',
    data: '2020',
    rating: 10
    }] 

function createListItem({
    url, name, genre, data, rating
}) {
    const item = document.createElement('li')
    item.classList.add('listItem')
    const image = document.createElement('img')
    image.classList.add('listItemImage')
    image.setAttribute('src', url)
    const filmInfoContainer = document.createElement('div')
    filmInfoContainer.classList.add('filmInfoContainer')
    const filmName = document.createElement('h2')
    filmName.classList.add('filmName')
    filmName.textContent = name
    const filmInfo = document.createElement('span')
    filmInfo.classList.add('filmInfo')
    filmInfo.textContent = `${genre} |  ${data}`
    const filmRating = document.createElement('span')
    filmRating.classList.add('filmRating')
    filmRating.textContent = `${rating}`
    item.append(image)
    filmInfoContainer.append(filmName)
    filmInfoContainer.append(filmInfo)
    filmInfoContainer.append(filmRating)
    item.append(filmInfoContainer)
    cardList.append(item)
}
// createListItem(film)
array.forEach(
    (film) => {
    createListItem(film)
    }
) 
