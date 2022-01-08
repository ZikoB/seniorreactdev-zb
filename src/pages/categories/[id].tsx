import Head from 'next/head';
import { useRouter } from 'next/router';

const Category = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Category</title>
      </Head>
      <div className="">
        <p>{router.pathname}</p>
      </div>
    </>
  );
};

export default Category;
