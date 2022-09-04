import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import { Provider as WagmiProvider } from "wagmi";
import { providers } from "ethers";

import networks from "../utils/networks.json";
import styles from "../styles/Home.module.css";

// Provider that will be used when no wallet is connected (aka no signer)
const provider = providers.getDefaultProvider(
  networks[networks.selectedChain].rpcUrls[0]
);

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>ZK-iKnowMultiplier</title>
        <meta name="title" content="Frontend" />
        <meta name="description" content="Zero Knowledge Frontend" />
        <meta name="theme-color" content="#ea580c" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="#" />
        <meta property="twitter:title" content="Frontend" />
        <meta
          property="twitter:description"
          content="Zero Knowledge Frontend"
        />
        <meta
          property="twitter:image"
          content=""
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="" key="ogurl" />
        <meta
          property="og:image"
          content=""
          key="ogimage"
        />
        <meta property="og:title" content="Frontend" key="ogtitle" />
        <meta
          property="og:description"
          content="Zero Knowledge Frontend"
          key="ogdesc"
        />
      </Head>
      <WagmiProvider autoConnect provider={provider}>
        <div className={styles.backgroundParentColor}>
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </WagmiProvider>
    </>
  );
}
