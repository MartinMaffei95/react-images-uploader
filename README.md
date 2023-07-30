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
      config={
        inputConfig:{
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
      config={
        inputConfig:{
        setFieldValue: setValue,
        fieldName: 'rofInputImages',
      }}
    />
  );
};

export default MyComponent;
```

# Error & validation

## Validation

On `inputConfig` can set if you want the input accept multiple files -or not- and what type of file they can accept.
You can validate `min` & `max` size of every files. In case of error the component throw a error but, by default, dont executes anything, only executes a exception.

## Error

In the `config` object u have `error.onError` this function will be executed if the `max` or `min` validation throw a Error

```tsx
<ImageUploader
  config={{
    inputConfig: {
      fieldName: 'simpleInputForm',
      setFieldValue,
      min: 1000,
      max: 15000,
      multiple: false,
      accept: '.jpg, .jpeg, .png',
    },
    error: {
      onError: (error) => alert(JSON.stringify(error)),
    },
  }}
/>
```

![Drag Racing](https://raw.githubusercontent.com/MartinMaffei95/react-images-uploader/main/public/galaxyEx.png)

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
If you look a fast style can use the `colorScheme` prop and get a complete styled component. Later u can overwrite every style. This accept `  'base'
  | 'blue'
  | 'pink'
  | 'yellow'
  | 'green'
  | 'red'
  | 'purple'
  | 'black'
  | 'ball'
  | 'galaxy';`

> In the next section show all the props (includes the personalization props).

Fast example:

```tsx
<ImageUploader
  config={{
    colorScheme: 'galaxy',
  }}
