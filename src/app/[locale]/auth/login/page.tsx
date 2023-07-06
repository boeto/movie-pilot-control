'use client';

import type { ChangeEvent, FC, FormEvent, HTMLInputTypeAttribute } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import {
  Button,
  Card,
  ColorsName,
  HelperText,
  Label,
  Logo,
  Spinner,
  TextInput,
} from '@/components';
import {
  selectAuth,
  setActionError,
  setAuthLoginAsync,
  useDispatch,
  useSelector,
} from '@/store';

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

const FormInput = ({
  type,
  label,
  name,
  value,
  onChange,
  placeholder = undefined,
  error = undefined,
}: FormInputProps) => {
  return (
    <div className="mb-4 flex flex-col">
      <Label className="mb-2" htmlFor={name} isRequire>
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
        helperText={error || <>{error}</>}
      />
    </div>
  );
};

const AuthLoginPage: FC = () => {
  const initialFormData: FormData = { username: '', password: '' };
  const initialFormErrors: FormErrors = {
    usernameError: undefined,
    passwordError: undefined,
  };
  const initialactionErrorMessage: string = '';

  const router = useRouter();
  const dispatch = useDispatch();

  const t = useTranslations('Auth');

  const { isLoading, actionError, isLogin, accessToken } =
    useSelector(selectAuth);

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [actionErrorMessage, setActionErrorMessage] = useState(
    initialactionErrorMessage,
  );

  useEffect(() => {
    if (actionError)
      switch (actionError) {
        case '401':
          setActionErrorMessage(t('error401'));
          break;
        case '403':
          setActionErrorMessage(t('error403'));
          break;
        case '500':
          setActionErrorMessage(t('error500'));
          break;
        case 'errorAccessTokenNotFound':
          setActionErrorMessage(t('errorAccessTokenNotFound'));
          break;
        case 'Failed to fetch':
          setActionErrorMessage(t('errorFailedToFetch'));
          break;

        default:
          setActionErrorMessage(`${t('errorLogin')}${actionError}`);
          break;
      }
    else setActionErrorMessage(initialactionErrorMessage);
  }, [actionError, t]);

  useEffect(() => {
    if (accessToken && isLogin) {
      router.push('/');
    }
  }, [accessToken, isLogin, router]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    dispatch(setActionError(undefined));
    setFormErrors(initialFormErrors);

    if (!formData.username) {
      setFormErrors((prevFormErrors) => {
        return { ...prevFormErrors, usernameError: t('usernameError') };
      });
      return;
    }
    if (!formData.password) {
      setFormErrors((prevFormErrors) => {
        return { ...prevFormErrors, passwordError: t('passwordError') };
      });
      return;
    }

    await dispatch(
      setAuthLoginAsync({
        username: formData.username,
        password: formData.password,
      }),
    );
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <div className="my-6 flex items-center gap-x-1 lg:my-0">
        <Logo />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          MoviePilot
        </span>
      </div>
      <Card
        horizontal
        imgSrc="/images/authentication/login.jpg"
        imgAlt=""
        className="w-full transition md:max-w-3xl md:[&>*]:w-full md:[&>*]:p-16 [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 lg:[&>img]:block"
        childrenClassName="justify-start"
      >
        <h1 className="mb-2 text-2xl font-bold dark:text-white md:mb-6 md:text-3xl">
          {t('title')}
        </h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            label={t('username')}
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            error={formErrors.usernameError}
          />
          <FormInput
            type="password"
            label={t('password')}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            error={formErrors.passwordError}
            placeholder="••••••••"
          />

          <div className="mt-8">
            <Button
              type="submit"
              className="w-full"
              color={
                actionErrorMessage ||
                formErrors.usernameError ||
                formErrors.passwordError
                  ? ColorsName.FAILURE
                  : ColorsName.PRIMARY
              }
              disabled={isLoading}
              isProcessing={isLoading}
              processingSpinner=<Spinner size="sm" light />
            >
              {isLoading ? t('logging') : t('login')}
            </Button>
            <HelperText
              color={ColorsName.FAILURE}
              value={actionErrorMessage}
              className={actionErrorMessage ? '' : 'hidden'}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AuthLoginPage;
