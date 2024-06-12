import React, { useState } from "react";
import Todobox from './Todobox/Todobox.jsx'


const App = () => {


  return (
    <div className="">
      <h1 className="text-center text-[44px] text-slate-800 font-bold bg-gradient-to-r from-sky-500 to-indigo-500 "><a href="#">My Todo List</a></h1>
      <Todobox className='' />
    </div>
  );
};

export default App;
