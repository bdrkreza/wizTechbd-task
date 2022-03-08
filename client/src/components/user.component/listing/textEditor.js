/* eslint-disable react-hooks/rules-of-hooks */

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function TextEditor({setDescription,description}) {
  const toolbarOptions = {
    options: ["inline", "list", "link"],
    list: {
      options: ["unordered", "ordered"],
    },
    inline: {
      options: ["bold", "italic", "underline"],
    },

    link: {
      options: ["link"],
    },
  };

  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };

  return (
    <div style={{ minHeight: "200px", border: "solid 1px #F3F3F3" }}>
      <Editor
        editorState={description}
        placeholder="Enter email body"
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        toolbar={toolbarOptions}
      />
    </div>
  );
}
