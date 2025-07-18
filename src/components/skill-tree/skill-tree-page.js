import React from "react"
import { Tab } from 'semantic-ui-react'
import { SkillTab } from "./skill-tab";

import { SkillTreeApiControllerApi } from "../../server-api/index"

import './skill.less'



export class SkillTreePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true,
            panes: [],
        };
    }

    callback = (error, data, response) => {
        if (data) {
            console.log(data);
            let panes = data.map(tree => ({
                    menuItem: tree.name, render: () => <SkillTab data={tree.skillList} />
                })
            )
            this.setState({panes: panes});
        } else {
            console.log('API called successfully.');
        }
    };

    componentDidMount() {
        // Вызов функции запроса
        new SkillTreeApiControllerApi().getAll1(this.callback);
    }

    render() {
        const panes = this.state.panes;

        return <div className="ui main-content segments">
            <section className="ui segment tree-about">
                <p>
                    What's this?
                </p>
                <p>It is a tree of my current skill where i track new technologies i learned</p>
                <p>I plan to add online tool for fillling such trees for other users experience later.</p>
            </section>
            <section className="ui segment">
            <Tab menu={{ inverted: true }} panes={panes} />
            </section>
        </div>
    }

}