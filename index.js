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

const titleCased = () => {
  let result = [];
  tutorials.map(tutorial => {
    let words = tutorial.split(' ');
    let modWords = []
    for(let word of words){
      word = word.split('');
      word[0] = word[0].toUpperCase();
      word = word.join('');
      console.log(word);
      modWords << word;
    }
    modWords = modWords.join(' ');
    result.push(modWords);
  });
  console.log(result);
}
