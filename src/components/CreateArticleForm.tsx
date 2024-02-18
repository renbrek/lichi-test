import React from 'react';
import { Form } from '@/components/ui/Form';
import { FieldType } from '@/enums';
import { useArticlesStore } from '@/stores';

export type CreateArticleFormProps = {
  onSuccess?: () => void;
  onError?: () => void;
};

export function CreateArticleForm(props: CreateArticleFormProps): React.ReactNode {
  const {
    onSuccess,
    onError,
  } = props;

  const [title, setTitle] = React.useState<string>('');
  const [body, setBody] = React.useState<string>('');
  const [coverImageSrc, setCoverImageSrc] = React.useState<string>('');

  const articleStore = useArticlesStore();

  const resetFormState = () => {
    setTitle('');
    setBody('');
    setCoverImageSrc('');
  };

  const handleSubmitForm = (e: React.MouseEvent) => {
    e.preventDefault();
    articleStore.addArticle({
      title,
      body,
      coverImage: coverImageSrc,
    });
    resetFormState();
    onSuccess?.();
    onError?.();
  };

  return (
    <div>
      <h1 className="text-2xl mb-3 font-bold">Create Article</h1>
      <Form
        fields={[
          {
            fieldType: FieldType.TextInput,
            value: title,
            setValue: setTitle,
            fieldOptions: {
              label: 'Title',
            },
            validation: {
              isRequired: {
                value: true,
              },
              maxLength: {
                value: 50,
              },
            },
          },
          {
            fieldType: FieldType.TextArea,
            value: body,
            setValue: setBody,
            fieldOptions: {
              label: 'Body',
            },
            validation: {
              isRequired: {
                value: true,
              },
            },
          },
          {
            fieldType: FieldType.TextInput,
            value: coverImageSrc,
            setValue: setCoverImageSrc,
            fieldOptions: {
              label: 'Cover Image Url',
            },
          },
        ]}
        buttons={[
          {
            children: 'Create',
            onClick: handleSubmitForm,
            isFullWidth: true,
          },
        ]}
      />
    </div>
  );
}
