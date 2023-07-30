import { ColorSchemes, ImageUploaderConfig } from '../interfaces';

const baseScheme: ImageUploaderConfig = {
  dropArea: {
    className: 'bg-neutral-50 text-neutral-900 text-2xl letter font-bold',
  },
  buttons: {
    addImage: {
      className: 'text-base',
    },
    deleteAll: {
      className: '!bg-red-500',
    },
    deleteOneImage: {
      className:
        'bg-neutral-300 !bg-opacity-20 hover:!bg-neutral-700 hover:bg-opacity-40',
    },
  },
};
const blueScheme: ImageUploaderConfig = {
  dropArea: {
    className: 'bg-blue-500 text-neutral-100 text-2xl letter font-bold',
    icon: <span className="text-4xl">🛳️</span>,
    text: 'Drop here your images',
  },
  buttons: {
    addImage: {
      text: 'Find my images',
      className:
        '!bg-blue-700 hover:!bg-blue-800 hover:text-neutral-300 border-none shadow shadow-neutral-600  text-base font-bold text-neutral-100',
    },
    deleteAll: {
      className: '!bg-red-500',
    },
    deleteOneImage: {
      className:
        'bg-neutral-300 !bg-opacity-20 hover:!bg-neutral-700 hover:bg-opacity-40',
    },
  },
  draggingConfig: {
    className: 'bg-blue-700',
    icon: <span className="text-4xl animate-ping">🛳️</span>,
  },

  containerOfImages: {
    className: 'bg-blue-500',
  },
  previewImage: {
    image: {
      className: 'bg-neutral-100',
    },
    shadowLayer: {
      className: 'bg-blue-600 bg-opacity-40',
    },
  },
};
const yellowScheme: ImageUploaderConfig = {
  dropArea: {
    className: 'bg-yellow-500 text-neutral-100 text-2xl letter font-bold',
    icon: <span className="text-4xl">🏖️</span>,
    text: 'Drop here your images',
  },
  buttons: {
    addImage: {
      text: 'Find my images',
      className:
        '!bg-yellow-700 hover:!bg-yellow-800 hover:text-neutral-300 border-none   text-base font-bold text-neutral-100',
    },
    deleteAll: {
      className: '!bg-red-500',
    },
    deleteOneImage: {
      className:
        'bg-neutral-300 !bg-opacity-20 hover:!bg-neutral-700 hover:bg-opacity-40',
    },
  },
  draggingConfig: {
    className: 'bg-yellow-700',
    icon: <span className="text-4xl ">🏖️</span>,
  },

  containerOfImages: {
    className: 'bg-yellow-500',
  },
  previewImage: {
    image: {
      className: 'bg-neutral-100',
    },
    shadowLayer: {
      className: 'bg-yellow-600 bg-opacity-40',
    },
  },
};
const pinkScheme: ImageUploaderConfig = {
  dropArea: {
    className:
      'bg-pink-500 text-neutral-100 text-2xl letter font-bold duration-150',
    text: 'Drop here your images',
    icon: <span className=" duration-200 text-4xl">✨</span>,
  },
  buttons: {
    addImage: {
      text: 'Find my images',
      className:
        '!bg-pink-700 hover:!bg-pink-800 hover:text-neutral-300 border-none border-none  text-base font-bold text-neutral-100',
    },
    deleteAll: {
      className: '!bg-red-500',
    },
    deleteOneImage: {
      className:
        'bg-neutral-300 !bg-opacity-20 hover:!bg-neutral-700 hover:bg-opacity-40',
    },
  },
  draggingConfig: {
    className: 'bg-pink-700 duration-150 ',
    icon: <span className="duration-200 text-6xl">✨</span>,
  },

  containerOfImages: {
    className: 'bg-pink-500 rounded-lg',
    counter: {
      withCounter: true,
      icon: <span className="text-2xl">💖</span>,
      iconPosition: 'right',
      className: ' text-red-800   px-2 font-bold gap-2',
    },
  },
  previewImage: {
    image: {
      className: 'bg-neutral-100',
    },
    shadowLayer: {
      className: 'bg-pink-600 bg-opacity-40',
    },
  },
};
const blackScheme: ImageUploaderConfig = {
  dropArea: {
    className: 'bg-neutral-900 text-neutral-100 text-2xl letter font-bold',
    icon: <span className="text-4xl">🌚</span>,
    text: 'Drop here your images',
  },
  buttons: {
    addImage: {
      text: 'Find my images',
      className:
        '!bg-neutral-700 hover:!bg-neutral-800 hover:text-neutral-300 border-none   text-base font-bold text-neutral-100',
    },
    deleteAll: {
      className: '!bg-red-600',
    },
    deleteOneImage: {
      className:
        'bg-neutral-300 !bg-opacity-20 hover:!bg-neutral-700 hover:bg-opacity-40',
    },
  },
  draggingConfig: {
    className: 'bg-neutral-700',
    icon: <span className="text-4xl ">🌚</span>,
  },

  containerOfImages: {
    className: 'bg-neutral-900',
  },
  previewImage: {
    image: {
      className: 'bg-neutral-100',
    },
    shadowLayer: {
      className: 'bg-neutral-600 bg-opacity-40',
    },
  },
};
const redScheme: ImageUploaderConfig = {
  dropArea: {
    className:
      'bg-red-600 text-neutral-100 text-2xl letter font-bold duration-150',
    text: 'Drop here your images',
  },
  buttons: {
    addImage: {
      text: 'Find my images',
      className:
        '!bg-red-500 hover:!bg-red-800 hover:text-neutral-300 border-none border-none  text-base font-bold text-neutral-100',
    },
    deleteAll: {
      className: '!bg-red-500',
      iconPosition: 'right',
    },
    deleteOneImage: {
      className:
        'bg-neutral-300 !bg-opacity-20 hover:!bg-neutral-700 hover:bg-opacity-40',
    },
  },
  draggingConfig: {
    className: 'bg-red-700 duration-150 ',
  },

  containerOfImages: {
    className: 'bg-red-600 rounded-lg',
    counter: {
      withCounter: true,
      iconPosition: 'right',
      className: ' text-red-800   px-2 font-bold gap-2',
    },
  },
  previewImage: {
    image: {
      className: 'bg-neutral-100',
    },
    shadowLayer: {
      className: 'bg-red-600 bg-opacity-40',
    },
  },
};
const greenScheme: ImageUploaderConfig = {
  dropArea: {
    className: 'bg-green-500 text-neutral-100 text-2xl letter font-bold',
    text: 'Drop here your images',
  },
  buttons: {
    addImage: {
      text: 'Find my images',
      className:
        '!bg-green-700 hover:!bg-green-800 hover:text-neutral-300 border-none shadow shadow-neutral-600  text-base font-bold text-neutral-100',
    },
    deleteAll: {
      className: '!bg-red-500',
    },
    deleteOneImage: {
      className:
        'bg-neutral-300 !bg-opacity-20 hover:!bg-neutral-700 hover:bg-opacity-40',
    },
  },
  draggingConfig: {
    className: 'bg-green-700',
  },

  containerOfImages: {
    className: 'bg-green-500',
  },
  previewImage: {
    image: {
      className: 'bg-neutral-100',
    },
    shadowLayer: {
      className: 'bg-green-600 bg-opacity-40',
    },
  },
};
const purpleScheme: ImageUploaderConfig = {
  dropArea: {
    className: 'bg-purple-500 text-neutral-100 text-2xl letter font-bold',
    text: 'Drop here your images',
  },
  buttons: {
    addImage: {
      text: 'Find my images',
      className:
        '!bg-purple-700 hover:!bg-purple-800 hover:text-neutral-300 border-none shadow shadow-neutral-600  text-base font-bold text-neutral-100',
    },
    deleteAll: {
      className: '!bg-red-500',
    },
    deleteOneImage: {
      className:
        'bg-neutral-300 !bg-opacity-20 hover:!bg-neutral-700 hover:bg-opacity-40',
    },
  },
  draggingConfig: {
    className: 'bg-purple-700',
  },

  containerOfImages: {
    className: 'bg-purple-500',
  },
  previewImage: {
    image: {
      className: 'bg-neutral-100',
    },
    shadowLayer: {
      className: 'bg-purple-600 bg-opacity-40',
    },
  },
};

