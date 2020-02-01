//ask user age
let age = prompt('Your age');
//show age variable in console
console.log(age);

//check if user old enaugh to pass
if(typeof age !== 'string'){
    if (age < 16){
        console.log('Rejected! You are too yang! Grow up!');
    } else {
        console.log('Wellcome!');
    } 
} else{
    console.log(`Wrong type of data. Entered age is ${typeof age}`);
}

