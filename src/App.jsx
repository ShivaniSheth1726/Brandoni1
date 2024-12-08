import { useState } from "react";
import configs from "./assets/data.json";
import Bellow from "./Bellow.jsx";


function App() {
 

  return (
    <div className="flex flex-col gap-1 items-center justify-center min-h-screen">
     
      <Bellow
        data={configs}
       
      />
     
    </div>
  );
}

export default App;

// console.log(data);
// console.log(data[0].title);
// console.log(data[0].description);