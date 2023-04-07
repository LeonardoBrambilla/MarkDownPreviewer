import { useState } from 'react'
import {ArrowsOut,ArrowsIn} from 'phosphor-react'
import {marked} from 'marked';
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [state,setState] = useState(true)
  const [preview,setPreview] = useState(true)
  function getMarkdownText() {
    const rawMarkup = marked(text);
    return { __html: rawMarkup };
  }

  return (
    <div className="App">
      {preview &&
      <div className='editor'>
        <div className='toolbar'>
          Editor
          {state &&
            <ArrowsOut onClick={()=>setState(false)} size={26} />
          }
          {!state &&
            <ArrowsIn onClick={()=>setState(true)} size={26} />
          }
        </div>
        <textarea className='textEditor' style={{minHeight: state ? 200 : 900}} onChange={(e)=>setText(e.target.value)} value={text} type="text"/>
      </div>
      }
      <div className='preview'>
        <div className='toolbar'>
          Preview
          {preview &&
            <ArrowsOut onClick={()=>setPreview(false)} size={26} />
          }
          {!preview &&
            <ArrowsIn onClick={()=>setPreview(true)} size={26} />
          }
        </div>
        <div className='text' dangerouslySetInnerHTML={getMarkdownText()}></div>
      </div>
    </div>
  )
}

export default App
