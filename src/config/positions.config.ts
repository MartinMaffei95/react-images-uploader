import { GenericPositions } from '../interfaces';

export const iconPositions: { [position in GenericPositions]: string } = {
  bottom: 'flex flex-col flex-col-reverse',
  top: 'flex flex-col',
  left: 'flex flex-row',
  right: 'flex flex-row flex-row-reverse',
};
