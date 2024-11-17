import { maleFirstNames, femaleFirstNames, lastNames } from "./sources/names";

export class simpleName {
  constructor() {}

  /**
   * a simple name generator that can generate male female or non binary person name
   * @param {("male"|"female"|"non binary")} gender -the gender for which to generate the name
   */
  genRandomFirstName(gender: "male" | "female" | "non binary"): string {
    if (gender === "male") {
      const name =
        maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
      return name;
    }
    if (gender === "female") {
      const name =
        femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
      return name;
    }
    if (gender === "non binary") {
      return Math.random() > 0.5
        ? femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)]
        : maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
    }
    return "";
  }
  
  /**
   * a simple generator that generate simple full name for men and whomen
  */
  genRandomFullName(): string {
    const fullName =
      lastNames[Math.floor(Math.random() * lastNames.length)] +
      " " +
      this.genRandomFirstName("non binary");
    return fullName;
  }
}

export class simpleParagraph{
  
  getRandomWord(words:string[][]):string {
    // Randomly select a sub-array
    const randomSubArray = words[Math.floor(Math.random() * words.length)];
    // Randomly select a word from the chosen sub-array
    return randomSubArray[Math.floor(Math.random() * randomSubArray.length)];
  }
  
  generateRandomParagraph(words:[string[]], sentenceCount = 5) {
    const paragraph = [];
  
    for (let i = 0; i < sentenceCount; i++) {
      const sentenceLength = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 15 words
      const sentence = [];
  
      for (let j = 0; j < sentenceLength; j++) {
        const word = this.getRandomWord(words);
        sentence.push(word);
      }
  
      // Capitalize the first word of the sentence and add a period at the end
      sentence[0] = sentence[0].charAt(0).toUpperCase() + sentence[0].slice(1);
      paragraph.push(sentence.join(" ") + ".");
    }
  
    return paragraph.join(" ");
  }
}