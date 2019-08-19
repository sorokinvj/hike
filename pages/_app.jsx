import App, { Container } from 'next/app'
import React from 'react'
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider'
import Footer from '../components/footer'
import GeneralHead from '../components/GeneralHead'
import GlobalStyle from '../components/globals'
import Navbar from '../components/navbar'
import MobileDetect from 'mobile-detect'
import { theme } from '../components/globals'

// import cookies from 'next-cookies';
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    const { req } = ctx
    const md = new MobileDetect(req ? req.headers['user-agent'] : '')
    const phone = md.phone()
    const tablet = md.tablet()

    // Компонент получает свои pageProps с сервера
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // возвращаем pageProps с сервера и значение языка
    return {
      pageProps,
      phone,
      tablet,
    }
  }

  render() {
    const {
      Component, pageProps, phone, tablet,
    } = this.props
    
    return (
      <Container>
        <BootstrapProvider reset theme={theme}>
          <GlobalStyle />
          {phone !== null && <Navbar />}
          <GeneralHead />
          <Component {...pageProps} phone={phone} tablet={tablet} />
          <Footer />
        </BootstrapProvider>
      </Container>
    )
  }
}

export default MyApp
