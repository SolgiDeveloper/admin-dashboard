import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./core/i18n";
import { useEffect } from "react";
import {useAppContext} from "./contexts/app/app-context"
function App() {
  const { theme } = useAppContext();
  useEffect(() => {
    const head = document.head;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/css/${theme}.css`;
    head.appendChild(link);
    return () => {
      setTimeout(()=>{
        head.removeChild(link)
      },100)
      
    }
  }, [theme]);
  return <RouterProvider router={router} />;
}

export default App;
