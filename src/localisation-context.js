import { createContext, useContext, useState } from "react";

const LocalisationContext = createContext({
  language: "english",
  setLanguage: () => {}
});

const useLocalisation = () => useContext(LocalisationContext);

const LocalisationProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  return (
    <LocalisationContext.Provider
      value={{
        language,
        setLanguage
      }}
    >
      {children}
    </LocalisationContext.Provider>
  );
};

export { useLocalisation, LocalisationProvider };
