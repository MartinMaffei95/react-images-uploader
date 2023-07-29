# React Image Uploader

A simple input component to upload images and return base64 files.
⚡ Ready for integration with react-hooks-forms or formik.
⚡ Easy to personalize the style with Tailwind

# How work

The component take the images who enter by a input (`type:file`). Later transforms that files to base64 array and uses the same array to render a gallery with the images and execute the `setFieldValue` function.
Every image have a "delete" button individually. The gallery have a "delete all" button too and a "counter" of images.
Support drag and drop

# How use

For a simple way to integrate with a formularies this component provide a `prop` called `setFieldValue` this recieves a function which change the value of the field. Used that with the `name` property to set the input name.

## Simple way

The `setFieldValue` uses the `fieldName` and saves the input value on them.

```tsx
import { useState } from 'react';
import { ImageUploader, Image } from 'image-uploader';

const MyComponent = () => {
  const [values, setValues] = useState<{ [name: string]: Image[] }>();
  const setFieldValue = (name: string, value: any) => {
    setValues((state) => ({
      ...state,
      [name]: value,
    }));
  };
  return (
    <ImageUploader
      config={{
        inputConfig: {
          fieldName: 'simpleInputForm',
          setFieldValue,
        },
      }}
    />
  );
};

export default MyComponent;
```

## Formik

Its really simple using the component with formik. In this example we destruct the `useFiedlValue` function from the `useFormik()`. Only need give that function to the component with a field name.

```tsx
import ImageUploader from 'image-uploader';
import { Image } from 'image-uploader';
import { useFormik } from 'formik';

const MyComponent = () => {
  // create the initialValue for Formik with her type
  const initialValues = {
    formikInputImages: [],
  };

  type formikInputForm = {
    formikInputImages: Image[];
  };
  //create the onSubmit function for Formik
  const onSubmit = () => {};

  //Destructuring the setFieldValue function from useFormik()
  const { setFieldValue } = useFormik<formikInputForm>({
    initialValues: initialValues,
    onSubmit,
  });

  return (
    <ImageUploader
      config={{
        setFieldValue,
        fieldName: 'formikInputImages',
      }}
    />
  );
};

export default MyComponent;
```

## React hook forms

We mantain the same simplicity using RHF. Destruct the `setValue` function from `useForm()` and give that function to the component. Not forgive the `fieldName`.
In this particulare case we use the `watch` function to. We use for observe changes on the state and update correctly the form value.

```tsx
import ImageUploader from '../components/ImageUploader/components/ImageUploader';
import { FaImages } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const MyComponent = () => {
  const { setValue, watch } = useForm();
  watch(['rofInputImages']);

  return (
    <ImageUploader
      config={{
        setFieldValue: setValue,
        fieldName: 'rofInputImages',
      }}
    />
  );
};

export default MyComponent;
```

# Drag and Drop

You can execute functions in the `onDragOver` `onDragLeave` `onDrop` events.
include any of this events on the config object

```tsx
<ImageUploader
  config={{
    inputConfig: {
      fieldName: 'simpleInputForm',
      setFieldValue,
    },
    dragAndDropEvents: {
      onDragLeave: (e) => console.log('ON DRAG LEAVE EVENT', e),
      onDragOver: (e) => console.log('ON DRAG OVER EVENT', e),
      onDrop: (e) => console.log('ON DROP EVENT', e),
    },
  }}
/>
```

# Presonalization 🎨

Every part of the component should be personalized. Have support for inline-styles(`CSSProperties`) and classNames(`string`) -- ptss... its compatible with tailwind 😉.
The `config` object is divide diferent objects who represents every part of the component.

