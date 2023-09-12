// Break camel case

function solution(string) {
  let capitalLetterArray = [];
  let newWord = "";

  let startpoint = 65;
  const arrayLength = startpoint + (90 - 65);

  for (let i = startpoint; i <= arrayLength; i++) {
    capitalLetterArray.push(i);
  }

  for (let i = 0; i < capitalLetterArray.length; i++) {
    let val = string[i];
    if (val.charCodeAt(0) === capitalLetterArray[i]) {
      newWord += " ";
    } else {
      newWord += val;
    }
  }

  return newWord;
}
solution(`camelCasing`);
