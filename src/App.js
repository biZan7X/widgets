import react from "react";
import Accordion from "./components/Accordion";

const items = [
   {
      title: "who is bizan ?",
      content: "He is the coolest guy",
   },
   {
      title: "what is the real name of bizan ?",
      content: "it is biswanath",
   },
   {
      title: "which the best food in the world ?",
      content: "It is noodles!",
   },
];

export default () => {
   return (
      <div>
         <Accordion items={items} />
      </div>
   );
};
