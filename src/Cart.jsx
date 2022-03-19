import { useCart } from "./cart-context";
import { useLocalisation } from "./localisation-context";

function Cart() {
  const { language } = useLocalisation();
  const languageLib = {
    english: "Items in cart",
    kannada: "ನಿಮ್ಮ ಕಾರ್ಟ್ ನಲ್ಲಿರುವ ಐಟಂಗಳು"
  };
  const { items, cartLogger } = useCart();
  return (
    <h1 onClick={cartLogger}>
      {languageLib[language]} {items}
    </h1>
  );
}

export default Cart;
