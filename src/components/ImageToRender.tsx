import { FC } from 'react'
import { Image } from '../interfaces'

type Props = {
  image: Image
  deleteAction: (imageId: string) => void
  className?: string
}

const ImageToRender: FC<Props> = ({
  image: { id, name, src },
  deleteAction,
  className,
}) => {
  return (
    <div
      className={`flex relative cursor-pointer items-center justify-center rounded-md overflow-hidden h-32 aspect-square bg-neutral-300 p-2
    hover:[&>div]:opacity-100 
    ${className}
    `}
    >
      <img alt={`${name} image`} src={src} />
      <div
        className="flex items-end p-2 justify-center opacity-0 absolute top-0 left-0 w-full h-full bg-gradient-to-t to-transparent from-slate-950 duration-200
      [&>span]:hover:translate-y-0
      "
      >
        <span
          onClick={() => deleteAction(id)}
          className="duration-300 py-1 px-2 translate-y-full rounded text-neutral-100  border border-neutral-200   hover:bg-neutral-800"
        >
          Eliminar
        </span>
      </div>
    </div>
  )
}

export default ImageToRender
