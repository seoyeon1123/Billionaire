'use client';
import { useFormState } from 'react-dom';
import LoginAction from './action';
import InputForm from '@/components/input';

export default function Login() {
  const [state, action] = useFormState(LoginAction, null);
  return (
    <>
      <form
        action={action}
        className="flex flex-col m-auto justify-center items-center gap-3"
      >
        <InputForm
          name="email"
          type="email"
          placeholder="email"
          errors={state?.fieldErrors.email || []}
        />
        <InputForm
          name="username"
          type="text"
          placeholder="username"
          errors={state?.fieldErrors.username || []}
        />
        <InputForm
          name="password"
          type="password"
          placeholder="password"
          errors={state?.fieldErrors.password || []}
        />
        <button className="w-96 h-8 rounded-full  bg-neutral-700 text-white">
          Log in
        </button>
      </form>
    </>
  );
}
