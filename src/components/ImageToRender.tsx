import { FC } from 'react';
import { Image, Style, StyleWithTextAndIcon } from '../interfaces';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

type Props = {
  image: Image;
  deleteAction: (imageId: string) => void;
  imageStyle?: Style;
  deleteButton?: StyleWithTextAndIcon;
  shadowLayer?: Style;
};

const ImageToRender: FC<Props> = ({
  image: { id, name, src },
  deleteAction,
  imageStyle,
  deleteButton,
  shadowLayer,
}) => {
  return (
    <div
      className={twMerge(
        'flex relative cursor-pointer items-center justify-center rounded-md overflow-hidden h-32 aspect-square bg-neutral-300 p-2 hover:[&>div]:opacity-100 ',
        imageStyle?.className
      )}
    >
      <img alt={`${name} image`} src={src} />
      <div
        className={twMerge(
          'flex items-end p-2 justify-center opacity-0 absolute top-0 left-0 w-full h-full bg-gradient-to-t to-transparent from-slate-950 duration-200 [&>button]:hover:translate-y-0',
          shadowLayer?.className
        )}
      >
        <Button
          onClick={() => deleteAction(id)}
          className={twMerge(
            ' duration-300  bg-transparent hover:text-neutral-200 py-1 px-2 translate-y-full rounded text-neutral-100  border border-neutral-200   hover:bg-neutral-800',
            deleteButton?.className
          )}
          icon={deleteButton?.icon}
          iconPosition={deleteButton?.iconPosition}
          text={deleteButton?.text}
          style={deleteButton?.style}
        />
      </div>
    </div>
  );
};

export default ImageToRender;
