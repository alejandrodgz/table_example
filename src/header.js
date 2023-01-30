import React from "react";


export default function HeaderApp(props){
    const imgUrl="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png"

    return(<>
    <div className="header1">
        <img src={imgUrl} alt="logo" />
        <div className="navBar">
        <ul>
            <li><a href="./Sources">sources</a>
            </li>
                
            <li><a href="./About">About</a></li>
            <li><a href="./Contact">Contact</a>
            </li>
        </ul>
        </div>
    </div>
    </>)
}
