import { FC, useState } from 'react';
import Image from 'next/image';
import { useDebounce } from 'use-debounce';

const Search: FC = () => {
  const [filter, setFilter] = useState(undefined);

  const [value] = useDebounce(filter, 1000);

  return (
    <div className="flex w-full justify-between mb-6">
      <div className="bg-text-100 border-md w-[86%] flex p-2 rounded-md">
        <Image src="/images/mg.svg" width={16} height={16} alt="search" />
        <p className="text-text-300 ml-2">Search experiences</p>
      </div>
      <div className="mx-1 flex items-center">
        <Image src="/images/funnel.svg" width={28} height={28} alt="search" />
      </div>
    </div>
  );
};

export { Search };
