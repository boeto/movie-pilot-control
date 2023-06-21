/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
} from '@/components/flowbite-react';
import type { FC } from 'react';
import { HiLockOpen } from 'react-icons/hi';
import Image from 'next/image';
import { CardSizeName, Cards, Logo } from '@/components';

const ProfileLockPage: FC = function () {
  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <div className="my-8 flex items-center gap-x-1 lg:my-0">
        <Logo></Logo>
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Flowbite
        </span>
      </div>
      <Cards
        size={CardSizeName.LARGE}
        className="w-full md:max-w-[640px] md:[&>*]:w-full md:[&>*]:p-16"
      >
        <div className="flex items-center gap-x-4">
          <Image
            width={36}
            height={36}
            alt=""
            src="/images/users/bonnie-green.png"
            className="h-9 rounded-full"
          />
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            Bonnie Green
          </span>
        </div>
        <p className="mb-3 text-gray-500 dark:text-gray-300">
          Better to be safe than sorry.
        </p>
        <form>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Your password</Label>
            <TextInput
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="mb-6 flex items-center gap-x-3">
            <Checkbox id="acceptTerms" name="acceptTerms" />
            <Label htmlFor="acceptTerms">
              I accept the&nbsp;
              <a href="#" className="text-primary-700 dark:text-primary-300">
                Terms and Conditions
              </a>
            </Label>
          </div>
          <div>
            <Button type="submit" className="w-full lg:w-auto" color="primary">
              <HiLockOpen className="mr-2 text-xl" />
              Unlock
            </Button>
          </div>
        </form>
      </Cards>
    </div>
  );
};

export default ProfileLockPage;
