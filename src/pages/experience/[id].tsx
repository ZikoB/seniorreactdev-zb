import Head from 'next/head';
import { useRouter } from 'next/router';

const Experience = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <div className="">
        <p>{router.pathname}</p>
      </div>
    </>
  );
};

export default Experience;
