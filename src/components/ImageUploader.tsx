import { useRef, FC } from 'react';
import ImageToRender from './ImageToRender';
import useImageUploader from '../hooks/useImageUploader';
import { ImageUploaderConfig } from '../interfaces';
import { twMerge } from 'tailwind-merge';
import Button from './Button';
import { colorSchemes, iconPositions } from '../config';

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
    error,
    previewImage,
    draggingConfig,
    dropArea,
    dragAndDropEvents,
    colorScheme,
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
    max: inputConfig?.max,
    min: inputConfig?.min,
    multiple: inputConfig?.multiple,
    onError: error?.onError,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        multiple={inputConfig?.multiple}
        accept="image/*"
        onChange={handleFiles}
        name="files"
        type="file"
        ref={inputRef}
        className="hidden"
      />

      <div className="flex justify-center items-center p-12 w-full">
        <div
          style={dropArea?.style}
          className={twMerge(
            'w-full h-64  p-4 border-neutral-800   rounded-lg flex flex-col items-center justify-center gap-8 bg-neutral-100',
            colorSchemes[colorScheme || 'base'].dropArea?.className,
            dropArea?.className,
            dragging
              ? draggingConfig?.className ||
                  colorSchemes[colorScheme || 'base'].draggingConfig
                    ?.className ||
                  'bg-neutral-300'
              : ''
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
              colorSchemes[colorScheme || 'base'].dropArea?.iconPosition,
              iconPositions[dropArea?.iconPosition || 'top']
            )}
          >
            {dragging
              ? draggingConfig?.icon ||
                colorSchemes[colorScheme || 'base'].draggingConfig?.icon
                ? draggingConfig?.icon ||
                  colorSchemes[colorScheme || 'base'].draggingConfig?.icon
                : dropArea?.icon ||
                  colorSchemes[colorScheme || 'base'].dropArea?.icon
              : dropArea?.icon ||
                colorSchemes[colorScheme || 'base'].dropArea?.icon}
            <span>
              {colorSchemes[colorScheme || 'base'].dropArea?.text ||
                dropArea?.text}
            </span>
          </div>
          <Button
            style={buttons?.addImage?.style}
            className={
              buttons?.addImage?.className ||
              colorSchemes[colorScheme || 'base'].buttons?.addImage?.className
            }
            iconPosition={
              buttons?.addImage?.iconPosition ||
              colorSchemes[colorScheme || 'base'].buttons?.addImage
                ?.iconPosition
            }
            onClick={() => inputRef?.current?.click()}
            text={
              buttons?.addImage?.text ||
              colorSchemes[colorScheme || 'base'].buttons?.addImage?.text ||
              'Browse images'
            }
            icon={
              buttons?.addImage?.icon ||
              colorSchemes[colorScheme || 'base'].buttons?.addImage?.icon
            }
          />
        </div>
      </div>

      {images?.length <= 0 ? null : (
        <div className="flex flex-col w-full">
          <div className="flex justify-between px-2 py-4">
            <div>
              <Button
                className={twMerge(
                  'bg-red-600 text-neutral-100 hover:bg-red-700 hover:text-neutral-200',
                  colorSchemes[colorScheme || 'base'].buttons?.deleteAll
                    ?.className,
                  buttons?.deleteAll?.className
                )}
                iconPosition={buttons?.deleteAll?.iconPosition || 'left'}
                icon={
                  buttons?.deleteAll?.icon ||
                  colorSchemes[colorScheme || 'base'].buttons?.deleteAll?.icon
                }
                text={
                  buttons?.deleteAll?.text ||
                  colorSchemes[colorScheme || 'base'].buttons?.deleteAll
                    ?.text ||
                  'Delete all'
                }
                onClick={deleteAllImages}
              />
            </div>
            {containerOfImages?.counter?.withCounter ? (
              <div className="flex justify-center items-center gap-2">
                <div
                  className={twMerge(
                    'flex items-center justify-center gap-2',
                    colorSchemes[colorScheme || 'base'].containerOfImages
                      ?.counter?.className,
                    containerOfImages.counter.className,
                    colorSchemes[colorScheme || 'base'].containerOfImages
                      ?.counter?.iconPosition,
                    iconPositions[
                      containerOfImages?.counter?.iconPosition || 'left'
                    ]
                  )}
                >
                  {containerOfImages.counter?.icon ||
                    colorSchemes[colorScheme || 'base'].containerOfImages
                      ?.counter?.icon}
                  <p className="flex">
                    {containerOfImages.counter?.text || 'Images:'}
                    <span
                      className={twMerge(
                        'font-semibold flex items-center justify-center gap-2'
                      )}
                    >
                      {images?.length}
                    </span>
                  </p>
                </div>
              </div>
            ) : null}
          </div>
          <div
            className={twMerge(
              'flex flex-col sm:flex-row p-2 gap-4 bg-neutral-600  overflow-x-auto [&>div]:flex-shrink-0 w-full',
              colorSchemes[colorScheme || 'base'].containerOfImages?.className,
              containerOfImages?.className
            )}
          >
            {images?.map((image) => (
              <ImageToRender
                imageStyle={{
                  className: twMerge(
                    colorSchemes[colorScheme || 'base'].previewImage?.image
                      ?.className,
                    previewImage?.image?.className
                  ),
                }}
                deleteButton={{
                  text: buttons?.deleteOneImage?.text || 'Delete',
                  className: twMerge(
                    colorSchemes[colorScheme || 'base'].buttons?.deleteOneImage
                      ?.className,
                    buttons?.deleteOneImage?.className
                  ),
                  icon:
                    buttons?.deleteOneImage?.icon ||
                    colorSchemes[colorScheme || 'base'].buttons?.deleteOneImage
                      ?.icon,
                  iconPosition:
                    buttons?.deleteOneImage?.iconPosition ||
                    colorSchemes[colorScheme || 'base'].buttons?.deleteOneImage
                      ?.iconPosition,
                  style: buttons?.deleteOneImage?.style,
                }}
                shadowLayer={{
                  className: twMerge(
                    colorSchemes[colorScheme || 'base'].previewImage
                      ?.shadowLayer?.className,
                    previewImage?.shadowLayer?.className
                  ),
                }}
                key={image.id}
                image={image}
                deleteAction={deleteOneImage}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageUploader;
