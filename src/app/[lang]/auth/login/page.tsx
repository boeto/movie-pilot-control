'use client';
import { Label, TextInput } from '@/components/flowbite-react';
import type { ChangeEvent, FC, FormEvent, HTMLInputTypeAttribute } from 'react';
import { useState } from 'react';

import { Logo, Card, Button, HelperText, ColorsName } from '@/components';
import { useSelector, useDispatch, selectAuth, authLoginAsync } from '@/store';
import { useRouter } from 'next/navigation';

interface FormInputProps {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

interface FormData {
  username: string;
  password: string;
}
interface FormErrors {
  usernameError?: string;
  passwordError?: string;
}

const FormInput = (props: FormInputProps) => {
  const { type, label, name, value, onChange, placeholder, error } = props;
  return (
    <div className="mb-6 flex flex-col">
      <Label className="mb-2" htmlFor={name}>
        {label}
      </Label>
      <TextInput
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        color={error ? 'failure' : undefined}
        helperText={error ? <>{error}</> : undefined}
      />
    </div>
  );
};

const LoginPage: FC = function () {
  const initialFormData: FormData = { username: '', password: '' };
  const initialFormErrors: FormErrors = {
    usernameError: undefined,
    passwordError: undefined,
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, actionError } = useSelector(selectAuth);

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    if (!formData.username) {
      setFormErrors((prevFormErrors) => {
        return { ...prevFormErrors, usernameError: '用户名为必填项' }; //Username is required
      });
      return;
    }
    if (!formData.password) {
      setFormErrors((prevFormErrors) => {
        return { ...prevFormErrors, passwordError: '密码为必填项' }; //Username is required
      });
      return;
    }

    await dispatch(
      authLoginAsync({
        username: formData.username,
        password: formData.password,
      }),
    );

    router.push('/');
  };

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
        className="w-full md:max-w-3xl [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          LOGIN MOVIEPILOT
        </h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            label="* 用户名"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            error={formErrors['usernameError']}
          ></FormInput>
          <FormInput
            type="password"
            label="* 密码"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            error={formErrors['passwordError']}
            placeholder={'••••••••'}
          ></FormInput>

          <div className="mt-8">
            <Button
              type="submit"
              className="w-full"
              color={actionError ? ColorsName.FAILURE : ColorsName.PRIMARY}
              disabled={isLoading}
            >
              {isLoading ? 'Loading' : ' Login to your account'}
            </Button>
            {actionError && (
              <HelperText
                color={ColorsName.FAILURE}
                value={actionError}
              ></HelperText>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
