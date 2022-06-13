import React from "react";
import Head from "layouts/Head";
import IProps from "./IProps";
const navigation = [
    { name: 'Backend', href:'/git-app-backend' },
    { name: 'Frontend', href:'/git-app-frontend' }
  ]
const NavigablePage = ({children}:IProps) => {
    return <>
      <Head repositories={navigation}/>
      <div className="min-h-full ">
        {children}
      </div>
    </>
}

export default NavigablePage;