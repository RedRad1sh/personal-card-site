import React, { createRef }  from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './music-page.less'
import { ItemExampleExtraContent } from './music-list'


export class MusicPage extends React.Component {
    playerRef = createRef();

    constructor(props) {
        super(props)
    }

    render() {
        return <div className={`main-content music-page ui segments`}>
            <section className={`about ui ${this.props.visible ? "piled" : ""} tertiary inverted teal segment`}>
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
            </section>
            <section className={`about ui ${this.props.visible ? "piled" : ""} tertiary inverted teal segment`}>

                <AudioPlayer ref={this.playerRef} className="audio-player-filled" src="/music/chill-mix.mp3" showJumpControls={false} />
                {/* https://react.semantic-ui.com/addons/portal/#types-controlled - добавить вывод плеера в портал */}
            </section>
            <section className={`about ui ${this.props.visible ? "piled" : ""} tertiary inverted teal segment`}>
                <ItemExampleExtraContent playerRef={this.playerRef} />
            </section>
        </div>
    }
}