let run = true;

let test = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(run) {
            resolve('Promise resolved');
        } else {
            reject('Promise rejected');
        }
    }, 1000);
});

test.then((message) => {
    console.log("status " + message);
}).catch((message) => {
    console.log("status " + message);
});