import react, { useState } from "react";

const Accordion = ({ items }) => {
   const [activeIndex, setActiveIndex] = useState(null);

   const onTitleClick = (index) => {
      setActiveIndex(index);
   };

   const renderedList = items.map((item, index) => {
      return (
         <react.Fragment key={item.title}>
            <div onClick={() => onTitleClick(index)} className="title active">
               <i className="dropdown icon" />
               {item.title}
            </div>
            <div className="content active">
               <p>{item.content}</p>
            </div>
         </react.Fragment>
      );
   });

   return (
      <div className="ui styled accordion">
         {renderedList}

         <h1>{activeIndex}</h1>
      </div>
   );
};

export default Accordion;
