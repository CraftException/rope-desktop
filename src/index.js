import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import * as fs from "fs";
import StartPage from "./components/Authorization/Start";

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
fs.writeFileSync("test.txt", "abc")
document.body.appendChild(root)

// Now we can render our application into it
render(<StartPage />, document.getElementById('root'))
