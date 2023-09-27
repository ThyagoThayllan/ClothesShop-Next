import { AppProps } from "next/app";
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";
import { globalStyles } from "../styles/global";
import store from "../../public/store.png";
import Head from "next/head";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={store} alt="Logo Ignite" />
        <div>
          <strong>Clothes</strong>
          <p>shop</p>
        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
