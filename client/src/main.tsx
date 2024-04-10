import React from 'react'
import ReactDOM from 'react-dom/client'

// import './index.css'

import { Router } from './Router.tsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>,
)
