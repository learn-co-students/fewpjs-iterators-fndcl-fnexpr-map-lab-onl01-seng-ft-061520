const tutorials = [
    'what does the this keyword mean?',
    'What is the Contutorialuctor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

const titleCased = () =>
    //Sperate each words
    tutorials.map(tutorial =>
        //get each letter in the words.. and map over each letter in the word
        tutorial.split(" ").map(
            //Capilazie the First letter in those words and Slice each word from the 1st letter in that word
            word => word[0].toUpperCase() + word.slice(1)
        ).join(' ') // The Join it all back together 
    )

// const titleCased = (input) => {
//     return tutorials.map( line => {
//         let tokens = line.split(' ')
//         let capitalizedTokens =
//         tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
//         let response = capitalizedTokens.join(' ')
//         return response
//     })
// }