<table>
  <thead>
    <tr>
      <th>Inside of</th>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default value</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td rowspan="2">inputConfig</td>
    <td>fieldName</td>
    <td>The name of the field </td>
    <td>string</td>
    <td>images</td>
  </tr>
  <tr>
    <td>setFieldValue</td>
    <td>This function is used for set the value of a external state using the <md>fieldName</md> </td>
    <td> (inputName: string, value: Image[]) => void</td>
    <td></td>
  </tr>

  <tr>
    <td rowspan="5">dropArea</td>
    <td>className</td>
    <td>The className of the drop box</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>style</td>
    <td>Inline-style of the drop box</td>
    <td>CSSProperties</td>
    <td></td>
  </tr>
  <tr>
    <td>text</td>
    <td>The text of the drop box</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>icon</td>
    <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt;</td>
    <td>ReactNode</td>
    <td></td>
  </tr>
  <tr>
    <td>iconPosition</td>
    <td>This string represents the position of the icon respects a text</td>
    <td>'bottom' | 'top' | 'left' | 'right'</td>
    <td></td>
  </tr>

   <tr>
    <td rowspan="5">draggingConfig</td>
    <td>className</td>
    <td>The className of the drop box when is dragging over the dropBox.</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>style</td>
    <td>Inline-style of the drop box when is dragging over the dropBox.</td>
    <td>CSSProperties</td>
    <td></td>
  </tr>
  <tr>
    <td>text</td>
    <td>The text of the drop box when is dragging over the dropBox.</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>icon</td>
    <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt; .This replace the dropBox icon</td>
    <td>ReactNode</td>
    <td></td>
  </tr>
  <tr>
    <td>iconPosition</td>
    <td>This string represents the position of the icon respects a text. This replace the dropBox iconPosition</td>
    <td>'bottom' | 'top' | 'left' | 'right'</td>
    <td></td>
  </tr>

   <tr>
    <td rowspan="2">imagesContainer</td>
    <td>className</td>
    <td>The className of the images slider</td>
    <td>string</td>
    <td></td>
  </tr>
   <tr>
    <td>style</td>
    <td>The inlineStyle object of the images slider</td>
    <td>CSSProperties</td>
    <td></td>
  </tr>
    <tr>
    <td rowspan="6">imagesContainer.counter</td>
    <td>withCounter</td>
    <td>This define if show or not the images counter.</td>
    <td>boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>className</td>
    <td>The className of the counter of images</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>style</td>
    <td>Inline-style of the counter of images</td>
    <td>CSSProperties</td>
    <td></td>
  </tr>
  <tr>
    <td>text</td>
    <td>The text of the counter of images</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>icon</td>
    <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt;</td>
    <td>ReactNode</td>
    <td></td>
  </tr>
  <tr>
    <td>iconPosition</td>
    <td>This string represents the position of the icon respects a text</td>
    <td>'bottom' | 'top' | 'left' | 'right'</td>
    <td></td>
  </tr>
     <tr>
    <td rowspan="2">imageElement.image</td>
    <td>className</td>
    <td>The className of the images</td>
    <td>string</td>
    <td></td>
  </tr>
   <tr>
    <td>style</td>
    <td>The inlineStyle object of the images</td>
    <td>CSSProperties</td>
    <td></td>
  </tr>
       <tr>
    <td rowspan="2">imageElement.shadowLayer</td>
    <td>className</td>
    <td>The className of shadow who is over the image</td>
    <td>string</td>
    <td></td>
  </tr>
   <tr>
    <td>style</td>
    <td>The inlineStyle object of shadow who is over the image</td>
    <td>CSSProperties</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="5">buttons.addImage</td>
    <td>className</td>
    <td>The className of the button</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>style</td>
    <td>Inline-style of the button</td>
    <td>CSSProperties</td>
    <td></td>
  </tr>
  <tr>
    <td>text</td>
    <td>The text of the button</td>
    <td>string</td>
    <td>Browse images</td>
  </tr>
  <tr>
    <td>icon</td>
    <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt;</td>
    <td>ReactNode</td>
    <td></td>
  </tr>
  <tr>
    <td>iconPosition</td>
    <td>This string represents the position of the icon respects a text</td>
    <td>'bottom' | 'top' | 'left' | 'right'</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="5">buttons.deleteAll</td>
    <td>className</td>
    <td>The className of the button</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>style</td>
    <td>Inline-style of the button</td>
    <td>CSSProperties</td>
    <td></td>
  </tr>
  <tr>
    <td>text</td>
    <td>The text of the button</td>
    <td>string</td>
    <td>Delete all</td>
  </tr>
  <tr>
    <td>icon</td>
    <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt;</td>
    <td>ReactNode</td>
    <td></td>
  </tr>
  <tr>
    <td>iconPosition</td>
    <td>This string represents the position of the icon respects a text</td>
    <td>'bottom' | 'top' | 'left' | 'right'</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="5">buttons.deleteOneImage</td>
    <td>className</td>
    <td>The className of the button</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>style</td>
    <td>Inline-style of the button</td>
    <td>CSSProperties</td>
    <td></td>
  </tr>
  <tr>
    <td>text</td>
    <td>The text of the button</td>
    <td>string</td>
    <td>Delete</td>
  </tr>
  <tr>
    <td>icon</td>
    <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt;</td>
    <td>ReactNode</td>
    <td></td>
  </tr>
  <tr>
    <td>iconPosition</td>
    <td>This string represents the position of the icon respects a text</td>
    <td>'bottom' | 'top' | 'left' | 'right'</td>
    <td></td>
  </tr>

  </tbody>
</table>

# Dependencies used

- Tailwind : All styles has made whit Tailwind
- tailwind-merge : to make easy the integration with tailwind
- uuid : used for make ids for every image.

# On the future

⭐ On work: Complete color design like `colorScheme` of ChakraUI. This provide a styled component, reduces the time of presonalization

# Licence

MIT Licence
