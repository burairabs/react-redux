export const isValidNumber = (number) => {
    let error = null;
    if(!number && number === '') {
        error = "Please Enter a number"
    } else if(number.length < 10){
        error = "Please Enter a valid 10 digit number"
    } else if(number.length > 10) {
        error = "Please Enter a valid 10 digit number"
    }

    return error
}