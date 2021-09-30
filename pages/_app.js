import "../styles/globals.css";
import Navbar from "../components/Navbar";
import NextNprogress from "nextjs-progressbar";


function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNprogress
				color="#29D"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			<Navbar title="News Flash" />
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