/>
```

# All Props

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
      <td rowspan="6">inputConfig</td>
      <td>fieldName</td>
      <td>The name of the field</td>
      <td><code>string</code></td>
      <td>images</td>
    </tr>
    <tr>
      <td>setFieldValue</td>
      <td>This function is used for set the value of a external state using the <md>fieldName</md></td>
      <td><code>(inputName: string, value: Image[]) => void</code></td>
      <td></td>
    </tr>
    <tr>
      <td>multiple</td>
      <td>The <code>multiple</code> prop from the field. Defines if accept one or more files</td>
      <td><code>boolean</code></td>
      <td>false</td>
    </tr>
    <tr>
      <td>min</td>
      <td>The Min size of the accepted of every files. If it is not defined not executes the validation</td>
      <td><code>number</code></td>
      <td></td>
    </tr>
    <tr>
      <td>max</td>
      <td>The Max size of the accepted of every files. If it is not defined not executes the validation</td>
      <td><code>number</code></td>
      <td></td>
    </tr>
    <tr>
      <td>accept</td>
      <td>The <code>accept</code> prop from the field. Defines what type of files accept</td>
      <td><code>string</code></td>
      <td>image/*</td>
    </tr>
    <tr>
      <td>error</td>
      <td>onError</td>
      <td>This function is executed if any of the uploaded files do not pass the min or max validations</td>
      <td><code>(error?: any) => any</code></td>
      <td></td>
    </tr>
    <tr>
      <td>colorScheme</td>
      <td colspan="2">Predefined style. You can mix with another style props and well be overwrite</td>
      <td><code>'base' | 'blue' | 'pink' | 'yellow' | 'green' | 'red' | 'purple' | 'black' | 'ball' | 'galaxy'</code></td>
      <td><code>'base'</code></td>
    </tr>
    <tr>
      <td rowspan="5">dropArea</td>
      <td>className</td>
      <td>The className of the drop box</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>style</td>
      <td>Inline-style of the drop box</td>
      <td><code>CSSProperties</code></td>
      <td></td>
    </tr>
    <tr>
      <td>text</td>
      <td>The text of the drop box</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt;</td>
      <td><code>ReactNode</code></td>
      <td></td>
    </tr>
    <tr>
      <td>iconPosition</td>
      <td>This string represents the position of the icon respects a text</td>
      <td><code>'bottom' | 'top' | 'left' | 'right'</code></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="5">draggingConfig</td>
      <td>className</td>
      <td>The className of the drop box when is dragging over the dropBox.</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>style</td>
      <td>Inline-style of the drop box when is dragging over the dropBox.</td>
      <td><code>CSSProperties</code></td>
      <td></td>
    </tr>
    <tr>
      <td>text</td>
      <td>The text of the drop box when is dragging over the dropBox.</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt;. This replace the dropBox icon</td>
      <td><code>ReactNode</code></td>
      <td></td>
    </tr>
    <tr>
      <td>iconPosition</td>
      <td>This string represents the position of the icon respects a text. This replace the dropBox iconPosition</td>
      <td><code>'bottom' | 'top' | 'left' | 'right'</code></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2">imagesContainer</td>
      <td>className</td>
      <td>The className of the images slider</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>style</td>
      <td>The inlineStyle object of the images slider</td>
      <td><code>CSSProperties</code></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="3">dragAndDropEvents</td>
      <td>onDragOver</td>
      <td>Receives a functions who's be executed on <code>onDragOver</code> event</td>
      <td><code>(event: DragEvent<HTMLDivElement>) => any</code></td>
      <td></td>
    </tr>
    <tr>
      <td>onDragLeave</td>
      <td>Receives a functions who's be executed on <code>onDragLeave</code> event</td>
      <td><code>(event: DragEvent<HTMLDivElement>) => any</code></td>
      <td></td>
    </tr>
    <tr>
      <td>onDrop</td>
      <td>Receives a functions who's be executed on <code>onDrop</code> event</td>
      <td><code>(event: DragEvent<HTMLDivElement>) => any</code></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="6">imagesContainer.counter</td>
      <td>withCounter</td>
      <td>This define if show or not the images counter.</td>
      <td><code>boolean</code></td>
      <td>true</td>
    </tr>
    <tr>
      <td>className</td>
      <td>The className of the counter of images</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>style</td>
      <td>Inline-style of the counter of images</td>
      <td><code>CSSProperties</code></td>
      <td></td>
    </tr>
    <tr>
      <td>text</td>
      <td>The text of the counter of images</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt;</td>
      <td><code>ReactNode</code></td>
      <td></td>
    </tr>
    <tr>
      <td>iconPosition</td>
      <td>This string represents the position of the icon respects a text</td>
      <td><code>'bottom' | 'top' | 'left' | 'right'</code></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2">imageElement.image</td>
      <td>className</td>
      <td>The className of the images</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>style</td>
      <td>The inlineStyle object of the images</td>
      <td><code>CSSProperties</code></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2">imageElement.shadowLayer</td>
      <td>className</td>
      <td>The className of shadow who is over the image</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>style</td>
      <td>The inlineStyle object of shadow who is over the image</td>
      <td><code>CSSProperties</code></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="5">buttons.addImage</td>
      <td>className</td>
      <td>The className of the button</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>style</td>
      <td>Inline-style of the button</td>
      <td><code>CSSProperties</code></td>
      <td></td>
    </tr>
    <tr>
      <td>text</td>
      <td>The text of the button</td>
      <td><code>string</code></td>
      <td>Browse images</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt;</td>
      <td><code>ReactNode</code></td>
      <td></td>
    </tr>
    <tr>
      <td>iconPosition</td>
      <td>This string represents the position of the icon respects a text</td>
      <td><code>'bottom' | 'top' | 'left' | 'right'</code></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="5">buttons.deleteAll</td>
      <td>className</td>
      <td>The className of the button</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>style</td>
      <td>Inline-style of the button</td>
      <td><code>CSSProperties</code></td>
      <td></td>
    </tr>
    <tr>
      <td>text</td>
      <td>The text of the button</td>
      <td><code>string</code></td>
      <td>Delete all</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt;</td>
      <td><code>ReactNode</code></td>
      <td></td>
    </tr>
    <tr>
      <td>iconPosition</td>
      <td>This string represents the position of the icon respects a text</td>
      <td><code>'bottom' | 'top' | 'left' | 'right'</code></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="5">buttons.deleteOneImage</td>
      <td>className</td>
      <td>The className of the button</td>
      <td><code>string</code></td>
      <td></td>
    </tr>
    <tr>
      <td>style</td>
      <td>Inline-style of the button</td>
      <td><code>CSSProperties</code></td>
      <td></td>
    </tr>
    <tr>
      <td>text</td>
      <td>The text of the button</td>
      <td><code>string</code></td>
      <td>Delete</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Is a React node, so accepts a &lt;img/&gt;, react-icon or a &lt;icon/&gt;</td>
      <td><code>ReactNode</code></td>
      <td></td>
    </tr>
    <tr>
      <td>iconPosition</td>
      <td>This string represents the position of the icon respects a text</td>
      <td><code>'bottom' | 'top' | 'left' | 'right'</code></td>
      <td></td>
    </tr>

  </tbody>
</table>

# Dependencies in use

- Tailwind : All styles has made whit TailwindCss
- tailwind-merge : to make easy the integration with tailwind
- tailwind-animated : uses in some `colorSchemes`
- uuid : used for make ids for every image.

# Last Updates

> 1.1.0
> Added `colorSchemes` config.
> the validations of `min` & `max` size is ready
> Added the `onError` prop

> 1.0.0
> First up

# Licence

MIT Licence
