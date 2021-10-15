import React from 'react'

import { Link } from 'react-router-dom';

import "./navbar-style.css"
import "../App.css"

export default function navbar() {
    return (
    
        <header>
        <div className="my-navbar">
            <div className="container">
                <nav className="navbar-menu w100 flex-end">
                    <ul className="my-row menu-list">
                        <li>
                            <Link to="/">
                                <span>.</span>home()
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <span>.</span>about()
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                <span>.</span>projects()
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <span>.</span>contact()
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </header>
       
    )
}
