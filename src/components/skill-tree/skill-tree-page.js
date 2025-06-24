import React, { useState, useEffect } from "react"
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
    SkillType,
    SkillGroupDataType
} from 'beautiful-skill-tree';
import { extendedData } from "./skills/skills-data";
import { frameworkData } from "./skills/skills-framework";
import { patternData } from "./skills/skills-patterns";
import { dbData } from "./skills/skills-databases";
import { javaCoreData } from "./skills/skills-java-core";
import { TabPane, Tab } from 'semantic-ui-react'
import { ciCdData } from "./skills/skills-ci-cd";
import { SkillTab } from "./skill-tab";

import { SkillTreeApiControllerApi } from "../../server-api/index"

import './skill.less'



export class SkillTreePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true,
            error: null,
        };
    }

    callback = (error, data, response) => {
        if (data) {
            console.log(data);
            let skills = data[0].skillList
            console.log(skills)
            this.setState({data: skills});
        } else {
            console.log('API called successfully.');
        }
    };

    componentDidMount() {
        // Вызов функции запроса
        new SkillTreeApiControllerApi().getAll1(this.callback);
    }

    render() {
        const { data, loading, error } = this.state;


        const panes = [
            {
                menuItem: 'Java Core', render: () => <SkillTab data={javaCoreData} />
            },
            {
                menuItem: 'Frameworks', render: () => <SkillTab data={data} />
            },
            {
                menuItem: 'Patterns', render: () => <SkillTab data={patternData} />
            },
            {
                menuItem: 'Databases', render: () => <SkillTab data={dbData} />
            },
            {
                menuItem: 'CI/CD', render: () => <SkillTab data={ciCdData} />
            },
        ]

        return <div className="ui main-content">
            <Tab menu={{ inverted: true }} panes={panes} />
        </div>
    }

}