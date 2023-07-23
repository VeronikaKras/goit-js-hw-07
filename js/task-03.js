const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ВАРІАНТ 1
// const ulList = document.querySelector('.gallery');

// const liList = document.createElement('li');
// for (const {url, alt }  of images) {
//   const imageEl = document.createElement('img');
//   imageEl.src = url;
//   imageEl.alt = alt;
// liList.appendChild(imageEl);

// }
// ulList.appendChild(liList);

// console.log(ulList);

// ВАРІАНТ 2

const ul = document.querySelector(".gallery");
const markup = images.map((image) => {
  return `
    <li>
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `;
}).join("");
ul.insertAdjacentHTML("beforeend", markup);
console.log(ul);