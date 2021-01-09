/* const express = require('express')
const path = require('path')*/
import path from 'path'
import express from 'express'

/* import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../App'
import { ServerStyleSheet } from 'styled-components'

global.window = {}; // Here for initial server render. */
const app = express()

//TODO: check this later. Once static files are move to public
app.use(express.static(path.resolve(__dirname, 'public')))
app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`))
  /* const sheet = new ServerStyleSheet()
  console.log(path.resolve(__dirname, 'public'))
  const vendor = path.resolve(__dirname, 'public/vendors.js')
  const bundle = path.resolve(__dirname, 'public/bundle.js')
console.log(vendor)
  try {
    const app = renderToString(sheet.collectStyles(<App />))
    const styleTags = sheet.getStyleTags()
    res.send(`
      <html>
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com">
          <link href="https://fonts.googleapis.com/css2?family=Meie+Script&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
          ${styleTags}
        </head>
        <body>
          <script src='./vendors.js'></script>
          <script src='./bundle.js'></script>
          <div id='root'>${app}</div>
        </body>
      </html>`
    )
  } catch(err) {
    console.log(err)
  } finally {
    sheet.seal()
  } */
})

app.listen(3000, () => {
  console.log('running on port 3000')
})
