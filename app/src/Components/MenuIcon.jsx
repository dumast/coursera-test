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
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    });

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