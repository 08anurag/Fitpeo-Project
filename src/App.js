import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";


const App = ()=> {
    return (
        <div className="wrapper">
            <div className="container">
                <Sidebar/>
                <Body/>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)