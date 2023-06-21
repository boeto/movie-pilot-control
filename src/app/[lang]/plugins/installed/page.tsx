import Link from 'next/link';

export default function InstalledPage() {
  return (
    <>
      <a className="text-gray-500">Hello InstalledPage</a>
      <br />
      <Link href="/plugins/id/plugin-1">
        <span className="text-gray-500"> --plugin-1</span>
      </Link>
    </>
  );
}
