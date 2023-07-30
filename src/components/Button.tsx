import { FC } from 'react';
import { StyleWithTextAndIcon } from '../interfaces';
import { twMerge } from 'tailwind-merge';
import { iconPositions } from '../config';

interface Props extends StyleWithTextAndIcon {
  onClick?: any;
  base?: StyleWithTextAndIcon;
  type?: 'button';
}
const Button: FC<Props> = ({
  onClick,
  className,
  style,
  icon,
  iconPosition,
  text,
  base,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...style,
      }}
      className={twMerge(
        'justify-center items-center gap-2 font-semibold text-neutral-700 hover:text-neutral-900  cursor-pointer rounded [&]:bg-neutral-200 shadow-md hover:bg-neutral-400 p-2 border  border-neutral-700',
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
