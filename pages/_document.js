import Document, { Html, Head, Main, NextScript } from "next/document";
import background from "../assets/images/thors-cousin-fade-bg-grey.png";

// import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          /> */}
        </Head>
        <body style={{ backgroundImage: `url(${background})` }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
