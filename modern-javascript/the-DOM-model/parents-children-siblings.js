const article = document.querySelector('article');

console.log(article.children); // it's an HTML collection

childArray = Array.from(article.children); // turns the html collection into an array, doesn't change original array (not destructive)

childArray.forEach(child => {
    child.classList.add('article-element');
});

const title = document.querySelector('h2');
console.log(title.parentElement); // parent element of h2
console.log(title.parentElement.parentElement); // goes further up the node tree, parent element of h2's parent
console.log(title.nextElementSibling); // sibling of h2
console.log(title.previousElementSibling); // no previous sibling so its null

// chaining
console.log(title.nextElementSibling.parentElement.children); // gets the original HTML collection






