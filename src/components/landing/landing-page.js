import React, { useRef, useState } from "react"
import { SkillsProgressBar } from "./skills/skills-progress-bar"
import { LandingProjects } from "./landing-projects"
import { ContactModule } from "./landing-contact"
import './landing-page.less'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTypewriter } from 'react-simple-typewriter'
import { Button, Header, HeaderContent, Icon, Grid, GridRow, GridColumn, Divider } from 'semantic-ui-react'
import { motion, useScroll } from "motion/react"
import BlockAppear from "../utils/animations"

const fadeIn = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

const LandingPage = (props) => {
    const { scrollYProgress } = useScroll()

    const [compilingDone, setCompilingDone] = useState(false);
    const [typingText] = useState(`
    $ whoami
    Developer from Russia.
    $ cat stack
    Primary: Java.
    Technologies: Rest, Kafka, MQ, Docker
    Atchitecture: Microservices
    $ start PersonalSiteGreeting.sh
    Please wait...
    `)
    const [text] = useTypewriter({
        typeSpeed: 5,
        words: props.visible ? [typingText] : [''],
        loop: props.visible ? 1 : 0,
        onLoopDone: () => {
            setTimeout(() => {
                setCompilingDone(true);
            }, 2000);
        }
    })

    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };



    const pulse = { scale: [1, 1.08, 1], transition: { repeat: Infinity, duration: 1.6 } };

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    zIndex: 100,
                    backgroundColor: "#729aff",
                }}
            />

            <div style={{ minHeight: '96vh' }}>
                {props.visible &&
                    <div className={`main-content ui segments landing-page ${props.visible ? "element-appear" : ""}`}>
                        <Header className="segment attached size medium" as='h2'>
                            <Icon name='settings' />
                            <HeaderContent>PersonalSiteGreeting.sh</HeaderContent>
                        </Header>
                        <section className={`about shape invert attached`}>
                            <Grid container columns={2} stackable textAlign='center' className="about-grid">
                                <GridRow verticalAlign='middle'>
                                    {compilingDone && <GridColumn mobile={16} tablet={20} computer={20}>

                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeIn}
                                            transition={{ duration: 0.7 }}
                                        >
                                            <Header as="h1" color="white" className="name glitch">I'm RedRadish!</Header  >
                                            <Divider></Divider>
                                            <Header
                                                as="h4"
                                                content="Backend Developer"
                                                subheader="🚀 microservices • 🔐 fintech • ☕ java"
                                                inverted
                                            />
                                            <Divider></Divider>

                                            <p>I develop <strong>fault-tolerant</strong>, <strong>scalable</strong> microservice architectures
                                                that connect apps via <em>REST / MQ / Kafka / etc.</em></p>
                                        </motion.div>
                                    </GridColumn>}

                                    {!compilingDone &&
                                        <SyntaxHighlighter language="bash" style={github}>
                                            {text}
                                        </SyntaxHighlighter>}
                                </GridRow>
                                {compilingDone &&
                                    <motion.div animate={pulse}>

                                        <Button onClick={scrollToContact} size="large" inverted color='violet' className="contact-button">
                                            Contact
                                        </Button>
                                    </motion.div>
                                }
                            </Grid>
                        </section>
                        <BlockAppear>
                            <section className="ui grey segment skills">
                                <section className="ui segment skills-internal">
                                    <SkillsProgressBar></SkillsProgressBar>
                                </section>
                            </section>
                        </BlockAppear>
                        <BlockAppear>
                            <section className="ui grey segment projects">
                                <LandingProjects></LandingProjects>
                            </section>

                        </BlockAppear>
                        <BlockAppear>
                            <section ref={contactRef} className="ui grey segment contact">
                                <ContactModule></ContactModule>
                            </section></BlockAppear>
                    </div>
                }
            </div>
        </>
    )
}

export default LandingPage;
