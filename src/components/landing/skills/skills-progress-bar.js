import './skills-progress-bar.css';
import React from 'react';

import { Progress } from 'semantic-ui-react'

export class SkillsProgressBar extends React.Component {


    constructor(props) {
        super(props)
    }
    render() {

        const skillLevelStyle = (level) => {
            return {
                "width": `${level}%`,
                "animation": "html 2s ease-out"
            }
        }

        return <div className="container container sixteen wide mobile sixteen wide tablet sixteen wide computer column">
            <h1 className='flasty'>Knowledge levels</h1>
            <div className='container'>
                <div className="col">
                    <h2 className="programas titulo flasty">Language</h2>
                    <ul className="skill">
                        <Progress active size='tiny' inverted success percent={85}>Java</Progress>
                        <Progress active size='tiny' inverted warning percent={50}>HTML/CSS</Progress>
                        <Progress size='tiny' inverted error percent={35}>C#</Progress>
                        <Progress active size='tiny' inverted error percent={30}>JS</Progress>
                        <Progress size='tiny' inverted error percent={15}>Python</Progress>
                    </ul>
                </div>
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