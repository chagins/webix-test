import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { IAppLayoutProps } from '../lib';

export const AppLayout = ({ className }: IAppLayoutProps) => {
  return (
    <div className={className}>
      <Navbar className="navbar" />
      <main className="content-page">
        <div className="page-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
