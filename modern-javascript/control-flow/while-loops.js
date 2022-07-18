// while loops

const names = ['grant', 'raye', 'god'];

// let i = 0;
// while (i < 5) {
    // console.log('in loops: ', i);
    // i++;
// }

let i = 0;
while (i < names.length) {
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
    i++;
}

