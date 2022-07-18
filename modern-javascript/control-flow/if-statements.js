// if statements

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length > 3) {
    for (const ninja of ninjas) {
        ninjaProper = ninja[0].toUpperCase() + ninja.slice(1);
        console.log(`${ninjaProper} is an amazing ninja. Hiiiya!`);
    };
}


const password = 'password123';

if (password.length >= 8) {
    console.log('that password is long enough');
}