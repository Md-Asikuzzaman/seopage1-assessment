import { IoCloseOutline, IoCloudUploadOutline } from 'react-icons/io5';
import { MdInsertDriveFile } from 'react-icons/md';
import { useModalStore } from '../lib/store';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import clsx from 'clsx';

const Modal = () => {
  const { setIsModal } = useModalStore();

  // Files state
  const [files, setFiles] = useState<File[]>([]);

  // Handle file drop
  const onDrop = (acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  // Delete a specific file
  const handleDelete = (fileToDelete: File) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/svg': [],
    },
  });

  const handleSubmit = () => {
    alert('Uploading...');

    console.log(files);

    setFiles([]);
  };

  return (
    <div
      onClick={() => setIsModal()}
      className='min-h-screen fixed top-0 left-0 bg-[#3333336a] w-full flex items-center justify-center'
    >
      <div
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
        className='bg-white max-w-[500px] w-full p-3.5 rounded-lg space-y-1 m-4'
      >
        <div className='mb-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-semibold'>Upload and attach files</h2>
            <IoCloseOutline
              onClick={() => setIsModal()}
              className='cursor-pointer'
              size={20}
            />
          </div>
          <p className='text-sm text-gray-500'>
            Supported format: .png, .jpg, .svg
          </p>
        </div>
        {/* file drop area */}
        <div
          {...getRootProps()}
          className='border-2 border-dashed border-blue-300 hover:border-blue-500 h-[200px] rounded-md flex items-center justify-center cursor-pointer'
        >
          <div className='flex flex-col gap-6 items-center'>
            <IoCloudUploadOutline size={40} className='text-blue-600' />
            <h3 className='text-md text-gray-500'>
              Click to upload or drag and drop
            </h3>
            <input {...getInputProps()} />
          </div>
        </div>

        {/* all files */}
        <br />
        {files.length > 0 && (
          <div
            className={clsx(
              'flex flex-col gap-1 pb-3 max-h-[300px]',
              files.length > 5 && 'overflow-y-scroll scrollbar-vr'
            )}
          >
            {files.map((file) => (
              <div className='flex items-center justify-between bg-[#F5F7F8] p-3 rounded-md gap-5'>
                <div className='flex items-center gap-1'>
                  <MdInsertDriveFile className='text-teal-500' />
                  <p className='text-sm line-clamp-1'>{file.name}</p>
                </div>
                <IoCloseOutline
                  onClick={() => handleDelete(file)}
                  className='cursor-pointer shrink-0'
                />
              </div>
            ))}
          </div>
        )}

        <p className='text-sm text-gray-500'>Total {files.length} files.</p>

        {/* upload button */}
        <div className='border-t pt-3'>
          <button
            disabled={!files.length}
            onClick={handleSubmit}
            className={clsx(
              'bg-blue-400 transition-colors text-sm text-white py-2 px-4 rounded-md',
              !files.length ? 'cursor-not-allowed' : 'hover:bg-blue-500'
            )}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
