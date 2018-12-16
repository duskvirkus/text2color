"use strict";
class Button {
  constructor(name, creator, description, parent) {
    this.button = createButton(name);
    this.button.addClass('btn');
    this.button.addClass('btn-light');
    this.button.addClass('m-1');
    this.button.attribute('data-toggle', 'tooltip');
    this.button.attribute('data-html', 'true');
    this.button.attribute('title', `${description}<br><small>Created by ${creator}</small`);
    this.button.parent(parent);
  }

  setAction(action) {
    this.button.mousePressed(action);
  }
}
