import React from 'react'


export default function Menu(props){

    function Home(){
        document.getElementById('home').scrollIntoView();
    }

    function About(){
        document.getElementById('about').scrollIntoView();
    }

    function Programming(){
        document.getElementById('programming').scrollIntoView();
    }

    function Contact(){
        document.getElementById('contact').scrollIntoView();
    }

    return (

        <div className = "menu">
            <ul>
                <li onClick = {Home}>Home</li>
                <li onClick = {About}>About</li>
                <li onClick = {Programming}>Programming</li>
                <li onClick = {Contact}>Contact</li>
            </ul>
        </div>
    )
}
