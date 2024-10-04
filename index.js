const btn = document.querySelector('button');
const container = document.getElementById('container');
let file = document.getElementById('imgp');
const nameInput = document.getElementById('product');
const priceInput = document.getElementById('price');


btn.addEventListener('click',()=>{
let url = URL.createObjectURL(file.files[0])
const card = document.createElement('div');
card.classList.add('card');
container.appendChild(card);
const name = document.createElement('p');
name.innerText = nameInput.value;
const price = document.createElement('p');
price.innerText = priceInput.value;
const img = document.createElement('img');
img.setAttribute('src',url);
card.appendChild(name);
card.appendChild(img);
card.appendChild(price);

})