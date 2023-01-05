let years = prompt('How old are you?');
let city = prompt('Where do you live? (city)');
let user = prompt('What`s your name?');
let sport = prompt('What is you favorite sport?')

if (years == null) {
    yearsUser = 'unknown'
} else {
    yearsUser = years
}
if (user == null) {
    userName = 'unknown user'
} else {
    userName = user
}

 if (city == 'Kyiv') {
    cityPhrase = 'You live in the capital of Ukraine';
} else if (city == 'London') {
    cityPhrase = 'You live in the capital of the UK'
} else if (city == 'Washington') {
    'You live in the capital of the US';
} else if (city == 'Kiev') {
    cityPhrase = 'Oh, you are most likely a resident of the territory occupied by Moscow (culturally or physically)';
} else if (city == null ){
    cityPhrase = 'It is a pity that you did not want to write your city';
} else {
    cityPhrase = ('You live in the beatifull city ' + city)
}

if (sport == 'Football') {
    sportsman = 'Cool! Do you want to become like Ronaldo'
} else if (sport == 'American football') {
    sportsman = 'Cool! Do you want to become like be any athlete from an American university'
} else if (sport == 'Basketball') {
    sportsman = 'Cool! Do you want to become like be Mikle Jordan'
} else if (sport == null) {
    sportsman = 'It is a pity that you did not want to write your favorite sport'
} else {
    sportsman = 'It is an interesting sport, it is a pity that no one has heard of it except you!'
}

alert('Hello, ' + userName + '.' + ' Your age is ' + yearsUser + '\n'+ cityPhrase  +'.'
 + '\n' + sportsman);