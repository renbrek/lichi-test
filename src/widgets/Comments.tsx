import React from 'react';
import { ArticleComment, useArticlesStore } from '@/stores';
import { Comment } from '@/components/Comment';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export type CommentsProps = {
  articleId: string;
  comments: ArticleComment[]
};

export function Comments(props: CommentsProps): React.ReactNode {
  const {
    articleId,
    comments,
  } = props;
  const [newComment, setNewComment] = React.useState('');
  const articleStore = useArticlesStore();

  const handleCommentButton = () => {
    if (newComment) {
      articleStore.addComment({
        articleId,
        text: newComment,
      });
    }
    setNewComment('');
  };

  const isHasComments = comments.length > 0;

  return (
    <div className={clsx('flex flex-col gap-5', inter.className)}>
      <div
        className={clsx('flex shrink-0 gap-3 ', isHasComments && 'border-b border-gray-200 pb-5')}
      >
        <Input
          placeholder="What are your thoughts?"
          value={newComment}
          onChange={(e) => setNewComment(e.currentTarget.value)}
        />
        <Button
          className="min-w-fit"
          onClick={handleCommentButton}
          disabled={!newComment}
        >
          Comment
        </Button>
      </div>
      {isHasComments && (
      <div className="flex flex-col gap-2">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
          />
        ))}
      </div>
      )}
    </div>
  );
}
