        const heading = React.createElement("h1", {}, "Hello, world! from react.");
        const root = ReactDOM.createRoot(document.getElementById("root")); //  ye bolega ki kiske andar render hona hai, uska id dedo
        root.render(heading);


        const paragraph = React.createElement("p", {}, "this is a paragraph element created using react");
        const para = ReactDOM.createRoot(document.getElementById("para")); // ye bolega ki kiske andar render hona hai, uska id dedo
        para.render(paragraph);