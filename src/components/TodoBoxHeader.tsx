import clsx from 'clsx';
import React, { FC } from 'react';

interface Props {
  title: string;
  count: string;
  isIcon?: boolean;
  iconColor?: string;
}

const TodoBoxHeader: FC<Props> = ({ title, count, isIcon, iconColor }) => {
  return (
    <h2 className='flex items-center justify-between p-2 pb-4'>
      <div className='flex items-center gap-1 text-base font-medium text-slate-800'>
        {isIcon && (
          <span
            className={clsx(
              'inline-block h-5 w-5 rounded-bl-full rounded-tl-full',
              iconColor
            )}
          ></span>
        )}
        {title}
      </div>

      <span className='inline-flex items-center justify-center rounded-sm h-[25px] font-semibold w-[25px] bg-[#E8EEF3]'>
        {count}
      </span>
    </h2>
  );
};

export default TodoBoxHeader;
