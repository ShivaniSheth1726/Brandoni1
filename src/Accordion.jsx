import { useState, useEffect } from "react";

function Accordion({title, description, showUnderline = false, isOpen = false, onClick=()=>{}}) {
  // console.log(props);
  const [readTime, setReadTime] = useState(0);
  const URL="https://wakati1.shethshivani1726.workers.dev/api/calculate";
  useEffect(() => { fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sentence: description,
    }),
  })
  .then((res) => res.json())
  .then((data) => {
    setReadTime(data.readingTime.seconds)
    // console.log(data);
  });});
 
  
  return (
    <details 
    className="w-80 border-2 bg-gray-50 rounded-lg p-2"
    open={isOpen}
    onToggle={() =>onClick()}>
      <summary 
      className={`font-bold cursor-pointer ${showUnderline ? "hover:underline":""} flex justify-between items-center`}>{title}
      {/* <span className="text-xs text-slate-600">{(description.split(" ")).length} words</span> */}
      <span className="text-xs text-slate-600">{readTime} seconds</span>

      </summary>
      <p className="text-sm">
        {description}
      </p>
    </details>
  );
}

export default Accordion;