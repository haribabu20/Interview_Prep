import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UseStateHook from './hooks/UseStateHook'
import UseLayoutEffectHook from './hooks/UseLayoutEffectHook.jsx'
import './App.css'
import UseCallbackHook from './hooks/UseCallbackHook.jsx'
import UseMemoHook from './hooks/UseMemoHook.jsx'
import UseEffectHook from './hooks/UseEffectHook.jsx'
import UseRefHook from './hooks/UseRefHook.jsx'
import UseContextHook_Simple from './hooks/UseContextHook_Simple.jsx'
import UseContextHook_Complex from './hooks/UseContextHook_Complex.jsx'
import UseReducerHook from './hooks/UseReducerHook.jsx'

function App() {

  return (
    <>
      {/* <UseStateHook/> */}
      {/* <UseLayoutEffectHook/> */}
      {/* <UseCallbackHook/> */}
      {/* <UseMemoHook/> */}
      {/* <UseEffectHook/> */}
      {/* <UseRefHook/> */}
      {/* <UseContextHook_Simple/> */}
      {/* <UseContextHook_Complex/> */}
      <UseReducerHook/>
      
    </>
  )
}

export default App
