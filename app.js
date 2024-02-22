ruleset = [{ limit: 50 }, { no: 3, word: "Fizz" }, { no: 5, word: "Buzz" }];

function fizzBuzz(ruleset) {
  for (let i = 1; i <= ruleset[0].limit; i++) {
    let output = "";

    for (let j = 1; j < ruleset.length; j++) {
      if (i % ruleset[j].no === 0) {
        output += ruleset[j].word;
      }
    }
    if (output === "") {
      output = i;
    }
    console.log(output);
  }
}
fizzBuzz(ruleset);
