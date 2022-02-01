console.log("HEllo world");

// Select items

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const valid=false;


    fname.addEventListener('blur', () => {
    let regex = /^[0-9a-zA-Z][a-zA-Z]{2,10}$/;
    let str = fname.value;

    if (regex.test(str)) {
        console.log('Name is correct')
        valid=true;
    }
    else {
        console.log('NO match')
        valid=false;
    }
})

    lname.addEventListener('blur', () => {
    let regex = /^[0-9a-zA-Z][a-zA-Z]{2,10}$/;
    let str = lname.value;

    if (regex.test(str)) {
        console.log('lastName is correct')
    }
    else {
        console.log('last NO match')
    }
})

    email.addEventListener('blur', () => {
    let regex = /^([_\-0-9a-zA-Z]+)@([_\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}/;
    let str = email.value;

    if (regex.test(str)) {
        console.log('Email is correct')
    }
    else {
        console.log('Email NOt match')
    }
})



submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(Sfname==valid){
        alert("you are right")
    }
})