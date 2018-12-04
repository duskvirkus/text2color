class Button {
  constructor(name, parent) {
    this.button = createButton(name);
    this.button.addClass('btn');
    this.button.addClass('btn-light');
    this.button.addClass('m-1');
    //this.button.mousePressed(this.act);
    this.button.parent(parent);
  }

  // act() {
  //   this.action();
  // }

  setAction(action) {
    this.button.mousePressed(action);
  }
}
