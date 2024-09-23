        import React from "react";
        import  ReactDOM  from "react-dom/client";
        
        /**
         * <div id="parent">
         *     <div id="child">
         *          <h1> </h1>
         *     </div>
         *     <div id="child2">
         *          <h1> </h1>
         *     </div>
         * </div>
         * 
         * 
         * 
         * React.createElement gives ReactElement(object) => HTML (browser understands)
         */
        
        const parent = React.createElement("div", {id:"parent"},[

        React.createElement("div", {key:2,id:"child"}, 
        [React.createElement("h1",{key:234},"dum dabak dum dum"),
        React.createElement("h2",{key:345},"i am sibling of h1 tag")
    ]),
     React.createElement("div", {key:3,id:"child2"}, 
        [React.createElement("h1",{key:236},"dum dabak dum dum"),
        React.createElement("h2",{key:347},"i am sibling of h1 tag")
    ])

    ]);


        
        
        // const heading = React.createElement("h1", {}, "Hello, world! from react.");
        const root = ReactDOM.createRoot(document.getElementById("root")); //  ye bolega ki kiske andar render hona hai(kisko root node banaye?), uska id dedo
        root.render(parent);