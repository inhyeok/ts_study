class Hello {
  constructor(public word: string) {}
  world() {
    return "<h1>"+ this.word + "</h1>";
  }
}

var hello = new Hello("world!!!");

document.body.innerHTML = hello.world();
