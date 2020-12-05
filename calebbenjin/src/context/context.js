import React, { useEffect, useState, createContext } from 'react';
// import data from '../context/data'

const AboutContext = createContext();

const DataProvider = ({children}) => {
  return (
    <AboutContext.Provider value="Hello world">
      {children}
    </AboutContext.Provider>
  )
}

export { AboutContext, DataProvider };
