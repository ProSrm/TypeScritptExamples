import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import {TScomponent} from './TScomponent.tsx'

createRoot(document.getElementById('root')!).render(
  <>
  {/* <App /> */}
  {/* <Jstots/> */},
  <TScomponent userName={"sam"}age={565}/>
  </> 

)
