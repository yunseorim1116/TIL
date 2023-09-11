class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `✨${this.#message}✨`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = "hello world";
    // console.log(this.#decoratedMessage);
  }
}

const a = new ClassWithPrivateAccessor();
console.log(a.decoratedMessage);
