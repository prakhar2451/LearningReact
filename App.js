import React from "react";
import  ReactDOM  from "react-dom/client";



// functional component
const ParagraphComponent = ()=> (
    <p id="paragraph">
        This is a paragraph component!!
    </p>
);

const elem = <p>this is paragraph element</p>

const HeadingComponent= () => (
    <div>
        <h1 id="header"className="heading">
            This is a heading component!!
        </h1>
        <ParagraphComponent /> // we can write like this.
        <ParagraphComponent></ParagraphComponent> // we can write like this as well.
        {elem} // we can put any JS code inside the JSX.
    </div>

);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);