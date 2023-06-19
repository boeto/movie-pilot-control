import Image from 'next/image';

export function Logo() {
  return (
    <Image
      height={32}
      width={32}
      alt="Logo"
      src="/images/logo.svg"
      className="mr-3 h-12"
    />
  );
}
