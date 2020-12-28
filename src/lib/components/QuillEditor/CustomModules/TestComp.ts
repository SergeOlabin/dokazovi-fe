import { Quill } from 'react-quill';

const upload = (url: string) => {
  return new Promise((resolve, reject) => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Client-ID 4415dae57a57524');

    const formData = new FormData();
    formData.append('image', url);

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
};

const insert = (editor?: Quill) => {
  let url: string | null = '';
  url = prompt('url');

  if (editor && url) {
    const range = editor.getSelection(true);

    upload(url)
      .then((data) => {
        if (data) {
          editor.insertEmbed(range.index, 'image', data);
          range.index += 1;
          editor.setSelection(range, 'user');
        }
      })
      .catch((e) => String(e));
  }
};

export default insert;
