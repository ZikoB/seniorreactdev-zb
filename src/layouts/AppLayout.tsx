import { FC } from 'react';
import { AppBar } from '../components/AppBar';
import { Main } from '../components/Main';

export const AppLayout: FC = ({ children }) => (
  <div className="w-full">
    <AppBar />
    <Main>{children}</Main>
  </div>
);
