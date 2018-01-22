import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

// import TodoList from "./components/TodoList";
// import TodoListModel from "./models/TodoListModel";
// import TodoModel from "./models/TodoModel";

import Character from "./components/Character";
import CharacterModel from "./models/CharacterModel";

const store = new CharacterModel();

render(
  <div>
    <DevTools />
    <Character store={store} />
  </div>,
  document.getElementById("root")
);

// store.addTodo("Get Coffee");
// store.addTodo("Write simpler code");
// store.todos[0].finished = true;

// setTimeout(() => {
//   store.addTodo("Get a cookie as well");
// }, 2000);

// playing around in the console
window.store = store;
