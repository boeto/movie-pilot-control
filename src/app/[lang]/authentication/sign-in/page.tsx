'use client';
import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
} from '@/components/flowbite-react';
import type { ChangeEvent, FC, FormEvent } from 'react';
import { useState } from 'react';
import * as yup from 'yup';

import { Logo } from '@/components';
import { useSelector, useDispatch, selectUser, userLoginAsync } from '@/store';
import { useRouter } from 'next/navigation';

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
};

function Input(props: Props) {
  const { label, name, value, onChange, error } = props;
  return (
    <div className="mb-6 flex flex-col gap-y-3">
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={name === 'password' ? 'password' : 'text'}
        placeholder={name === 'password' ? '••••••••' : 'Username'}
        color={error ? 'failure' : undefined}
        helperText={
          error
            ? `<><span className="font-medium">error!</span>${error}</>`
            : undefined
        }
        required
      />
    </div>
  );
}

const LoginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const SignInPage: FC = function () {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, isLogin, access_token, error } = useSelector(selectUser);

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    // console.log(
    //   '🚀 ~ file: page.tsx:77 ~ handleInputChange ~ event.target:',
    //   event.target,
    // );
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    console.log('🚀 ~ file: page.tsx:90 ~ handleSubmit ~ formData:', formData);

    event.preventDefault();
    try {
      console.log('🚀 ~ file: page.tsx:before ~ isLoading:', isLoading);
      console.log('🚀 ~ file: page.tsx:before ~ isLogin:', isLogin);
      console.log('🚀 ~ file: page.tsx:before ~ access_token:', access_token);
      await LoginSchema.validate(formData, { abortEarly: false });
      await dispatch(
        userLoginAsync({
          username: formData.username,
          password: formData.password,
        }),
      );

      console.log('🚀 ~ file: page.tsx:after ~ isLoading:', isLoading);
      console.log('🚀 ~ file: page.tsx:after ~ isLogin:', isLogin);
      console.log('🚀 ~ file: page.tsx:after ~ access_token:', access_token);
      if (error) {
        throw new Error(error.message);
      }

      router.push('/');
    } catch (e: any) {
      console.log('🚀 ~ file: page.tsx:99 ~ handleSubmit ~ error:', e);
      setFormErrors({ error: e[0] });
    }
  }

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
        imgSrc="/images/authentication/login.jpg"
        imgAlt=""
        className="w-full md:max-w-[1024px] [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Sign in to platform
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="* Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            error={formErrors['username']}
          ></Input>
          <Input
            label="* Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            error={formErrors['password']}
          ></Input>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox id="rememberMe" name="rememberMe" />
              <Label htmlFor="rememberMe">Remember me</Label>
            </div>
            <a
              href="#"
              className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300"
            >
              Lost Password?
            </a>
          </div>
          <div className="mb-6">
            <Button
              type="submit"
              className="w-full lg:w-auto"
              color="primary"
              disabled={isLoading}
            >
              {isLoading ? 'Loading' : ' Login to your account'}
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            <a href="#" className="text-primary-600 dark:text-primary-300">
              Create account
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default SignInPage;
