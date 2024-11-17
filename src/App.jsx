import React from "react";
import configs from "./assets/data.json";
import Bellow from "./Bellow.jsx";
// console.log(data);
// console.log(data[0].title);
// console.log(data[0].description);


function App(){
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Bellow data={configs}/>
      </div>
  );
}

export default App