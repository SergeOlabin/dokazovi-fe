import React, { useEffect, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import QuillEditorComp from '../QuillEditor/QuillEditorComp';
import NoteEditorToolbar from './NoteEditorToolbar';

export interface INoteEditorProps {}

const NoteEditor: React.FC<INoteEditorProps> = (props) => {
  const [editor, setEditor] = useState<Quill>();
  const myref = useRef<ReactQuill | null>(null);

  useEffect(() => {
    setEditor(myref.current?.getEditor());
  }, []);

  return (
    <>
      <QuillEditorComp
        toolbar={<NoteEditorToolbar editor={editor} />}
        ref={myref}
      />
    </>
  );
};

export default NoteEditor;
