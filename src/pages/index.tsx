import React from 'react';
import { Inter } from 'next/font/google';
import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';
import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { FieldType } from '@/enums';
import { Card } from '@/components/Card';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [login, setLogin] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return (
    <main
      className={`flex gap-1 min-h-screen flex-col items-center p-2 ${inter.className}`}
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
      <Card onClick={() => alert('hehehehehhe')} title="Встречайте, убийца React" subtitle="$mol" arcicleCoverSrc="data:image/jpeg;base64,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" />
    </main>
  );
}
