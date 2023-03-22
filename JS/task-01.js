// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.


const totalUl = document.querySelector(`#categories`);
const categories = totalUl.children;
console.log(`Number of categories: ${categories.length}`);
console.log(totalUl);


const counterDataOfCategory = () => {

    const category = totalUl.querySelector(`.item`);
    const nameOfCategory = category.querySelector(`h2`);
    console.log(`Category: ${nameOfCategory.textContent}`);

    const categoryList = category.querySelectorAll(`li`);
    console.log(`Elements: ${categoryList.length}`);
}

totalUl.forEach(element => {
    counterDataOfCategory(element)
});



