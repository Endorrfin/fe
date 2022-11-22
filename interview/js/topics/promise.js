// ============ PROMISE (ES6) ============

// ------- Example I -------
const promise1 = new Promise((resolve, reject) => {
    if (true) {
        resolve('promise completed!');
    } else {
        reject();
    }
});

// promise1
//     .then(data => console.log(data))
//     .catch(() => console.log('error'));


// ------- Example II -------
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('promise completed!');
        } else {
            reject();
        }
    }, 1000);
});

// promise2
//     .then(data => console.log(data))
//     .catch(() => console.log('error'));


// ------- Example III -------
/*
* Если внутри promise будет добавлен throw, то promise сразу вернет ошибку, которую можно будет отлавить catch.
* Тоесть код написан после throw выполнен не будет.
* */

const promise3 = new Promise((resolve, reject) => {
    // throw new Error('some error...');
    setTimeout(() => {
        if (true) {
            resolve('promise completed!');
        } else {
            reject();
        }
    }, 1000);
});

// promise3
//     .then(data => console.log(data))
//     .catch(error => console.log(error));


// ------- Example IV -------
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
    // .then(data => console.log('OUTPUT USERS', data))
    // .catch(() => console.log('some error...'));


// ------- Example V -------
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
    // .then(data => console.log('OUTPUT POSTS', data))
    // .catch(() => console.log('some error...'));


// ------- Example VI -------
const postsPromise = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
    { title: 'Post Three', body: 'This is post three' },
    { title: 'Post Four', body: 'This is post four' },
    { title: 'Post Five', body: 'This is post five' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        postsPromise.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

// getPosts();


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            postsPromise.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}



// createPost({ title: 'Post Six', body: 'This is post six' })
//     .then(getPosts)
//     .catch(err => console.log(err));


// PROMISE ALL

const promise01 = Promise.resolve('Hello World');
const promise02 = 10;
const promise03 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

// const promise04 =
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json());

// Promise.all([promise01, promise02, promise03, promise04]).then(values => console.log(values));










// ============ PROMISE ============
// function job(state) {
//   return new Promise(function(resolve, reject) {
//       if (state) {
//           resolve('success');
//       } else {
//           reject('error');
//       }
//   });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//   console.log(data);  // success

//   return job(false);
// })

// .catch(function(error) {
//   console.log(error); // error

//   return 'Error caught';
// })

// .then(function(data) {
//   console.log(data); // Error caught

//   return job(true);
// })

// .catch(function(error) {
//   console.log(error);
// });


// ============ PROMISE ============
// function job(state) {
//   return new Promise(function(resolve, reject) {
//       if (state) {
//           resolve('success');
//       } else {
//           reject('error');
//       }
//   });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//   console.log(data); // success

//   return job(true);
// })

// .then(function(data) {
//   if (data !== 'victory') {
//       throw 'Defeat';
//   }

//   return job(true);
// })

// .then(function(data) {
//   console.log(data);
// })

// .catch(function(error) {
//   console.log(error); // error -> Defeat

//   return job(false);
// })

// .then(function(data) {
//   console.log(data);

//   return job(true);
// })

// .catch(function(error) {
//   console.log(error); // error

//   return 'Error caught';
// })

// .then(function(data) {
//   console.log(data); // 'Error caught'

//   return new Error('test');
// })

// .then(function(data) {
//   console.log('Success:', data.message); // Success: test
// })

// .catch(function(data) {
//   console.log('Error:', data.message); // error -> null
// });


// ============ PROMISE TASK in Andersen ============
// Promise.reject('a')
//   .catch(p => p + 'b')
//   .catch(p => p + 'с')
//   .then(p => p + 'd')
//   .finally(p => p + 'e')
//   .then(p => console.log(p))


// ============ PROMISE TASK in Andersen ============
// Promise.resolve('Error')
// .then('12312321')
// .then((e) => {
//   console.log(e); // Error
//   throw new Error('Error again')
// })
// .catch('undefinde happen')
// .catch((e) => console.log(e)) // Error again => "Error again"
// .then((a) => Promise.reject(a + ' is'))
// .then((a) => a + ' not')
// .catch((a) => console.log(a + ' undefined')) // undefined is undefined

// function catchError(arg1) {
// return arg1 + ' happen';
// }


// ================================================
//          PROMISE - InSimpleWords
// ================================================


