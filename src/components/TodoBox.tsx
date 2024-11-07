import { FC } from 'react';
import TodoBoxHeader from './TodoBoxHeader';
import { IoCloseOutline, IoCloudUploadOutline } from 'react-icons/io5';
import { MdInsertDriveFile } from 'react-icons/md';

interface Props {
  title: string;
  count: string;
  isIcon?: boolean;
  iconColor?: string;
  card: React.ReactNode;
}

const TodoBox: FC<Props> = ({ title, count, isIcon, iconColor, card }) => {
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
      <div className='min-h-screen fixed top-0 left-0 bg-[#3333336a] w-full flex items-center justify-center'>
        <div className='bg-white max-w-[500px] w-full p-3.5 rounded-lg space-y-1'>
          <div className='mb-4'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-semibold'>
                Upload and attach files
              </h2>
              <IoCloseOutline className='cursor-pointer' size={18} />
            </div>
            <p className='text-sm text-gray-500'>
              Supported format: .png, .jpg, .svg
            </p>
          </div>
          {/* file drop area */}

          <div className='border-2 border-dashed border-blue-300 hover:border-blue-500 h-[200px] rounded-md flex items-center justify-center cursor-pointer'>
            <div className='flex flex-col gap-6 items-center'>
              <IoCloudUploadOutline size={40} className='text-blue-600' />
              <h3 className='text-md text-gray-500'>
                Click to upload or drag and drop
              </h3>
            </div>
          </div>

          {/* all files */}
          <div className='flex flex-col gap-1 pb-3 pt-4'>
            <div className='flex items-center justify-between bg-[#F5F7F8] p-3 rounded-md'>
              <div className='flex items-center gap-1'>
                <MdInsertDriveFile className='text-teal-500' />
                <p>file1.png</p>
              </div>
              <IoCloseOutline className='cursor-pointer' />
            </div>
            <div className='flex items-center justify-between bg-[#F5F7F8] p-3 rounded-md'>
              <div className='flex items-center gap-1'>
                <MdInsertDriveFile className='text-teal-500' />
                <p>file2.png</p>
              </div>
              <IoCloseOutline className='cursor-pointer' />
            </div>
            <div className='flex items-center justify-between bg-[#F5F7F8] p-3 rounded-md'>
              <div className='flex items-center gap-1'>
                <MdInsertDriveFile className='text-teal-500' />
                <p>file3.png</p>
              </div>
              <IoCloseOutline className='cursor-pointer' />
            </div>
          </div>

          {/* upload button */}
          <div className='border-t pt-3'>
            <button className='bg-blue-400 hover:bg-blue-500 transition-colors text-sm text-white py-2 px-4 rounded-md'>
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoBox;
