import React from "react";
import MenuElement from "./menu";
import "./header.less"
import { motion } from "motion/react"

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const visible = this.props.visible
        const isHome = this.props.isHome
        const visibilityClass = visible ? 'fade' : 'radish-sun-img'
        const radishClass = !isHome ? 'radish-const-position' : visibilityClass

        return <header className="page-header">
            <div className="logo">
                <div id='img-anchor'></div>
                <div id='img-text-anchor'></div>
            </div>
            <motion.div
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                onClick={() => this.props.toggleVisibility()}
                className={radishClass}
                alt='radish'
            >
                <div style={{ visibility: visible ? "hidden" : "visible" }} className='radish-below'>
                    <p>click me</p>
                </div>
            </motion.div>
            <MenuElement></MenuElement>
        </header>
    }
}