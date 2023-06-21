import { ShowCounter, Counter2, LocaleSwitcher } from '@/components';
import { Button } from '@/components/flowbite-react';
import { Locale, getDictionary } from '@/utils';

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <div className="text-center">
        <p>process.env.NODE_ENV:{process.env.NODE_ENV}</p>
        <LocaleSwitcher />
        <p>
          Current locale: <span className="text-yellow-500">{lang}</span>
        </p>
        <p>
          This text is rendered on the server:{' '}
          <span className="text-green-500">
            {dictionary['server-component'].welcome}
          </span>
        </p>
        <ShowCounter dictionary={dictionary.counter} />
        <Counter2 />
      </div>
      <Button color="primary">Test Button</Button>
    </>
  );
}
