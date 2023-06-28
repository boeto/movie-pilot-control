import { ShowCounter, Counter2, LocaleSwitcher } from '@/components';
import { Button } from '@/components';
// import { Button } from '@/components/flowbite-react';
import { Lang, getDictionary } from '@/utils';

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-3/5 mt-10">
        <p className="text-gray-900 dark:text-gray-100">
          process.env.NODE_ENV:{process.env.NODE_ENV}
        </p>
        <LocaleSwitcher />
        <p className="text-gray-900 dark:text-gray-100">
          Current locale: <span className="text-yellow-500">{lang}</span>
        </p>
        <p className="text-gray-900 dark:text-gray-100">
          This text is rendered on the server:{' '}
          <span className="text-green-500">
            {dictionary['server-component'].welcome}
          </span>
        </p>
        <ShowCounter />
        <Counter2 />
        <Button color="primary">Test Button</Button>
      </div>
    </>
  );
}
