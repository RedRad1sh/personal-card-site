import './skills-progress-bar.css';
import React from 'react';

import { Progress, Divider, Header, Icon } from 'semantic-ui-react'
import {BasicSkillListApiControllerApi} from "../../../server-api/index"

export class SkillsProgressBar extends React.Component {
    constructor(props) {
        super(props)
    }

    callback = (error, data, response) => {
        if (data) {
            console.log(data);
            this.skillCategories = data.map(
                category => this.skillCategory(category)
            )
        } else {
            console.log('API called UNsuccessfully.');
        }
    };

    componentDidMount() {
        new BasicSkillListApiControllerApi().getAll2(this.callback)
    }

    skillCategory(category) {
        return <div className="col">
            <h2 className="programas titulo flasty">{category.name}</h2>
            <ul className="skill">
                {category.progresses.map(skill => 
                    <Progress key={skill.id} active size='tiny' inverted success percent={skill.progress}>{skill.name}</Progress>
                    )}
            </ul>
        </div>;
    }

    render() {

        return <div className="container container sixteen wide mobile sixteen wide tablet sixteen wide computer column">
            <Divider horizontal className='container-header'>
                <Header inverted as='h1' className="flasty">
                    <Icon name='book' />
                    Knowledge levels
                </Header>
            </Divider>
            <Divider></Divider>
            <div className='container'>
                {this.skillCategories}
                <div className="col">
                    <h2 className="programas titulo flasty">Framework</h2>
                    <ul className="skill">
                        <Progress active size='tiny' inverted success percent={85}>Spring</Progress>
                        <Progress active size='tiny' inverted error percent={35}>React</Progress>
                        <Progress size='tiny' inverted error percent={20}>Angular</Progress>
                    </ul>
                </div>
                <div className="col">
                    <h2 className="programas titulo flasty">Tech</h2>
                    <ul className="skill">
                        <Progress active size='tiny' inverted success percent={80}>Microservices</Progress>
                        <Progress active size='tiny' inverted success percent={70}>Docker</Progress>
                        <Progress active size='tiny' inverted warning percent={60}>Databases/SQL</Progress>
                        <Progress active size='tiny' inverted warning percent={60}>Kafka</Progress>
                        <Progress active size='tiny' inverted warning percent={40}>MQ</Progress>
                    </ul>
                </div>
            </div>
        </div>

    }
}