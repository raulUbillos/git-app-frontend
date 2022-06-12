import React from "react";
import Head from "../Head";
import IProps from "./IProps";
const navigation = [
    { name: 'Backend Repo', href:'/git-app-backend' },
    { name: 'Frontend Repo', href:'/git-app-frontend' }
  ]
const NavigablePage = ({children}:IProps) => {
    return <>
      <Head repositories={navigation}/>
      <div className="min-h-full">
        {children}
      </div>
    </>
}

export default NavigablePage;