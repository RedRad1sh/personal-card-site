import React from "react";
import {
    ItemImage,
    ItemExtra,
    ItemContent,
    Item,
    Icon,
    Label,
    Button
} from 'semantic-ui-react'

export class MusicTrack extends React.Component {
    playerRef = {}
    state = false

    handleClick = () => {
        console.log(this.playerRef)
        this.playerRef.current.audio.current.src = this.fileUrl
        this.playerRef.current.audio.current.load();
        if (!this.state) {
            this.playerRef.current.audio.current.play()
        } else {
            this.playerRef.current.audio.current.pause()
        }
        this.state = !this.state
    }

    handleKeyPress = (e) => {
        this.playerRef.current.audio.current.src = this.fileUrl
        this.playerRef.current.audio.current.load();
        if (e.charCode === 32 || e.charCode === 13) {
            if (!this.state) {
                this.playerRef.current.audio.current.play()
            } else {
                this.playerRef.current.audio.current.pause()
            }
        }
        this.state = !this.state
    }

    constructor(props) {
        super(props)
        this.playerRef = props.playerRef
        this.track = props.track
        this.fileUrl = props.track.fileUrl
    }

    render() {
        const active  = this.state // заменить на проверку в плеере
        const title = this.track.title
        const description = this.track.description
        const duration = this.track.duration
        const tags = this.track.tags

        return <Item className="track" header="Lofi">
            <ItemImage size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
            <ItemContent verticalAlign='middle'>
                <ItemContent>{title}</ItemContent>
                <ItemContent >{duration}</ItemContent>
                <ItemContent >{description}</ItemContent>
                <ItemExtra verticalAlign='middle'>
                    {tags.map(tag => 
                        <Label> <Icon name='itunes note' /> {tag.name} </Label>
                    )}
                </ItemExtra>
            </ItemContent>
            <Button toggle active={active} onClick={this.handleClick} onKeyPress={this.handleKeyPress} className="btn-play" color="green"><Icon name="play" />Play</Button>
        </Item>
    }
}