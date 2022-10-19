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
                    <link href="http://fonts.cdnfonts.com/css/visby" rel="stylesheet"/>
					<link href="http://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet"/>
		
				
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
