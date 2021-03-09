/// <reference types="../CTAutocomplete" />
/// <reference types="./depTypes" />
/// <reference lib="es2015" />

import Grid from "./grid";

const g = new Grid(-10, 10, -10, 10);
register("renderOverlay", () => {
  if (g.gui.isOpen()) {
    g.draw();
  }
});

register("command", () => {
  g.open();
}).setName("graph");