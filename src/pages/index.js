import React, { createContext, useEffect, useState } from "react"
import './global.scss';
import ViewSwitch from '../components/view-switch/view-switch';
import views from "../views";

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
        <div className="app-background">
          <ViewSwitch views={views} />
        </div>
      }
    </EnvContext.Provider>
  )
}

export default IndexPage
