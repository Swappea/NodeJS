const p = new Promise((resolve, reject) => {

    setTimeout(() => {
        // resolve(1); // pending => resolved
        // reject(new Error('something went wrong')); // pending => rejected
    }, 2000);
});

p.then((result) => {
    console.log(`Result: ${result}`);
}).catch((error) => {
    console.log(`Error: ${error.message}`);
});