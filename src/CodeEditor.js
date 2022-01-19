import React, { useEffect } from 'react';
import { Box, Textarea, Button } from '@chakra-ui/react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { Helmet } from "react-helmet";
export const CodeEditor = () => {
    const [jsCode, setJsCode] = React.useState(null);

    // useEffect(() => {

    //     const script = document.createElement("script");

    //     script.innerText = jsCode;
    //     script.async = true;

    //     document.body.appendChild(script);
    // },[jsCode])
    const saveToHTML = () => {
        const script = document.createElement("script");

        script.innerHTML = jsCode;
        script.async = true;

        document.body.appendChild(script);
    }
    return <>
        <CodeMirror
            value="console.log('hello world!');"
            height="200px"
            extensions={[javascript({ jsx: true })]}
            onChange={(value, viewUpdate) => {
                setJsCode(value);
            }}
        />

        <Box>
            {jsCode}
        </Box>
        <div className="application">
            <Helmet>
                <script>
                    {jsCode}
                </script>
            </Helmet>
        </div>
        <Button onClick={saveToHTML}>Save Script</Button>
    </>
};
