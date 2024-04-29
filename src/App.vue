<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div id="monacoEditor"></div>
    <button @click="insert">中间插入代码</button>
    <textarea id="editor" placeholder="Balabala" autofocus></textarea>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import * as monaco from "monaco-editor";
import 'simple-module';
import 'simple-hotkeys';
import 'simple-uploader';
import * as simditor from 'simditor';
console.log(simditor);
export default {
  name: 'App',
  data() {
    return {
      msg: ['let d = 0;', 'let e = 1;', 'let f = 1;'].join('\n'),
      monacoEditor: null,
      range: {

      }
    }
  },
  components: {
    HelloWorld,
  },
  mounted() {

    // new simditor({
    //   textarea: $('#editor')
    // })
    let monacoEditorElement = document.getElementById('monacoEditor')
    this.monacoEditor = monaco.editor.create(monacoEditorElement, {
      value: ['let a = 0;', 'let b = 1;', '// <?co 点击插入代码>', 'let d = 1;'].join('\n'),
      theme: 'vs-dark',
      formatOnPaste: true,
      minimap: {
        enabled: false
      },
      language: 'javascript',
      readOnly: true
    }, {

    })
    this.monacoEditor.onDidChangeModelContent((event) => {
      // console.debug(event, this.monacoEditor.getModel().getValue())
    })
    this.monacoEditor.onDidChangeCursorPosition((event) => {
      console.debug(this.monacoEditor.getModel().getLineContent(event.position.lineNumber), event, this.monacoEditor.getModel().getLineLength(event.position.lineNumber))
      if (this.monacoEditor.getModel().getLineContent(event.position.lineNumber).includes("?co")) {
        let endColumn = this.monacoEditor.getModel().getLineLength(event.position.lineNumber)
        this.range = {
          startColumn: 1, startLineNumber: event.position.lineNumber, endColumn: endColumn+1, endLineNumber: event.position.lineNumber
        }
        this.monacoEditor.setPosition({
          lineNumber: event.position.lineNumber + 1,
          column: 1
        })
      }
    })
    this.monacoEditor.onMouseDown((event) => {
      console.debug(this.monacoEditor.getModel().getLineContent(3))
    })

    // 自动跳光标的位置
    // Decoration


  },
  methods: {
    insert() {
      let model = this.monacoEditor.getModel();
      model.applyEdits([{
        range: this.range,
        text: this.msg
      }], false)
    }
  }
}
</script>

<style>
#monacoEditor {
  width: 400px;
  height: 800px;
}
</style>
