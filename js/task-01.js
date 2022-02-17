const categoriesRef = document.querySelector('#categories');
const allCategoriesRef = categoriesRef.children;
const numberOfCategories = allCategoriesRef.length;
console.log(`Number of categories: ${numberOfCategories}`);

for(let i = 0; i<numberOfCategories; i+= 1) {
    const titleOfCategories = allCategoriesRef[i].querySelector('h2').textContent;
    const numberOfElements = allCategoriesRef[i].querySelector('ul').querySelectorAll('li').length

console.log(`Category: ${titleOfCategories}`);
console.log(`Elements: ${numberOfElements}`);
};
