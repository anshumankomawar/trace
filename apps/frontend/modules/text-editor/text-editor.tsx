import * as React from "react";
import { useState, useMemo } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { Descendant } from 'slate'

const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor() as any), []);
  // Add the initial value when setting up our state.
  const [value, setValue] = React.useState<Descendant[]>([{ children: [{ text: "This is the inital value of this text field" }] }]);

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable />
    </Slate>
  );
};

export default TextEditor;
