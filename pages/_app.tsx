// renders all the pages 
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('Hello from _app.tsx')
  return <Component {...pageProps} />
}

export default MyApp

