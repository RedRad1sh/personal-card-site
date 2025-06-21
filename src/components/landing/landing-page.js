import React from "react"
import { SkillsProgressBar } from "./skills/skills-progress-bar"
import { LandingProjects } from "./landing-projects"

/* TODO адаптивный переход/блок на мобилках*/

export class LandingPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div className={`main-content ui segments landing-page ${this.props.visible ? "element-appear" : ""}`}>
            <section className={`about ui ${this.props.visible ? "piled" : ""} tertiary inverted violet segment`}>
                <p>
                    {`
                Hi! I’m a developer from Russia.
                `}
                </p>
                <p>
                    {`
                Why is this site was created? I’ve just had some free time - why not to spend it like that? And i think all developers should have own site.
                `}
                </p>
                <p>
                    {`
                My primary programming language is Java
                But sometimes i use C#, JS, Python. Sometimes i try frontend frameworks like React or Angular - but still my spezialization is backend development in microservices.
                `}
                </p>
            </section>
            <section className="ui grey segment skills">
                {/* TODO: Skills Tree */}
                <SkillsProgressBar></SkillsProgressBar>
            </section>
            <section className="projects ui grey segment">
                {/* TODO: Carousel */}
                <LandingProjects></LandingProjects>
            </section>
        </div>
    }
}