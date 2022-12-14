import { createContext, useState } from "react";
import { translations } from "../Translations/Translations";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const LanguajeContext = createContext();
const initialLanguaje = "esp";

const LanguajeProvider = ({ children }) => {
  const [languaje, setLanguaje] = useLocalStorage(
    "languaje",
    initialLanguaje ? initialLanguaje : `esp`
  );
  const [text, setText] = useState(translations[languaje]);

  const handleLanguage = (value, e) => {
    if (value === "esp") {
      setLanguaje("esp");
      setText(translations.esp);
    } else {
      setLanguaje("eng");
      setText(translations.eng);
    }
  };

  const data = { text, handleLanguage, languaje };
  
  return (
    <LanguajeContext.Provider value={data}>{children}</LanguajeContext.Provider>
  );
};
export { LanguajeProvider };
export default LanguajeContext;
