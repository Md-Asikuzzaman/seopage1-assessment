import { FC } from 'react';
import TodoBoxHeader from './TodoBoxHeader';

interface Props {
  title: string;
  count: string;
  isIcon?: boolean;
  iconColor?: string;
  card: React.ReactNode;
}

const TodoBox: FC<Props> = ({ title, count, isIcon, iconColor, card }) => {
  return (
    <div className='bg-[#F2F4F7] min-w-[360px] px-2'>
      <TodoBoxHeader
        title={title}
        count={count}
        isIcon={isIcon}
        iconColor={iconColor}
      />

      {card}
    </div>
  );
};

export default TodoBox;
