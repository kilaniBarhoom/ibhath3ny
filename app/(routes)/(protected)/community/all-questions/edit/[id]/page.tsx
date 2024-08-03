import Typography from '@/app/_components/ui/typography';
import React from 'react'
import MutateQuestionForm from '../../../ask/form';
import { getQuestionById } from '@/app/_lib/actions/question.action';
import { auth } from '@/auth';

const EditQuestionPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
    const { data: question } = await getQuestionById(id);
    const session = await auth();
    const user = session?.user;
  return (
    <div className="flex flex-col gap-10">
      <Typography element="h3" as="h3" color="secondary">
        تعديل سؤالك
      </Typography>
      <MutateQuestionForm user={user} question={question} />
    </div>
  );
};

export default EditQuestionPage