import '../styles/globals.css';
import { NextPage } from 'next';
import { AppLayout } from '../layouts/AppLayout';
import { PublicLayout } from '../layouts/PublicLayout';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
};

function MyApp({
  Component,
  pageProps
}: {
  Component: NextApplicationPage;
  pageProps: any;
}) {
  const { requireAuth = true } = Component;
  return (
    <QueryClientProvider client={queryClient}>
      {requireAuth ? (
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      ) : (
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      )}
    </QueryClientProvider>
  );
}

export default MyApp;
