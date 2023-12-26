import Register from "./components/Register";
// import ipConfig from "./ipConfig.json";
// import { SnackbarProvider } from "notistack";

export const config = {
  endpoint: "http://192.168.68.129:8082/api/v1",
};

function App() {
  return (
    <div className="App">
          <Register />
    </div>
  );
}

export default App;
