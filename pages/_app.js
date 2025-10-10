// pages/_app.js
import "../styles/style.css";
import "../styles/vue1.css";
import "../styles/vue2.css";
import "../styles/vue3.css";
import "../styles/vue4.css";
import "../styles/cardSwap.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
