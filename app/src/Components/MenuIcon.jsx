import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import Menu from './Menu'

export default function MenuIcon(){
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'fixed', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const menuTransitions = useTransition(showMenu, null, {
        from: { transform: 'translateX(-100%)' },
        enter: { transform: 'translateX(0%)' },
        leave: { transform: 'translateX(-100%)' },
    });

    if(showMenu){
        document.body.classList.add("change");
    }
    else if(!showMenu){
        document.body.classList.remove("change");
    }

    return(
        <nav>
            <span className = "menuIcon" onClick={() => setShowMenu(!showMenu)}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </span>

            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="grayedOut" 
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )    
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className = "menu"
                    >
    
                    <Menu
                        closeMenu={() => setShowMenu(false)}
                    />

                    </animated.div>
                )    
            }
        </nav>
    )
}