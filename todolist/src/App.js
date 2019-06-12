import React from "react";
import Tasks from "./Tasks";
import Filter from "./Filter"
import { Provider } from "react-redux";
import "./App.css";
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

// setInterval(
//   () =>
//     store.dispatch({
//       type: "UPDATE_FILTER",
//       filter:
//         Math.random() < 0.3
//           ? "SHOW_ALL"
//           : Math.random() < 0.6
//           ? "SHOW_DONE"
//           : "SHOW_TODO"
//     }),
//   1000
// );

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Filter />
        <Tasks />
      </Provider>
    </div>
  );
}

export default App;
