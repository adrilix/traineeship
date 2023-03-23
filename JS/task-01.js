

const liItem = document.querySelectorAll('.item');
console.log(liItem);
console.log(`Number of categories: ${liItem.length}`);

liItem.forEach((item) => {
    console.log(`paragraph:`, item.querySelector('h2').textContent);
    console.log(`elements:`, item.querySelectorAll('li').length);
});



