import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.jpg';

import { IoLayers } from 'react-icons/io5';
import { FaClipboardList, FaRegComments } from 'react-icons/fa6';
import { GrAttachment } from 'react-icons/gr';
import { SlCalender } from 'react-icons/sl';

const TodoCard = () => {
  const handleFile = () => {
    alert('clicked');

    console.log('clicked!');
  };

  return (
    <div className='bg-white p-2 rounded-md mr-2'>
      {/* card header */}
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <img src={Img1} alt='img1' className='h-6 w-6 rounded-full' />
          <h3 className='text-sm font-semibold'>Client Name</h3>
        </div>

        <div className='flex items-center gap-1'>
          <img src={Img2} alt='img2' className='h-6 w-6 rounded-full' />
          <h3 className='text-sm font-semibold'>Sadik Istiak</h3>
        </div>
      </div>
      {/* card body */}
      <div className='flex items-center justify-between py-2'>
        <div className='flex items-center gap-1 text-[#666666]'>
          <IoLayers size={18} />
          <p className='text-xs'>Lorem ipsum dolor sit amet curn...</p>
        </div>

        <div className='flex items-center bg-[#F1F3F6] text-[#666666] gap-1 p-1 rounded-md'>
          <FaClipboardList size={16} />
          <p className='text-sm font-semibold'>1/2</p>
        </div>
      </div>
      {/* card footer */}
      <div className='flex items-center gap-3 justify-between'>
        <div className='flex items-center gap-3'>
          <img src={Img2} alt='img2' className='h-6 w-6 rounded-full' />
          <img src={Img1} alt='img1' className='h-6 w-6 rounded-full' />
          <div className='h-8 w-8 bg-[#F2F4F7] text-xs font-semibold flex items-center justify-center rounded-full'>
            12+
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='text-xs font-semibold flex items-center gap-1 text-[#666666]'>
            <FaRegComments size={15} />
            15
          </div>
          <div
            onClick={handleFile}
            className='text-xs font-semibold flex items-center gap-1 text-[#666666] cursor-pointer'
          >
            <GrAttachment size={14} />
            25
          </div>
          <div className='text-xs font-semibold flex items-center gap-1 text-[#666666]'>
            <SlCalender size={13} />
            30-12-2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