const ballScheme: ImageUploaderConfig = {
  dropArea: {
    className:
      'bg-green-500 text-neutral-100 text-2xl letter font-bold duration-150',
    text: 'Drop here your images',
    icon: <span className=" duration-200 text-4xl">⚽</span>,
  },
  buttons: {
    addImage: {
      text: 'Find my images',
      className:
        '!bg-green-700 hover:!bg-green-800 hover:text-neutral-300 border-none border-none  text-base font-bold text-neutral-100',
    },
    deleteAll: {
      className: '!bg-red-500',
    },
    deleteOneImage: {
      className:
        'bg-neutral-300 !bg-opacity-20 hover:!bg-neutral-700 hover:bg-opacity-40',
    },
  },
  draggingConfig: {
    className: 'bg-green-700 duration-150 ',
    icon: <span className="duration-200  animate-bounce text-6xl">⚽</span>,
  },

  containerOfImages: {
    className: 'bg-green-500 rounded-lg',
    counter: {
      withCounter: true,
    },
  },
  previewImage: {
    image: {
      className: 'bg-neutral-100',
    },
    shadowLayer: {
      className: 'bg-green-600 bg-opacity-40',
    },
  },
};
const galaxyScheme: ImageUploaderConfig = {
  dropArea: {
    className:
      'bg-gradient-to-t from-purple-900 to-neutral-900 text-neutral-100 text-2xl letter font-bold duration-150 ',
    text: 'Lunch your images to the space',
    icon: (
      <div className=" text-4xl">
        <div className="!-skew-y-[16deg] ">🌌</div>
      </div>
    ),
  },
  buttons: {
    addImage: {
      text: '🛰️ Explore the gallery',
      className:
        ' tracking-widest !bg-gradient-to-bl !from-fuchsia-900 !to-blue-800 hover:!from-fuchsia-700 hover:!to-blue-700 hover:text-neutral-300 border-none border-none  text-base font-bold text-neutral-100 duration-200 hover:!shadow-lg hover:!shadow-yellow-500',
    },
    deleteAll: {
      text: '🌍 Abort mission',
      className:
        '!bg-gradient-to-tr from-neutral-800 to-blue-800 rounded-lg hover:!to-red-600',
    },
    deleteOneImage: {
      text: '💥 Crash',
      className:
        '!bg-gradient-to-b from-neutral-800 to-purple-900 rounded-lg hover:!to-red-600',
    },
  },
  draggingConfig: {
    className: 'bg-green-700 duration-150 ',
    icon: (
      <div className=" !animate-spin animate-infinite !animate-duration-[5000ms] text-4xl ">
        <div className="!-skew-y-[16deg]  ">🌌</div>
      </div>
    ),
  },

  containerOfImages: {
    className:
      'bg-gradient-to-tl from-blue-900 via-purple-900 to-neutral-900 rounded-lg',
    counter: {
      withCounter: true,
    },
  },
  previewImage: {
    image: {
      className: 'bg-gradient-to-br from-blue-800 to-purple-900 rounded-lg ',
    },
  },
};

export const colorSchemes: { [color in ColorSchemes]: ImageUploaderConfig } = {
  base: baseScheme,
  blue: blueScheme,
  pink: pinkScheme,
  yellow: yellowScheme,
  ball: ballScheme,
  galaxy: galaxyScheme,
  black: blackScheme,
  green: greenScheme,
  purple: purpleScheme,
  red: redScheme,
};
