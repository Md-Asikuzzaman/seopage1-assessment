import { FC } from 'react';
import TodoBoxHeader from './TodoBoxHeader';
import TodoCard from './todo/TodoCard';

interface Props {
  title: string;
  count: string;
  isIcon?: boolean;
  iconColor?: string;
}

const TodoBox: FC<Props> = ({ title, count, isIcon, iconColor }) => {
  return (
    <div className='bg-[#F2F4F7] min-w-[300px]'>
      <TodoBoxHeader
        title={title}
        count={count}
        isIcon={isIcon}
        iconColor={iconColor}
      />

      <TodoCard />
    </div>
  );
};

export default TodoBox;
