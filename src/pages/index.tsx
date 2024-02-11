import React from 'react';
import { Inter } from 'next/font/google';
import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';
import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { FieldType } from '@/enums';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [login, setLogin] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return (
    <main
      className={`flex gap-1 min-h-screen flex-col items-center p-16 ${inter.className}`}
    >
      hello
      <Input label="Best input" />
      <TextArea label="Text" />
      <Button type="submit">Sign Up</Button>
      <Button variant="secondary" type="submit">Sign In</Button>
      <Form
        fields={[
          {
            fieldType: FieldType.TextInput,
            fieldOptions: {
              label: 'Login',
            },
            value: login,
            setValue: setLogin,
            validataion: {
              isRequired: {
                value: true,
              },
              maxLength: {
                value: 50,
              },
            },
          },
          {
            fieldType: FieldType.TextInput,
            fieldOptions: {
              label: 'Password',
              type: 'password',
            },
            validataion: {
              isRequired: {
                value: true,
              },
              minLength: {
                value: 8,
              },
            },
            value: password,
            setValue: setPassword,
          },
        ]}
        buttons={[
          {
            children: 'Sign Up',
            isFullWidth: true,
          },
          { children: 'Cancel', isFullWidth: true, variant: 'secondary' },
        ]}
      />
    </main>
  );
}
