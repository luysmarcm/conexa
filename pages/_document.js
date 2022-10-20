import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="es-ES">
				<Head>
					<meta name="theme-color" content="#191919" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="icon" type="image/png" href="/favicon.ico" />
					<link rel="apple-touch-icon" href="/favicon.ico" />
					<link href="http://fonts.cdnfonts.com/css/visby" rel="stylesheet" />
					<link
						href="http://fonts.cdnfonts.com/css/gilroy-bold"
						rel="stylesheet"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400&display=swap"
						rel="stylesheet"
					/>
					<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet"></link>
					<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
					<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
