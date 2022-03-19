import { createContext, useContext, useState } from "react";

const ThemContext = createContext({ theme: true });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemContext.Provider>
  );
};

const useTheme = () => useContext(ThemContext);

export { useTheme, ThemeProvider };
