import react from "react";
import reactDom from "react-dom/client";

import Header from "./src/components/Header";
import Body from "./src/components/Body";







const AppLayout=()=>{
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}


const root = reactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);