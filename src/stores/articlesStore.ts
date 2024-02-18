import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type Article = {
  id: string
  title?: string
  body?: string
  coverImage?: string
  comments: ArticleComment[]
};

export type ArticleComment = {
  id: string
  articleId: string
  text: string
};

export type ArticlesState = {
  articles: Article[]
};

export type ArticlesActions = {
  addArticle: (articleData: Omit<Article, 'id' | 'comments'>) => void
  removeArticle: (articleId: string) => void
  addComment: (commentData: {
    articleId: string
  } & Omit<ArticleComment, 'id'>) => void
  editComment: (commentData: { articleId: string } & ArticleComment) => void
  removeComment: (articleId: string, commentId: string) => void
};

const initialState: ArticlesState = {
  articles: [
    {
      id: '0',
      title: 'Встречайте, убийца React',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      coverImage: 'https://k2bindia.com/wp-content/uploads/2015/08/React.png',
      comments: [],
    },
    {
      id: '1',
      title: 'Bim-bim bam-bam',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/2560px-Fronalpstock_big.jpg',
      comments: [],
    },
  ],
};

export const useArticlesStore = create<
ArticlesState & ArticlesActions
>()(
  persist(devtools(
    (set, get) => ({
      ...initialState,
      addArticle: (newArticleData) => {
        const id = crypto.randomUUID();
        const newArticle: Article = {
          ...newArticleData,
          comments: [],
          id,
        };
        set((data) => ({ articles: [...data.articles, newArticle] }));
      },
      removeArticle: () => {
      },
      addComment: (commentData) => {
        const id = crypto.randomUUID();
        const newComment: ArticleComment = {
          id,
          articleId: commentData.articleId,
          text: commentData.text,
        };

        set((data) => ({
          ...data,
          articles: data.articles.map((article) => (article.id === commentData.articleId ? {
            ...article,
            comments: [...article.comments, newComment],
          } : article)),
        }));
      },
      editComment: (commentData) => {
        set((data) => ({
          ...data,
          articles: data.articles.map((article) => (article.id === commentData.articleId ? {
            ...article,
            comments: article.comments.map((comment) => (comment.id === commentData.id ? {
              ...comment,
              text: commentData.text,
            } : comment)),
          } : article)),
        }));
      },
      removeComment: () => {
      },
    }),
    {
      name: 'articles-store',
    },
  ), { name: 'article-storage' }),
);
