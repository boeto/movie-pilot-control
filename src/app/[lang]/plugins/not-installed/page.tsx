import Link from 'next/link';

export default function NotInstalledPage() {
  return (
    <>
      <p className="text-gray-500">Hello NotInstalledPage</p>;
      <br />
      <Link href="/plugins/id/plugin-2" className="text-gray-500">
        <span className="text-gray-500"> --plugin-2</span>
      </Link>
      <Link href="/plugins/id/plugin-3" className="text-gray-500">
        <span className="text-gray-500"> --plugin-3</span>
      </Link>
    </>
  );
}
