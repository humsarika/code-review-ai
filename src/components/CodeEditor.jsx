import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

const CodeEditor = ({ code, setCode }) => {
    return (
        <div className='editor-container'>
            <Editor
                value={code}
                onValueChange={setCode}
                highlight={code => highlight(code, languages.js)}
                padding={15}
                style={{
                    fontFamily: '"Fira Code", monospace',
                    fontSize: 18,
                    backgroundColor: '#2d2d2d',
                    color: '#f8f8f2',
                    borderRadius: '8px',
                    minHeight: '300px',
                }}
            />
        </div>
    );
};

export default CodeEditor;
