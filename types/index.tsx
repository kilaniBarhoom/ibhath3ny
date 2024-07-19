export type CommentType = {
  id: string;
  content: string;
  user: {
    name: string;
    avatar: string;
  };
  createdAt: string;
};

export type QuestionType = {
  id: string;
  content: string;
  tags: string[];
  user: {
    name: string;
    avatar: string;
  };
  comments: CommentType[];
  views: number;
  createdAt: string;
};
