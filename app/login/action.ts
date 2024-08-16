import { redirect } from 'next/navigation';
import z from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine(
      (email) => email.endsWith('@zod.com'),
      'email은 @zod.com으로만 가입이 가능합니다. '
    ),
  username: z.string().min(5, 'username은 5글자 이상으로 입력해주세요. '),
  password: z
    .string()
    .min(10, '비밀번호는 10자 이상이어야 합니다.')
    .refine((val) => /\d/.test(val), {
      message: '비밀번호에 1개 이상의 숫자를 사용하세요',
    }),
});

export default function LoginAction(prevState: any, formData: FormData) {
  const data = {
    email: formData.get('email'),
    username: formData.get('username'),
    password: formData.get('password'),
  };
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    redirect('/');
  }
}
