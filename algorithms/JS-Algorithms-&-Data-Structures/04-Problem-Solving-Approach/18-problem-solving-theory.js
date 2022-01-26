// https://cs.slides.com/colt_steele/problem-solving-patterns#/24


// ======= IMPLEMENTATION #1 =======
function charCount(str) {

    // make object to return at end
    let result = {};

    // loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // console.log('char', char);

        // if the char is a number/letter AND is a key in object, and one to count
        if (result[char] > 0) {
            // console.log('result[char]', result[char]);
            result[char]++;
        }
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        else {
            result[char] = 1;
        };
    }
    // if character is something else (space, period, etc.) don't do anything
    // return object at end
    return result;
}

// console.log(charCount('hello'));
// console.log(charCount('Ukraine'));
// console.log(charCount('Programmer develop programs'));



// ======= IMPLEMENTATION #2 =======
function charCount2(str) {
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++
            } else {
                obj[char] = 1;
            };
        }
    }
    return obj;
}

// console.log(charCount2('hello'));
// console.log(charCount2('Business'));


// ======= IMPLEMENTATION #3 - Performance =======
function charCount3(str) {
    let obj = {};
    for(let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++
            } else {
                obj[char] = 1;
            };
        }
    }
    return obj;
}

// console.log(" Performance 3 --------------------------");
// console.log(charCount3("Eldorado's"));
// console.log(charCount3("Barbeque"));



// ======= IMPLEMENTATION #4 - Performance =======
function charCount4(str) {
    let obj = {};
    for(let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

// console.log(" Performance 4 --------------------------");
// console.log(charCount4("Eldorado's"));
// console.log(charCount4("Barbeque"));


// ======= IMPLEMENTATION #5 - Performance =======
function charCount5(str) {
    let obj = {};
    for(let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

// console.log(" Performance 5 --------------------------");
// console.log(charCount5("Hello WORLD hi!!!"));


function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}

