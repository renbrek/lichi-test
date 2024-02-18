import React from 'react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { CreateArticleForm } from '@/components/CreateArticleForm';

export function CreateArticleButton(): React.ReactNode {
  const [isCreateArticleModalOpen, setIsCreateArticleModalOpen] = React.useState(false);

  const handleCreateArticleButtonClick = () => {
    setIsCreateArticleModalOpen(true);
  };

  return (
    <>
      <Button isFullWidth onClick={handleCreateArticleButtonClick}>Create Article</Button>
      <Modal isOpen={isCreateArticleModalOpen} onClose={() => setIsCreateArticleModalOpen(false)}>
        <CreateArticleForm
          onSuccess={() => setIsCreateArticleModalOpen(false)}
        />
      </Modal>
    </>
  );
}

export default CreateArticleButton;
