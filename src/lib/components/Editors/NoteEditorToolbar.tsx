import React from 'react';
import { Quill } from 'react-quill';
import '../QuillEditor/editor.styles.css';
import TestComp from '../QuillEditor/CustomModules/TestComp';

export interface INoteEditorToolbarProps {
  editor?: Quill;
}

const NoteEditorToolbar: React.FC<INoteEditorToolbarProps> = ({ editor }) => {
  return (
    <div id="toolbar">
      <span className="ql-formats">
        <button title="Underline" type="button" className="ql-underline" />
        <button title="Bold" type="button" className="ql-bold" />
        <button title="Italic" type="button" className="ql-italic" />
      </span>

      <span className="ql-formats">
        <button
          type="button"
          onClick={() => {
            document.querySelector('.testClass')?.classList.toggle('hide');
          }}
        >
          Test
        </button>
        <span className="testClass hide">
          <span>
            <button title="З комп'ютера" type="button" className="ql-image" />
            <button
              title="За посиланням"
              type="button"
              onClick={() => TestComp(editor)}
            >
              link
            </button>
          </span>
        </span>
      </span>
    </div>
  );
};

export default NoteEditorToolbar;
