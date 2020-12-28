/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Quill } from 'react-quill';
import { StringMap } from 'quill';
import ImageUploader from 'quill-image-uploader';
import ImageResize from 'quill-image-resize-module-react';

// import Counter from './CounterCustom/Counter';

// Quill.register('modules/Counter', Counter);
Quill.register('modules/imageUploader', ImageUploader);
Quill.register('modules/imageResize', ImageResize);

export const modules: StringMap = {
  toolbar: {
    container: '#toolbar',
  },
  imageResize: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    parchment: Quill.import('parchment'),
  },
  imageUploader: {
    upload: (file) => {
      return new Promise((resolve, reject) => {
        const myHeaders = new Headers();
        myHeaders.append('Authorization', 'Client-ID 4415dae57a57524');

        const formData = new FormData();
        formData.append('image', file);

        fetch('https://api.imgur.com/3/image', {
          method: 'POST',
          body: formData,
          headers: myHeaders,
          redirect: 'follow',
        })
          .then((response) => response.json())
          .then((result) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            resolve(result.data.link);
          })
          .catch((error) => {
            reject(error);
            console.error('Error:', error);
          });
      });
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

export const formats: string[] = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'align',
  'strike',
  'script',
  'blockquote',
  // 'background',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  // 'color',
  // 'code-block',
  'clean',
];
