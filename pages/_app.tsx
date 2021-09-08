import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import UserPreferences from 'lib/providers/UserPreferences';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserPreferences>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserPreferences>
  );
}
export default MyApp;
