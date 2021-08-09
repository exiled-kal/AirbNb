import "tailwindcss/tailwind.css";
import "../styles/global.css";
import ProgessBar from "@badrap/bar-of-progress";

const progress = new ProgessBar({
  size:4,
  color: "#FE"
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
