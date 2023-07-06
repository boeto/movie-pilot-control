import { FC } from 'react';
import Link from 'next/link';

const PluginsInstalledPage: FC = () => {
  return (
    <>
      <div className="text-gray-500">Hello PluginsInstalledPage!</div>
      <br />
      <Link href="/plugins/id/a">
        <span className="text-gray-500"> --plugin-a</span>
      </Link>
    </>
  );
};
export default PluginsInstalledPage;
