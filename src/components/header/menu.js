import React from "react";
import { Link } from 'react-router-dom';

import './menu.less';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="menu">
            <ul className="menulist">
                <li className="menuitem"><Link to="/" className="ui button primary">index</Link> </li>
                <li className="menuitem"><Link to="/skill-tree" className="ui button primary">skill-tree</Link> </li>
                <li className="menuitem"><Link to="/music" className="ui button primary">music</Link> </li>
                <li className="menuitem"><Link to="/askme" className="ui button primary">askme</Link> </li>
            </ul>
        </div>
    }
}