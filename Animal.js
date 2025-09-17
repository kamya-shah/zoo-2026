class Animal {
  // special function that takes incoming parameters
  constructor(breed = "human", name = "Nobody", lang = "silence") {
    // personal properties
    this.breed = breed;
    this.name = name;
    this.language = lang;
  }

  // personal function
  talk() {
    print(this.language);
  }

  expressYourself() {
    // String concatenation example
    print("Hello, I'm " + this.breed + ", I say " + this.language);
  }
}
