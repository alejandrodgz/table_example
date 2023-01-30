import React from "react";
//import Table from "./table"
import Table2 from "./table2";
import HeaderApp from "./header";
import "./header.css"
import Behind from "./behind";
import Contact from "./Contact";
import About from "./About";


export default function App(){

    let component1
    switch (window.location.pathname) {

        case "/":
            component1 = <Table2 />            
            break;
        case "/Sources":
            component1 = <Table2 />            
            break;
        
        case "/About":
            component1 = <About />            
            break;
                
        case "/Contact":
            component1 = <Contact />            
            break;

        default:
            break;
    }
    
    return(<>
    <HeaderApp />
    {component1}
    <Behind />
    </>)
}