import { Provider } from "react-redux";
import store from "./redux/store";
import RenderRoutes from "./routes/RenderRoutes";

function App() {

  return (
    <Provider store={store}>
      <RenderRoutes />
    </Provider>
  );
}

export default App;
