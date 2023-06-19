import { Counter, Counter2, LocaleSwitcher, User } from '@/components';
import { Button, CustomFlowbiteTheme } from '@/components/flowbite-react';
import { Locale, getDictionary } from '@/utils';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Button color="primary">Test Button</Button>

      <div className="text-center">
        {/* <User></User> */}
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
        <Counter dictionary={dictionary.counter} />
        <Counter2 />
      </div>
    </>
  );
}
