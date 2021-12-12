import Document, { Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react"
import { theme } from '../config/chakra/theme'

export default class MyDocument extends Document {
  render() {

    return (
      <Html lang="en">
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}