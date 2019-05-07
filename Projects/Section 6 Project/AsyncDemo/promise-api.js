
// const p1 = Promise.resolve({ id: 1});
// p1.then(user => { console.log(user)});
// const p2 = Promise.reject(new Error('message'));
// p2.catch(error => { console.log(error)});


const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1....');
        resolve(1);
    }, 2000);
});
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2....');
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])
    .then((result) => {
        console.log(result);
    });

Promise.race([p1, p2])
    .then((result) => {
        console.log(result);
    });