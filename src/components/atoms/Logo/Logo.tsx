import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      height={32}
      width={32}
      alt="Logo"
      src="/images/logo.svg"
      className="mr-3 h-8 w-8"
    />
  );
};
export { Logo };
