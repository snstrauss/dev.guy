import React, { createContext, useEffect, useState } from "react"
import './global.scss';
import Header from '../components/header/header';

export const EnvContext = createContext();

const IndexPage = () => {

  const [env, setEnv] = useState();

  useEffect(() => {
    const env = {
      isBigScreen: window.innerWidth > 600,
      isProd: process.env.NODE_ENV === 'production'
    }

    setEnv(env);
  }, [])

  return (
    <EnvContext.Provider value={env}>
      {
        env &&
        <>
          <Header/>
          hehy
        </>
      }
    </EnvContext.Provider>
  )
}

export default IndexPage
