# React Image Uploader

A simple form to upload images and return base64 files.
Compatible with react-hooks-forms and formik.

# How work

The component take the images who enter by a input (`type:file`). Later transforms that files to base64 array and uses the same array to render a gallery with the images and execute the `setFieldValue` function.
Every image have a "delete" button individually. The gallery have a "delete all" button too and a "counter" of images.
Support drag and drop

# How use with forms packages

For a simple way to integrate with a formularies this component provide a `prop` called `setFieldValue` this recieves a function which change the value of the field. Used that with the `name` property to set the input name.

## Formik

## Resact hook forms

# Presonalization 🎨

Every part of the component should be personalized. Have support for inline-styles(`CSSProperties`) and classNames(`string`)

# Drag and Drop

You can execute functions in the `onDragOver` `onDragLeave` `onDrop` events.
include any of this events on the config object
