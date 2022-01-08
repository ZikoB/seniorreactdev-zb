import { FC } from 'react';
import Image from 'next/image';
import { MenuDropdown } from './Menu';

export const AppBar: FC = () => {
  return (
    <div className="h-[70px] flex justify-between px-5 bg-text-100 mb-4 border-b-[1px] border-text-200 max-w-[1200px]">
      <Image
        src="/images/arrow-left.svg"
        width={24}
        height={24}
        alt="settings"
      />
      <div className="flex items-center justify-end grow ml-1">
        <Image src="/images/frame.svg" width={24} height={24} alt="settings" />
      </div>
      <div className="grow flex items-center justify-center mr-4 ml-6">
        <MenuDropdown />
      </div>
      <div className="flex items-center grow">
        <Image
          src="/images/notification.svg"
          width={28}
          height={28}
          alt="settings"
        />
      </div>
      <Image src="/images/settings.svg" width={28} height={28} alt="settings" />
    </div>
  );
};
