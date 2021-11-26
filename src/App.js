import { useContext } from "react";
import About from "./Components/about/About";
import Contacter from "./Components/contact/Contacter";
import Introduction from "./Components/Intro/Introduction";
import ProductListe from "./Components/productlist/ProductListe";
import Togg from "./Components/toggle/Togg";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}>
    <Togg/>
    <Introduction/>
    <About/>
    <ProductListe/>
    <Contacter/>
  </div>;
}

export default App;
