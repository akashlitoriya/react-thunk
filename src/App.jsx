import { React } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "@store/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="text-4xl text-blue-500">Store configured</div>
    </Provider>
  );
}

export default App;
