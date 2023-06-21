import Link from 'next/link';

export default function AllPluginPage() {
  return (
    <>
      <p className="text-gray-500">Hello AllPlugin</p>;
      <br />
      <Link href="/plugins/id/plugin-1">
        <span className="text-gray-500"> --plugin-1</span>
      </Link>
      <Link href="/plugins/id/plugin-2" className="text-gray-500">
        <span className="text-gray-500"> --plugin-2</span>
      </Link>
      <Link href="/plugins/id/plugin-3" className="text-gray-500">
        <span className="text-gray-500"> --plugin-3</span>
      </Link>
    </>
  );
}
