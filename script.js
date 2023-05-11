let inputv = document.getElementsByTagName("input")[0];
let p = document.getElementsByTagName("p")[0];

let showhide = () => {
    if (inputv.type === "password") {
        inputv.type = "text";
        p.innerHTML = "Hide"
    }
    else {
        inputv.type = "password";
        p.innerHTML = "Show"
    }
}

let alpha = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let num = `1234567890`;
let char = `!@$%^&*()_+*-/=~;'"`;

let Easy = () => {
    let sum = "";
    let i, k;
    for (i = 0; i < 8; i++) {
        let a = Math.random() * 52;
        a = Number.parseInt(a)
        for (k in alpha) {
            if (k == a) {
                sum = sum + alpha[k]
                // console.log(alpha[k])
            }
        }
    }
    inputv.value = sum;
}
let Medium = () => {
    let sum = "";
    let i, j, k;
    for (i = 0; i < 4; i++) {
        let a = Math.random() * 52;
        let b = Math.random() * 10;
        a = Number.parseInt(a)
        b = Number.parseInt(b)
        for (k in alpha) {
            if (k == a) {
                sum = sum + alpha[k]
                // console.log(alpha[k])
            }
        }
        for (j in num) {
            if (j == b) {
                sum = sum + num[j]
                // console.log(num[j])
            }
        }
    }
    inputv.value = sum;
}
let Hard = () => {
    let sum = "";
    let i, j, k, l;
    for (i = 0; i < 3; i++) {
        let a = Math.random() * 52;
        let b = Math.random() * 10;
        let c = Math.random() * 19;
        a = Number.parseInt(a)
        b = Number.parseInt(b)
        c = Number.parseInt(c)
        for (k in alpha) {
            if (k == a) {
                sum = sum + alpha[k]
                // console.log(alpha[k])
            }
        }
        for (j in num) {
            if (j == b) {
                sum = sum + num[j]
                // console.log(num[j])
            }
        }
        for (l in char) {
            if (l == c) {
                sum = sum + char[l]
                // console.log(num[l])
            }
        }
    }
    inputv.value = sum;

}

