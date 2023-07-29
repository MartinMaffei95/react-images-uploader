import { useRef, FC } from 'react';
import ImageToRender from './ImageToRender';
import useImageUploader from '../hooks/useImageUploader';
import { GenericPositions, ImageUploaderConfig } from '../interfaces';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

type Props = {
  config?: ImageUploaderConfig;
};
const ImageUploader: FC<Props> = ({
  config: {
    inputConfig,
    buttons,
    containerOfImages = {
      counter: { withCounter: true },
    },
    previewImage,
    draggingConfig,
    dropArea,
    dragAndDropEvents,
  } = {},
}) => {
  const {
    images,
    handleFiles,
    deleteOneImage,
    handleDrag,
    handleDrop,
    dragging,
    deleteAllImages,
  } = useImageUploader({
    onChange: inputConfig?.setFieldValue,
    fieldName: inputConfig?.fieldName,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const iconPositions: { [position in GenericPositions]: string } = {
    bottom: 'flex flex-col flex-col-reverse',
    top: 'flex flex-col',
    left: 'flex flex-row',
    right: 'flex flex-row flex-row-reverse',
  };

  return (
    <div>
      <input
        multiple
        accept="image/*"
        onChange={handleFiles}
        name="files"
        type="file"
        ref={inputRef}
        className="hidden"
      />

      <div className="flex justify-center items-center p-12">
        <div
          style={dropArea?.style}
          className={twMerge(
            'w-full h-64  p-4 border-neutral-800   rounded-lg flex flex-col items-center justify-center gap-8 bg-neutral-100',
            dropArea?.className,
            dragging ? draggingConfig?.className || 'bg-neutral-300' : ''
          )}
          draggable
          onDragOver={(event) => {
            handleDrag(event, true);
            dragAndDropEvents?.onDragOver &&
              dragAndDropEvents?.onDragOver(event);
          }}
          onDragLeave={(event) => {
            handleDrag(event, false);
            dragAndDropEvents?.onDragLeave &&
              dragAndDropEvents?.onDragLeave(event);
          }}
          onDrop={(event) => {
            handleDrop(event);
            dragAndDropEvents?.onDrop && dragAndDropEvents?.onDrop(event);
          }}
        >
          <div
            className={twMerge(
              'flex flex-col items-center justify-center gap-4 ',
              iconPositions[dropArea?.iconPosition || 'top']
            )}
          >
            {dragging
              ? draggingConfig?.icon
                ? draggingConfig?.icon
                : dropArea?.icon
              : dropArea?.icon}
            <span>{dropArea?.text}</span>
          </div>
          <div className="flex flex-col gap-2 ">
            <div>
              <Button
                className={buttons?.addImage?.className}
                iconPosition={buttons?.addImage?.iconPosition}
                onClick={() => inputRef?.current?.click()}
                text={buttons?.addImage?.text || 'Browse images'}
                icon={buttons?.addImage?.icon}
              />
            </div>
          </div>
        </div>
      </div>

      {images?.length <= 0 ? null : (
        <div className="flex flex-col w-full">
          <div className="flex justify-between px-2 py-4">
            <div>
              <Button
                className={twMerge(
                  'bg-red-600 text-neutral-100 hover:bg-red-700 hover:text-neutral-200',
                  buttons?.deleteAll?.className
                )}
                iconPosition={buttons?.deleteAll?.iconPosition || 'left'}
                icon={buttons?.deleteAll?.icon}
                text={buttons?.deleteAll?.text || 'Delete all'}
                onClick={deleteAllImages}
              />
            </div>
            {containerOfImages?.counter?.withCounter ? (
              <div className="flex justify-center items-center gap-2">
                <p
                  className={twMerge(
                    'flex items-center justify-center gap-2',
                    iconPositions[
                      containerOfImages?.counter?.iconPosition || 'left'
                    ]
                  )}
                >
                  {containerOfImages.counter?.icon}
                  {containerOfImages.counter?.text || 'Images:'}
                </p>
                <p
                  className={twMerge(
                    'font-semibold flex items-center justify-center gap-2',
                    containerOfImages.counter.className
                  )}
                >
                  <span>{images?.length}</span>
                </p>
              </div>
            ) : null}
          </div>
          <div
            className={twMerge(
              'flex flex-col sm:flex-row p-2 gap-4 bg-neutral-600 w-screen overflow-x-auto [&>div]:flex-shrink-0',
              containerOfImages?.className
            )}
          >
            {images?.map((image) => (
              <ImageToRender
                imageStyle={{
                  className: previewImage?.image?.className,
                }}
                deleteButton={{
                  text: buttons?.deleteOneImage?.text || 'Delete',
                  className: buttons?.deleteOneImage?.className,
                  icon: buttons?.deleteOneImage?.icon,
                  iconPosition: buttons?.deleteOneImage?.iconPosition,
                  style: buttons?.deleteOneImage?.style,
                }}
                shadowLayer={{
                  className: previewImage?.shadowLayer?.className,
                }}
                key={image.id}
                image={image}
                deleteAction={deleteOneImage}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
