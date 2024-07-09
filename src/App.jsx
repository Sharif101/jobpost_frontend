import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { ContextProvider } from "./contexts/provider";

function App() {
  return (
    <>
      <div>
        <ContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
