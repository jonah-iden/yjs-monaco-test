import { editor } from "monaco-editor"
import { MonacoBinding } from "y-monaco";
import { WebsocketProvider } from "y-websocket";
import * as awarenessProtocol from "y-protocols/awareness";

import * as Y from 'yjs'


function run() {
    const ydocument = new Y.Doc()
    const provider = new WebsocketProvider(`${location.protocol === 'http:' ? 'ws:' : 'wss:'}//localhost:1234`, 'monaco', ydocument)
    const text = ydocument.getText('monaco')

    const editor1 = editor.create(document.getElementById('editor'));

    const monacoBinding = new MonacoBinding(text, editor1.getModel(), new Set([editor1]), provider.awareness);
}

document.addEventListener('DOMContentLoaded', () => run());