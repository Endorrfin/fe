// ============ ASYNC / AWAIT (ES7) ============

/*
* Async / await - это новый способ написания асинхронного кода.
* */

// ------- Example I -------

/*
* Using Promise
* */
// const fetchData = () => Promise.resolve({
//     data: ['Jack', 'Max', 'Leo', 'Mark', 'Leonid', 'Artur', 'Julia']
// })

// const getNameDate = () => {
//     fetchData()
//         .then(data => {
//             console.log(data);
//             return 'done';
//         })
// }

/*
* Using async / await syntax
* */

// const getNamesDate2 = async () => {
//     console.log(await fetchData());
//     return 'done';
// }


// getNameDate();
// getNamesDate2();
// console.log(getNamesDate2());


// ------- Example II -------
/*
* Отлавливание ошибок
* */

const fetchData = () => Promise.reject('some error...');
const getNamesData = async () => {
    try {
        console.log(await fetchData());
    } catch (error) {
        console.log(error);
    }
}

// getNamesData();



// ------- Example III -------
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
    { title: 'Post Three', body: 'This is post three' },
    { title: 'Post Four', body: 'This is post four' },
    { title: 'Post Five', body: 'This is post five' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}


async function init() {
    await createPost({ title: 'Post Six', body: 'This is post six' });

    getPosts();
}

// init();



// ------- Example IV Async / Await / Fetch -------
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
};

// fetchUsers();
























