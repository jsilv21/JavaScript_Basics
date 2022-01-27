//From codeCademy's Luhn Algorithm Credit Card Checker project:

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4] //f
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9] //t
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3] //f
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3] //f
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3] //t

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

//my functions:

//Validating the card - returns true or false.
const validateCred = (array) => {
    //use Luhn algorithm to check validity of credit card number
    //https://en.wikipedia.org/wiki/Luhn_algorithm
    let sum = 0; //for final sum
    for (let i = (array.length)-1; i >= 0; i--){ //iterate backwards thru array
        let currentDigit = array[i];
        if (array.length % 2 ==0){ //for arrays of even length
            if ((i+2) % 2 == 0){ //check even number.
                if((currentDigit *=2) > 9){ // check if it's over 9 (then you have to subtract 9)
                    currentDigit -= 9;
                }
            }
            sum += currentDigit; //sum the digits
        }
        else { //for odd length arrays
            if ((i+1) % 2 == 0){ //check even number.
                if((currentDigit *=2) > 9){ // check if it's over 9 (then you have to subtract 9)
                    currentDigit -= 9;
                }
            }
            sum += currentDigit; //sum the digits
        }
    }
    return (sum%10) === 0;
}

//finding invalids and returning that array
const findInvalidCards = (array) => {
    
    let invalids = [];
    array.forEach((item)=> { 
        if (validateCred(item)===false){ //for each item, callback to orig function
            invalids.push(item);
        }
    });
    return invalids;
}

const idInvalidCardCompanies = (invalids) => {
    //define CC first digit keys for companies
    companies = {
        3 : 'Amex',
        4 : 'Visa',
        5 : 'Mastercard',
        6 : 'Discover'
    }
    let badCos = []; //array to fill results
    //check each array[0] item against companies
    const checkFirst = (item) =>{
        if ((validateCred(item)===false) && (item[0] in companies)){ //callback to other validation to check for false number first
            badCos.push(companies[item[0]]); // add the value from key pairing
        }
    }
    //check them all against the badcos list
    invalids.forEach(checkFirst);

    //remove duplicates. Maybe this could be done with a filter or map?
    let uniques = [];
    badCos.forEach((co) => {
        if (!uniques.includes(co)){
            uniques.push(co);
        }
    });
    return uniques;
}

//checking it works properly
console.log(`Valid 3 is: ${validateCred(valid3)}`);
console.log(`Invalid 1 is: ${validateCred(invalid1)}`);
console.log(`Mystery 1 is: ${validateCred(mystery1)}`);

//batch checking an array of cards for falses
console.log(`Finding invalid cards: \n`);
console.log(findInvalidCards(batch));

//validating which types of cards were incorrect
console.log(`The companies that provided invalid cards are: \n ${idInvalidCardCompanies(batch)}`); //returns unique listing of improper credit cards

