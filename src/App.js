import { Provider } from "react-redux";
import Layout from "./Components/Layout/Layout";
import { store } from "./Redux/Store";
function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
