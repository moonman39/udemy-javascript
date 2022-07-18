/* DOM describes our html as a heiracrchial tree of nodes

                            html 
                            /  \
                        head    body
                        /       / |  \
                    title   h1   div    div
                            |     |     
                    text node   text node
*/



// grabs the first instance of the element only
const para = document.querySelector("p");

console.log(para); // <p>hello, world</p>

const div = document.querySelector('div.error')
console.log(div)

const h1 = document.querySelector('body > h1') // got it from the actual console via copy -> copy selector
console.log(h1);


const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[1]); // gets second instance of <p>
paras.forEach(para => {
    console.log(para);
})


const errors = document.querySelectorAll('.error');
console.log(errors);
console.log(errors[1]);
errors.forEach(error => {
    console.log(error);
})
