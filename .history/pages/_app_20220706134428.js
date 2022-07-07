import '../scss/global.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { SessionProvider } from "next-auth/react"
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {

  return<SessionProvider>
            <Component {...pageProps} />
        </SessionProvider> 

}

export default MyApp
