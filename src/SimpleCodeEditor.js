import React, { useState, useEffect } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Select } from '@chakra-ui/react'

export const SimpleCodeEditor = () => {
  const [code, setCode] = useState(
    ``
  );

  const [selectedLang, setSelectedLang] = useState('html');

  useEffect(() => {
    console.log(code);
    console.log(selectedLang);
  }, [code, selectedLang]);

  return (
    <>
      <Select placeholder='Select option' onChange={(e) => setSelectedLang(e.target.value)}>
        <option value='html'>HTML</option>
        <option value='css'>CSS</option>
        <option value='js'>JS</option>
      </Select>
      <CodeEditor
        value={code}
        language={selectedLang}
        placeholder={`Please enter ${selectedLang.toUpperCase()} code.`}
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </>
  );
};


