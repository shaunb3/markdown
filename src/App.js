import React, {Component} from 'react';
import './App.css';
import marked from 'marked';
 import ReactFCCtest from 'react-fcctest';
//import Editor from './components/Editor';
//import Preview from './components/Preview';




class App extends Component {

  state={text:
  `# text here 
  
  ## heading
  
   [markdown syntax](https://daringfireball.net/projects/markdown/syntax#link) inline link.

   - list item 1
   - list item 2
   - list item 3

   ![Alt text](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

   > blockquote snytax looks liek this

   to make text **bold**

   in line code \`<div></div>\` 

   block of code
   \`\`\`
    <div>
      <h2><h2>
    <div>
   \`\`\`

  `
  
  }

  
handleChange=(event)=>{
  this.setState({text: event.target.value})
}

  render(){
 const {text}= this.state
 const markdown = marked(text)

    return (
    <div className="App">
      <textarea id="editor" onChange={this.handleChange}>
        {this.state.text}
        </textarea>

        <div id="preview" dangerouslySetInnerHTML={{__html:marked(markdown)}}>
        
        </div>
         <ReactFCCtest />
    </div>
  );
  }
  
}

export default App;
