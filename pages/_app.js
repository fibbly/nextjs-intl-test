import "../styles/globals.css";
import { NextProvider } from "next-intl";

function MyApp({ Component, pageProps }) {
	return (
		<NextProvider messages={pageProps.messages}>
			<Component {...pageProps} />
		</NextProvider>
	);
}

export default MyApp;
