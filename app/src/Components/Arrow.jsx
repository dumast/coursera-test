import React from 'react'

export default function Arrow() {

    function getVerticalScrollPercentage(){
        var p = document.querySelector('.page')
        return (p.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
      }

    function arrowClick(){
        var pos = getVerticalScrollPercentage()
        console.log(pos)
        if (pos < 25 && pos >= 0){
            console.log("1")
            document.getElementById('about').scrollIntoView();
        }
        else if (pos < 50 && pos >= 25){
            console.log("2")
            document.getElementById('programming').scrollIntoView();
        }
        else if (pos < 75 && pos >= 50){
            console.log("3")
            document.getElementById('contact').scrollIntoView();
        }
        else if (pos <= 100 && pos >= 75){
            console.log("4")
            document.getElementById('home').scrollIntoView();
        }
    }


    return(
        <div className = "arrow" onClick = {arrowClick}>
            <svg width="50" height="28" viewBox="0 0 50 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1.5" x2="36.0229" y2="-1.5" transform="matrix(-0.692162 0.721742 -0.745654 -0.666334 24.9337 0)" stroke="white" stroke-width="3"/>
            <line y1="-1.5" x2="36.0229" y2="-1.5" transform="matrix(-0.69214 -0.721763 0.745674 -0.666311 50 26)" stroke="white" stroke-width="3"/>
            </svg>
        </div>
    )
}