import Head from 'next/head';
import { Search } from '../components/Search';
import Image from 'next/image';
import { usePosts } from '../api/queries/posts';
import { classNames } from '../utils';

const categories = [
  {
    id: 1,
    name: 'Exchanges',
    img: '/images/exchange.svg',
    bg: 'bg-brandBlue-100'
  },
  { id: 2, name: 'Games', img: '/images/games.svg', bg: 'bg-text-200' },
  {
    id: 3,
    name: 'Marketplaces',
    img: '/images/marketplace.svg',
    bg: 'bg-[#E2F9F3]'
  },
  { id: 4, name: 'Defi', img: '/images/defi.svg', bg: 'bg-[#FFF3EC]' }
];

const Home = (): JSX.Element => {
  const { data } = usePosts();
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Search />
      <h3 className="mb-3">Recent Experiences</h3>

      <div className="mb-4">
        {data &&
          data.map((item, index) => (
            <div className="card" key={index}>
              {index === 0 ? (
                <div className="overflow-hidden rounded-xl w-[100px] h-[100px]">
                  <Image
                    src="/images/logo.svg"
                    width={120}
                    height={120}
                    alt="logo"
                  />
                </div>
              ) : (
                <div className="overflow-hidden rounded-xl w-[100px] h-[100px]">
                  <Image
                    src="/images/docu.svg"
                    width={120}
                    height={120}
                    alt="logo"
                  />
                </div>
              )}
              <div className="my-2 ml-4">
                <h3>{item.title.substring(0, 13)}</h3>
                <p className="mb-2">{item.body.substring(0, 13)}</p>
                <a href="#">{item.id}</a>
              </div>
              <div className="ml-auto flex items-center">
                <Image
                  src="/images/bracket-right.svg"
                  width={20}
                  height={20}
                  alt="logo"
                />
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-between mb-4">
        <h3 className="mb-2">Popular Categories</h3>
        <div className="flex items-center">
          <h3 className="!text-accentPurple mr-1">See All </h3>
          <Image
            src="/images/bracket-purple.svg"
            width={16}
            height={16}
            alt="logo"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        {categories.map((item, index) => (
          <div
            key={index}
            className={classNames(
              'card p-4 flex-col justify-start w-[48%]',
              item.bg
            )}
          >
            <div>
              <Image src={item.img} width={50} height={50} alt="logo" />
            </div>
            <div className="flex justify-between mt-4">
              <h3 className="!text-text-500 !text-[18px]">{item.name}</h3>
              <Image
                src="/images/bracket-right.svg"
                width={10}
                height={10}
                alt="logo"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// All pages are protected by default -> App.tsx
//Home.requireAuth = false;

export default Home;
