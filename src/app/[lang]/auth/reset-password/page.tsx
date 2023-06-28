/* eslint-disable jsx-a11y/anchor-is-valid */
import { Checkbox, Label, TextInput } from '@/components/flowbite-react';
import type { FC } from 'react';
import Image from 'next/image';
import { Card, Logo, Button } from '@/components';

const ResetPasswordPage: FC = function () {
  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <div className="my-6 flex items-center gap-x-1 lg:my-0">
        <Logo></Logo>
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Flowbite
        </span>
      </div>
      <Card
        horizontal
        imgSrc="/images/authentication/reset-password.jpg"
        imgAlt=""
        className="w-full md:max-w-5xl [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Reset your password
        </h1>
        <form>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="email">Your email</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="newPassword">New password</Label>
            <TextInput
              id="newPassword"
              name="newPassword"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
            <TextInput
              id="confirmNewPassword"
              name="confirmNewPassword"
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
              Reset password
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;
