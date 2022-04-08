const somethinWillHappen = () => {
    return new Promise((resolve, reject) => {
       if(true) {
           resolve('Hey!')
       } else {
           reject('Upss!')
       }
    });
};

somethinWillHappen() 
 .then(response => console.log(response))
 .catch(err => console.log(err));
//
const somethinWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
        setTimeout(() => {
                resolve('true');
        }, 2000)
      } else {
          const error = new Error('Whooops!');
          reject(error);
      }
    });
}

somethinWillHappen2() 
 .then(response => console.log(response))
 .catch(err => console.error(err));

// Correr varias promesas al mismo tiempo
Promise.all([somethinWillHappen(), somethinWillHappen2()])
 .then(response => {
     console.log('Array of result', response)
 })
 .catch(err => {
     console.log(err)
 });






