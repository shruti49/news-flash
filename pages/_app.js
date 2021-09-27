import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar title="News Flash" />
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
