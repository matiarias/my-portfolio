import Document, { Head, Html, Main, NextScript } from "next/document";
import type { DocumentContext, DocumentInitialProps } from "next/document";

interface PortfolioDocumentProps extends DocumentInitialProps {
  locale: string;
}

export default class PortfolioDocument extends Document<PortfolioDocumentProps> {
  static async getInitialProps(context: DocumentContext): Promise<PortfolioDocumentProps> {
    const initialProps = await Document.getInitialProps(context);

    return {
      ...initialProps,
      locale: context.locale === "es" ? "es" : "en",
    };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
