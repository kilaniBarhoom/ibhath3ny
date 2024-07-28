declare type AnswerType = {
  id: string;
  content: string;
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
  upvotes: {
        id: string;
        answerId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }[];
  createdAt: Date;
  updatedAt: Date;
};

declare type QuestionType = {
  id: string;
  title: string;
  content: string;
  anonymous: boolean;
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
  views: {
    id: string;
    questionId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  answers: AnswerType[];
  createdAt: string;
  updatedAt: string;
};
