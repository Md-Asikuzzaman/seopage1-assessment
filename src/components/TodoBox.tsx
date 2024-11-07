import { FC } from 'react';
import TodoBoxHeader from './TodoBoxHeader';
import Modal from './Modal';
import { useModalStore } from '../lib/store';

interface Props {
  title: string;
  count: string;
  isIcon?: boolean;
  iconColor?: string;
  card: React.ReactNode;
}

const TodoBox: FC<Props> = ({ title, count, isIcon, iconColor, card }) => {
  const { isModal } = useModalStore();

  return (
    <div className='bg-[#F2F4F7] min-w-[340px] px-2'>
      <TodoBoxHeader
        title={title}
        count={count}
        isIcon={isIcon}
        iconColor={iconColor}
      />
      {card}

      {/* modal */}
      {isModal && <Modal />}
    </div>
  );
};

export default TodoBox;
