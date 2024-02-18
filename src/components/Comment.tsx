import React from 'react';
import { ArticleComment, useArticlesStore } from '@/stores';
import { Edit } from 'react-feather';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export type CommentProps = {
  comment: ArticleComment;
};

export function Comment(props: CommentProps): React.ReactNode {
  const { comment } = props;
  const [isEdited, setIsEdited] = React.useState(false);
  const [commentText, setCommentText] = React.useState(comment.text);
  const articlesStore = useArticlesStore();

  const handleSave = () => {
    articlesStore.editComment({
      id: comment.id,
      articleId: comment.articleId,
      text: commentText,
    });
    setIsEdited(false);
  };

  return isEdited ? (
    <div
      className="flex gap-4 justify-between break-all px-4 py-2 border border-gray-200 rounded"
    >
      <Input
        value={commentText}
        onChange={(e) => setCommentText(e.currentTarget.value)}
      />
      <Button variant="secondary" className="min-w-fit" onClick={handleSave}>Save</Button>
    </div>
  ) : (
    <div
      className="flex gap-4 justify-between break-all px-4 py-2 border border-gray-200 rounded"
    >
      {comment.text}
      <Edit
        className="shrink-0 cursor-pointer text-gray-400 hover:text-gray-600"
        width={16}
        onClick={() => setIsEdited(true)}
      />
    </div>
  );
}
