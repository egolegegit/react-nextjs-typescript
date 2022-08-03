import type { AppProps } from 'next/app';
import { AuthProvider } from '../state/auth/AuthContext';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // @ts-ignore
  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}

export default MyApp;