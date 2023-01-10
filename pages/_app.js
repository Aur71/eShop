import '../styles/globals.scss';
// COMPONENETS
import Layout from '../layout/Layout';
import { AppProvider } from '../context/context';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}
