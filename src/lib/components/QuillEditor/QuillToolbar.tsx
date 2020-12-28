import React from 'react';
import { Quill } from 'react-quill';
import './editor.styles.css';
import TestComp from './CustomModules/TestComp';

export interface IQuillToolbarProps {
  editor?: Quill;
}

// interface IExtraQuillField extends Quill {
//   whitelist: string[];
// }

// const Font = Quill.import('formats/font') as IExtraQuillField;
// const Size = Quill.import('formats/size') as IExtraQuillField;

// Font.whitelist = [
//   'arial',
//   'comic-sans',
//   'courier-new',
//   'georgia',
//   'helvetica',
//   'lucida',
// ];

// Size.whitelist = ['extra-small', 'small', 'medium', 'large'];

// Quill.register(Size, true);
// Quill.register(Font, true);

// function imageHandler() {
//     const range = Quill.getSelection();
//     const value = prompt('What is the image URL');
//     if(value) {
//       Quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
//     }
// };

const QuillToolbar: React.FC<IQuillToolbarProps> = ({ editor }) => {
  // useEffect(() => {
  //   if (haRef) TestComp(haRef);
  // }, [haRef]);
  console.log(editor);

  return (
    <div id="toolbar">
      <span className="ql-formats">
        <select className="ql-font">
          <option value="arial">Arial</option>
          {/* <option value="comic-sans">Comic Sans</option>
          <option value="courier-new">Courier New</option>
          <option value="georgia">Georgia</option>
          <option value="helvetica">Helvetica</option>
          <option value="lucida">Lucida</option> */}
        </select>
        <select className="ql-size">
          {/* <option value="extra-small">Size 1</option>
          <option value="small">Size 2</option> */}
          <option value="medium">Size 1</option>
          {/* <option value="large">Size 4</option> */}
        </select>
        <select
          className="ql-header"
          defaultValue=""
          onBlur={(e) => e.persist()}
        >
          <option value="1">Заголовок 1</option>
          <option value="2">Заголовок 2</option>
          <option value="" selected>
            Звичайний
          </option>
        </select>
      </span>
      <span className="ql-formats">
        <button title="Bold" type="button" className="ql-bold" />
        <button title="Italic" type="button" className="ql-italic" />
        <button title="Underline" type="button" className="ql-underline" />
        <button title="Strike" type="button" className="ql-strike" />
      </span>
      <span className="ql-formats">
        <button
          title="Ordered List"
          type="button"
          className="ql-list"
          value="ordered"
        />
        <button
          title="Unordered List"
          type="button"
          className="ql-list"
          value="bullet"
        />
        <button
          title="Left Indent"
          type="button"
          className="ql-indent"
          value="-1"
        />
        <button
          title="Right Indent"
          type="button"
          className="ql-indent"
          value="+1"
        />
      </span>
      <span className="ql-formats">
        <button
          title="Super"
          type="button"
          className="ql-script"
          value="super"
        />
        <button title="Sub" type="button" className="ql-script" value="sub" />
        <button title="Blockquote" type="button" className="ql-blockquote" />
        {/* <button title="Direction" type="button" className="ql-direction" /> */}
      </span>
      <span className="ql-formats">
        <select title="Align" className="ql-align" />
        {/* <select title="Color" className="ql-color" /> */}
        {/* <select title="Background" className="ql-background" /> */}
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
      <button title="Link" type="button" className="ql-link" />

      <button title="Video" type="button" className="ql-video" />
      <span className="ql-formats">
        {/* <button title="Formula" type="button" className="ql-formula" /> */}
        {/* <button title="Code-block" type="button" className="ql-code-block" /> */}
        <button title="Clean formatting" type="button" className="ql-clean" />
      </span>
      {/* {haRef
        ? haRef.insertEmbed(
            10,
            'image',
            'https://www.iguides.ru/upload/iblock/65b/65b7f6899b3232aab17f9dc0995eb094.jpg',
          )
        : null} */}
    </div>
  );
};

export default QuillToolbar;
