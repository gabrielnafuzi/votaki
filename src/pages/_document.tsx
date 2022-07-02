import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

import withTwindDocument from '@twind/next/document'

import twindConfig from '@/twind.config'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <body>
            <Main />

            <NextScript />
          </body>
        </Head>
      </Html>
    )
  }
}

export default withTwindDocument(twindConfig, MyDocument)
