import React, { useEffect, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import QuillEditorComp from '../QuillEditor/QuillEditorComp';
import ArticleEditorToolbar from './ArticleEditorToolbar';

export interface IArticleEditorProps {}

const ArticleEditor: React.FC<IArticleEditorProps> = (props) => {
  const [editor, setEditor] = useState<Quill>();
  const myref = useRef<ReactQuill | null>(null);

  useEffect(() => {
    setEditor(myref.current?.getEditor());
  }, []);

  return (
    <>
      <QuillEditorComp
        toolbar={<ArticleEditorToolbar editor={editor} />}
        ref={myref}
      />
    </>
  );
};

export default ArticleEditor;
