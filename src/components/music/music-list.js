import React from "react";
import {
    ItemImage,
    ItemHeader,
    ItemExtra,
    ItemDescription,
    ItemContent,
    Item,
    Icon,
    ItemMeta,
    Label,
    Image,
    Button,
    Header
} from 'semantic-ui-react'

const ItemGroup = React.lazy(() => import('semantic-ui-react').then(mod => ({ default: mod.ItemGroup })));

export class ItemExampleExtraContent extends React.Component {
    playerRef = {}
    state = false
    handleClick = () => { 
        if (!this.state) {
            this.playerRef.current.audio.current.play()
        } else {
            this.playerRef.current.audio.current.pause()
        }
        this.state = !this.state
    }

    handleKeyPress = (e) => {
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
    }

    render() {
        const { active } = this.state // заменить на проверку в плеере

        return <ItemGroup unstackable relaxed>
            <Item className="track" header="Lofi">
                <ItemImage size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <ItemContent verticalAlign='middle'>
                    <ItemContent>Lofi Short Mix</ItemContent>
                    <ItemContent >3:55</ItemContent>
                    <ItemExtra verticalAlign='middle'>
                        <Label> <Icon name='itunes note' /> Guitar </Label>
                        <Label> <Icon name='itunes note' /> Piano </Label>
                        <Label> <Icon name='itunes note' /> Chill </Label>
                        <Label> <Icon name='itunes note' /> Meditative </Label>
                    </ItemExtra>
                </ItemContent>
                <Button toggle active={active} onClick={this.handleClick} onKeyPress={this.handleKeyPress} className="btn-play" color="green"><Icon name="play" />Play</Button>
            </Item>
        </ItemGroup>
    }
}