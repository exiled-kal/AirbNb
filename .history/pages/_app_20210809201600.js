import "tailwindcss/tailwind.css";
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 3,
  color: "#FE595E",
  className: "z-50",
  delay: 70,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;


// pk.eyJ1IjoidHNlcmluZ2thbGRlbiIsImEiOiJja29oankwdjIwbXR0MndveW14OWM4cm85In0.hPGLjvIrABw1hcEmwD4jFQ

