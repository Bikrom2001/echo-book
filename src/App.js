import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={1500} theme="dark" />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
