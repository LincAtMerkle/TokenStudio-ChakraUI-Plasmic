import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </PlasmicRootProvider>
  );
}

export default MyApp;
