const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayFromItems = [];

for (const ingredient of ingredients) {
 
  const item = document.createElement('li')
item.classList.add('item') ;
  item.textContent = ingredient;
  arrayFromItems.push(item);
  };


const listRef = document.querySelector('#ingredients');
listRef.append(...arrayFromItems);