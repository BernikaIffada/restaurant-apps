import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from "../DATA.json";

document.addEventListener('DOMContentLoaded', () =>{
const cardElement = document.querySelector(".card-item");
const restaurants = data.restaurants;
restaurants.forEach((restaurant) => {
cardElement.innerHTML += `
<div class="card-item">
<img class="card-item-thumb"
src="${restaurant.pictureId}"
alt="${restaurant.name} restaurant" tabindex="0" position: center;>
<div class="card-item__content">
<h1 class="card-item__title" tabindex="0">${restaurant.name}</h1>
<p class="card-item_city" tabindex="0">
located in ${restaurant.city}<span class=txt-rate> with Ratting </span>
<span class=ratting></span>${restaurant.rating} </p>
<p class="card-item__description" tabindex="0">${restaurant.description}</p></div></div>`;
});
});

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});
 
mainElement.addEventListener('click', event => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
})