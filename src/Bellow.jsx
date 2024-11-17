import React from 'react'
import Accordion from './Accordion.jsx';
function Bellow({data}) {
  
  // const accordion=[];
  // data.forEach((obj) => {
  //   accordion.push(
  //     <Accordion 
  //       title={obj.title} 
  //       description={obj.description} 
  //       />
  //   );
  // });

  // another way

  // const accordion = data.map((obj) => {
  //   return (
  //     <Accordion 
  //       title={obj.title} 
  //       description={obj.description} 
  //       />
  //   );
  // });
  
  // console.log(data);
  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i].title);
  // }
  // for (const element of object) {
  //     console.log(element.title);
  // }
  // // forEach
  //   data.forEach(element => {
  //     // Perform some operation on each element
  //     console.log(element.title);  // Or any other action you need
  //   });
   


  return (
    <div>
      {/* {accordion} */}
      {data.map((obj) => {
        return (
          <Accordion 
            key={crypto.randomUUID()}
            title={obj.title} 
            description={obj.description} 
            />
        );
      })}
    </div>

  );
}

export default Bellow