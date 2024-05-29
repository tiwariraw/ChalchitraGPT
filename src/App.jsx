import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App font-space-grotesk">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
