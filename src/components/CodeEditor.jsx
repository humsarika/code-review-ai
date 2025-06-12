import { useEffect,useState,React } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

const CodeEditor = ({ code, setCode }) => {
     const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setFontSize(12); // mobile font
      } else {
        setFontSize(16); // normal font
      }
    };

    handleResize(); // on mount
    window.addEventListener('resize', handleResize); // on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    return (
        <div className='editor-container'>
            <Editor
                value={code}
                onValueChange={setCode}
                highlight={code => highlight(code, languages.js)}
                padding={15}
                style={{
                    fontFamily: '"Fira Code", monospace',
                    fontSize: fontSize,
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
