import React from "react";

function Accordion({title, description, showUnderline = false, isOpen = false}) {
  // console.log(props);
  // const 'title' = props.title;
  // const 'description' = props.description;
  // const { title, description } = props;
  console.log(showUnderline);
  
  return (
    <details className="w-52 border-2 bg-gray-50 rounded-lg p-2"open={isOpen}>
      <summary className={`font-bold cursor-pointer ${showUnderline ? "hover:underline":""} `}>{title}</summary>
      <p className="text-sm">
        {description}
      </p>
    </details>
  );
}

export default Accordion;