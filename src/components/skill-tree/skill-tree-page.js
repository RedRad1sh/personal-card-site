import React from "react"
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
import './skill.less'
const panes = [
    {
        menuItem: 'Java Core', render: () => <SkillTab data={javaCoreData} />
    },
    {
        menuItem: 'Frameworks', render: () => <SkillTab data={frameworkData} />
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


export class SkillTreePage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return <div className="ui main-content">
            <Tab    menu={{ inverted: true }} panes={panes} />
        </div>
    }

}