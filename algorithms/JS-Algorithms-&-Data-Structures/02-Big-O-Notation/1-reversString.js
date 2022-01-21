// ======= IMPLEMENTATION #1 =======
function reverse1(s) {
    let o = '';
    for (let i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}

console.log(reverse1('staff'));

// ======= IMPLEMENTATION #2 =======
function reverse2(s) {
    let o = [];
    for (let i = s.length - 1, j = 0; i >= 0; i--, j++)
        o[j] = s[i];
    return o.join('');
}

console.log(reverse2('zoom'));


// ======= IMPLEMENTATION #3 =======
function reverse3(s) {
    let o = [];
    for (let i = 0, len = s.length; i <= len; i++)
        o.push(s.charAt(len - i));
    return o.join('');
}

console.log(reverse3('team'));

// ======= IMPLEMENTATION #4 =======
function reverse4(s) {
    return s.split('').reverse().join('');
}

console.log(reverse4('bundle'))

// ======= IMPLEMENTATION #5 =======
function reverse5(s) {
    let i = s.length,
        o = '';
    while (i > 0) {
        o += s.substring(i - 1, i);
        i--;
    }
    return o;
}

console.log(reverse5('implementation'));

// ======= IMPLEMENTATION #6 =======
function reverse6(s) {
    let o = '';
    for (let i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
    return o;
}

console.log(reverse6('traffic'));

// ======= IMPLEMENTATION #7 =======
function reverse7(s) {
    return (s === '') ? '' : reverse7(s.substr(1)) + s.charAt(0);
}

console.log(reverse7('Ukraine'));

// ======= IMPLEMENTATION #8 =======
function reverse8(s) {
    function rev(s, len, o) {
        return (len === 0) ? o : rev(s, --len, (o += s[len]));
    };
    return rev(s, s.length, '');
}

console.log(reverse8('Butscha'));

// ======= IMPLEMENTATION #9 =======
function reverse9(s) {
    s = s.split('');
    let len = s.length,
        halfIndex = Math.floor(len / 2) - 1,
        tmp;


    for (let i = 0; i <= halfIndex; i++) {
        tmp = s[len - i - 1];
        s[len - i - 1] = s[i];
        s[i] = tmp;
    }
    return s.join('');
}

console.log(reverse9('BusineSS'));

// ======= IMPLEMENTATION #10 =======
function reverse10(s) {
    if (s.length < 2)
        return s;
    let halfIndex = Math.ceil(s.length / 2);
    return reverse10(s.substr(halfIndex)) +
        reverse10(s.substr(0, halfIndex));
}

console.log(reverse10('RoBoCoP'));

// ======= IMPLEMENTATION #11 =======
const reverser  = function(str){
    let string = str.split('');

    for(let i=0; i<string.length; i++){
        debugger;
        string.splice(i,0,string.pop());

    }
    console.log(string.join())
}
reverser('gaga');



