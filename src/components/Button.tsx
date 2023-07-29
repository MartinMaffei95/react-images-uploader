import { FC } from 'react';
import { GenericPositions, StyleWithTextAndIcon } from '../interfaces';
import { twMerge } from 'tailwind-merge';

interface Props extends StyleWithTextAndIcon {
  onClick?: any;
  base?: StyleWithTextAndIcon;
  type?: 'button';
}
const Button: FC<Props> = ({
  onClick,
  className,
  icon,
  iconPosition,
  text,
  base,
}) => {
  const iconPositions: { [position in GenericPositions]: string } = {
    bottom: 'flex flex-col flex-col-reverse',
    top: 'flex flex-col',
    left: 'flex flex-row',
    right: 'flex flex-row flex-row-reverse',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        'justify-center items-center gap-2 font-semibold text-neutral-700 hover:text-neutral-900  cursor-pointer rounded  bg-neutral-200 shadow-md hover:bg-neutral-400 p-2 border  border-neutral-700',
        base?.className,
        className,
        iconPositions[iconPosition || base?.iconPosition || 'left']
      )}
    >
      {icon || base?.icon}
      {text || base?.text}
    </button>
  );
};

export default Button;
