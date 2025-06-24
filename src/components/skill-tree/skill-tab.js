import React from "react"
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
    SkillType,
    SkillGroupDataType
} from 'beautiful-skill-tree';
import { extendedData } from "./skills/skills-data";
import './skill.less'
import { TabPane, Tab } from 'semantic-ui-react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export class SkillTab extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return <ScrollContainer><TransformWrapper className="scrollable" panning={{disabled: false}} minScale={0.7} maxScale={2} initialScale={1}>
        <TransformComponent><TabPane>            <SkillProvider >
            <SkillTreeGroup className="content" theme={
                {
                    "nodeActiveBackgroundColor": '#CD7F32',
                    "treeBackgroundColor": '#282c3400',
                    "nodeDesktopTextNodeWidth": '100%; margin: 0; padding: 0',
                    "nodeMobileTextNodeWidth": '100%; margin: 0; padding: 0'
                }
            }>
                {({ skillCount }) => (
                    <SkillTree
                        treeId="first-tree"
                        title="Developer skills"
                        data={this.props.data}
                        description="My first skill tree"
                    />
                )}
            </SkillTreeGroup>
        </SkillProvider></TabPane></TransformComponent>
    </TransformWrapper></ScrollContainer>
    }

}