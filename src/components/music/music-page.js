import React, { createRef } from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './music-page.less'
import { ItemList } from './music-list'
import { Button } from 'semantic-ui-react'
import { TracksApiControllerApi } from '../../server-api/index'

export class MusicPage extends React.Component {
    playerRef = createRef();

    handleClick = (e) => {
        let prevState = this.state.activeTags;
        console.log(prevState)
        const key = e.currentTarget.textContent
        if (prevState.includes(key)) {
            const index = prevState.indexOf(key)
            prevState.splice(index, 1)
        } else {
            prevState.push(key)
        }
        this.setState({activeTags: prevState.slice()})
    }

    callback = (error, data, response) => {
        if (data) {
            console.log(data);
            this.setState({tagLabels: data.map(tag => tag.name)})
        } else {
            console.log('API called successfully.');
        }
    }

    onTagsChange = (callback) => {
        this.tracksApi.getAll({tags: this.state.activeTags}, callback)
    }


    componentDidMount() {
        this.tracksApi.getAllLabels(this.callback)
    }

    constructor(props) {
        super(props)
        this.state = {
            activeTags: [],
            tagLabels: []
        }
        this.tracksApi = new TracksApiControllerApi()
    }

    render() {
        const tagBtns = this.state.tagLabels

        return <div className={`main-content music-page ui segments`}>
            <section className={`ui ${this.props.visible ? "piled" : ""} tertiary inverted teal segment music-about`}>
                <p>
                    {`
                Sometimes i write music. For me it's a meditational thing which helps me express emotions. 
                Though i'm trying to find new ideas and would like to write someting good and touchful.
                `}
                </p>
                <p>
                    {`
                I produce electonic and acoustic music. Though i write songs i will not show it on this site cause of my bad vocals ;)
                `}
                </p>
                <p>
                    {`
                    Anyway here are my tracks:
               `}
                </p>
                <div className="music-about-masked"></div>
            </section>
            <section className={`ui ${this.props.visible ? "piled" : ""} tertiary inverted teal segment`}>

                <AudioPlayer ref={this.playerRef} className="audio-player-filled" src="/music/chill-mix.mp3" showJumpControls={false} />
                {/* https://react.semantic-ui.com/addons/portal/#types-controlled - добавить вывод плеера в портал */}
            </section>
            <section className={`ui ${this.props.visible ? "piled" : ""} tertiary inverted teal segment`}>
                {tagBtns.map(tag =>
                    <Button key={tag} toggle active={this.state.activeTags.includes(tag)} onClick={this.handleClick}>
                        {tag}
                    </Button>)
                }
            </section>
            <section className={`ui ${this.props.visible ? "piled" : ""} tertiary inverted teal segment`}>
                <ItemList playerRef={this.playerRef} activeTags={this.state.activeTags} onTagsChange={this.onTagsChange}/>
            </section>
        </div>
    }
}