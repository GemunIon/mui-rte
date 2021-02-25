import React, {FC} from "react";
import {EditorState, convertToRaw} from "draft-js";

import {RichTextEditor} from "../../src";


const save = (data: string) => {
  console.log(data);
};

const change = (state: EditorState) => {
  // More info about EditorState object at
  // https://draftjs.org/docs/api-reference-editor-state
  //
  // Get current selection
  console.log(state.getSelection());
  // Get current content
  console.log(JSON.stringify(convertToRaw(state.getCurrentContent())));
  // Get current text
  console.log(state.getCurrentContent().getPlainText());
  // Check if editor is empty
  if (!state.getCurrentContent().hasText()) {
    console.log("empty");
  }
};

const focus = () => {
  console.log("Focus on MUIRichTextEditor");
};

const blur = () => {
  console.log("Blur, focus lost on MUIRichTextEditor");
};

export const Events: FC = () => {
  return (
    <RichTextEditor
      label="Open the console to see the event callback as you type..."
      onSave={save}
      onChange={change}
      onFocus={focus}
      onBlur={blur}
    />
  );
};