/*
* Promise - это объект, у него есть сслыка __proto__
* Promise - может в себе хранить 3 состояния и может хранить в себе неограниченное к-во значений, привязанных к этому промису.
* Понятия, как частично выполненное обещание в JS нет.
* Обещание из неопределенного состояния (pending) переводится всего лишь 1 раз либо reject либо fulfilled
* [[PromiseStatus]] - Cостояние статуса Promise бывает одним из: pending || fulfilled || rejected
* [[PromiseResult]] - Результат Promise - будет лежать результат // в Chrome [[PromiseValue]]
* [[PromiseFulfilledReactions]] - Реакции на Promise в состоянии удачи ([] складирует последствия выполненных обещаний)
* [[PromiseRejectReactions]] - Реакции на Promise в состоянии неудачи ([] складирует последствия выполненных обещаний)
* .promise.then() - вызывается через точку, значит then - это метод promise
* then - последствие выполненного обещания.
* Когда у нас Promise в состоянии pending, PromiseResult равен ничему.
* Важно не столько Promise - обещание, как его результат.
* Функции resolve & reject - это 2 механизма, чтобы перевести promise в состояние отличное от pending
* */

// 1. Пишем фукнкцию конструктор рождающую promise и сам объект promise
// const promise = new Promise((function (resolve, reject) {
// }))
//
// console.log(promise);
// pending - состояние неопределенности, доно обещание что-то сделать.


// 2. Promise выполнен успешно
// const promise = new Promise((function (resolve, reject) {
//     resolve('success')
// }))
//
// console.log(promise);
// resolved - успешно выполненное обещание.


// 3. Promise example
// var promise2 = new Promise(function (resolve, reject) {

// OPTION I
// Я обещею посчитать сумму 2-х чисел
// var sum = 5 + 7;
// resolve(sum); // обещание выполнено resolved


// Я обещаю разделить одно число на другое, но если попадается ноль, в качестве делителя, то обстоятельства сильнее меня.
// Деление на ноль запрещено

// OPTION II
//     var resultDiv = div(12, 0);
//     if (resultDiv == false) {
//         reject('unsuccess');
//     } else {
//         resolve(resultDiv);
//     }
// })

// console.log(promise2);


// function div(a, b) {
//     if (b == 0) {
//         return false;
//     } else {
//         return a/b;
//     }
// }


// 4. Promise example
// const promise3 = new Promise(function (res, rej) {
//     console.dir(res);
// })


// 5. Promise example
// var arr = [6, 7, 8];

// function randomInteger(min, max) {
//     var rand = min - 0.5 + Math.random() * (max - min + 1)
//     rand = Math.round(rand);
//     return rand;
// }

// const promise4 = new Promise(function (resolve, reject) {
//     var num = +prompt(`загадайте число из приведенных${arr}`);
//     console.log("I'm thinking...");

//     setTimeout(function (){
//         var randomNumber = arr[randomInteger(0, 2)];
//         if (num == randomNumber){
//             console.log('Cool');
//             resolve('Cool')
//         } else {
//             console.log('Ops;' + randomNumber);
//             reject ('Ops')
//         }
//     },2000);
// });

// console.log(promise4);


const prom1 = Promise.resolve('123');
const prom2 = Promise.resolve('error');
const prom3 = Promise.resolve('some');
Promise.all([prom1, prom2, prom3])
    // .then(data => console.log(data))
    .catch(error => console.log(error));


// console.log('Hi');


// ============ Змыкание счетчик ============

function makeCounter() {
    var currentCount = 0;

    return function() {
        return currentCount++;
    }
}

var counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


var counter2 = makeCounter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());



// ------- Example I -------

const promise = new Promise ((resolve, reject) => {
    setTimeout (() => {
        resolve('Success');
    }, 1000)
});

// promise.then(data => console.log(data));

const delay = ms => new Promise (((resolve, reject) => {
    setTimeout(() => resolve(`Done! ${ms}`), ms)
}))

delay('Err')
    .then(data => delay(500))
    // .then(data => console.log(data))
    .catch(err => console.log(err))
// .finally(() => console.log('Выполнено !'))

async function asyncDelay() {
    try {
        const data = await delay(2000)
        // console.log(data)
    } catch (e) {
        console.log('Error')
    }
}
asyncDelay();

// Promise.all ([
//     delay(1000),
//     delay(500),
//     delay(2000)
// ]).then(data => console.log(data))
//
// Promise.race ([
//     delay(1000),
//     delay(500),
//     delay(2000)
// ]).then(data => console.log(data))




