import { FC } from 'react';
import Link from 'next/link';

const PluginsAllPage: FC = () => {
  return (
    <>
      <p className="text-gray-500">Hello AllPlugin</p>;
      <br />
      <Link href="/plugins/id/a">
        <span className="text-gray-500"> --plugin-a</span>
      </Link>
      <Link href="/plugins/id/b" className="text-gray-500">
        <span className="text-gray-500"> --plugin-a</span>
      </Link>
    </>
  );
};

export default PluginsAllPage;
