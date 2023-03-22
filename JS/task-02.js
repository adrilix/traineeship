const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredientsRender = document.querySelector('#ingredients');
const allIngridients = [];
ingredients.map(ingredient => {
  const newIngredient = document.createElement('li');
  newIngredient.textContent = ingredient;
  newIngredient.classList = ('.item');
  return allIngridients.push(newIngredient);

});

ingredientsRender.append(...allIngridients);
