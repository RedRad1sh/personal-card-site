import React from "react"
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
    SkillType,
    SkillGroupDataType
} from 'beautiful-skill-tree';
import { data } from "./skills/skills-data";

export class LandingSkillTree extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return <SkillProvider>
            <SkillTreeGroup theme={{ "nodeActiveBackgroundColor": '#CD7F32' }}>
                {({ skillCount }) => (
                    <SkillTree
                        treeId="first-tree"
                        title="Developer skills"
                        data={data}
                        collapsible
                        description="My first skill tree"
                        closedByDefault="true"
                    />
          )}
            </SkillTreeGroup>
        </SkillProvider>
    }

}