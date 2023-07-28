import { useRef, FC } from 'react'
import ImageToRender from './ImageToRender'
import useImageUploader from '../hooks/useImageUploader'
import { ImageUploaderConfig } from '../interfaces'
import { twMerge } from 'tailwind-merge'

type Props = {
  config?: ImageUploaderConfig
}
const ImageUploader: FC<Props> = ({
  config: {
    setFieldValue,
    dragDropText,
    dragDropClassName,
    dragDropIcon,
    dragDropStyle,
    ImageElementClassName,
    imagesContainerClassName,
    addImagesButton,
    onDragLeave,
    onDragOver,
    onDrop,
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
    onChange: setFieldValue,
    fieldName: 'imagenes',
  })

  const inputRef = useRef<HTMLInputElement>(null)

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

      <div className={twMerge('flex justify-center items-center p-12')}>
        <div
          style={dragDropStyle}
          className={twMerge(
            'w-full h-64  p-4 border-neutral-800  border-dashed rounded-lg flex flex-col items-center justify-center gap-8',
            dragging ? 'bg-neutral-400' : 'bg-neutral-300',
            dragDropClassName ? dragDropClassName : ''
          )}
          draggable
          onDragOver={(event) => {
            handleDrag(event, true)
          }}
          onDragLeave={(event) => {
            handleDrag(event, false)
          }}
          onDrop={handleDrop}
        >
          {dragDropIcon && dragDropIcon}
          <div className="flex flex-col gap-2 ">
            <span>{dragDropText}</span>
            <div>
              <button
                type="button"
                onClick={() => inputRef?.current?.click()}
                className={twMerge(
                  'font-semibold text-blue-700 hover:text-blue-900  cursor-pointer rounded  bg-blue-300 hover:bg-blue-400 p-2 border  border-blue-700',
                  addImagesButton?.className ? addImagesButton?.className : ''
                )}
              >
                {addImagesButton?.text ? addImagesButton?.text : ''}
              </button>{' '}
            </div>
          </div>
        </div>
      </div>

      {images?.length <= 0 ? null : (
        <div className={twMerge('flex flex-col w-full')}>
          <div className={twMerge('flex justify-between px-2 py-4')}>
            <div>
              <button
                onClick={deleteAllImages}
                className={twMerge('bg-red-600 text-neutral-100 p-2 rounded')}
              >
                Borrar todas las imagenes
              </button>
            </div>
            <p>
              Cant. de imagenes: <span>{images?.length}</span>
            </p>
          </div>
          <div
            className={twMerge(
              'flex flex-col sm:flex-row p-2 gap-4 bg-neutral-600 w-screen overflow-x-auto [&>div]:flex-shrink-0',
              imagesContainerClassName ? `${imagesContainerClassName}` : ''
            )}
          >
            {images?.map((image) => (
              <ImageToRender
                className={ImageElementClassName}
                key={image.id}
                image={image}
                deleteAction={deleteOneImage}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageUploader
