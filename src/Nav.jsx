import { useTheme } from "./theme-context";
import { useLocalisation } from "./localisation-context";

export default function Nav() {
  const { toggleTheme } = useTheme();
  const { setLanguage } = useLocalisation();

  return (
    <div>
      <nav>
        <button onClick={toggleTheme}>Theme</button>
        <button onClick={() => setLanguage("english")}>English</button>
        <button
          onClick={() => {
            setLanguage("kannada");
          }}
        >
          Kannada
        </button>
      </nav>
    </div>
  );
}
