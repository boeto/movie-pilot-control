import { FC } from 'react';
import Link from 'next/link';

const PluginsNotInstallPage: FC = () => {
  return (
    <>
      <p className="text-gray-500">Hello PluginsNotInstallPage!</p>;
      <br />
      <Link href="/plugins/id/b" className="text-gray-500">
        <span className="text-gray-500"> --plugin-b</span>
      </Link>
    </>
  );
};
export default PluginsNotInstallPage;
