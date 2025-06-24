import React from "react";
import {MusicTrack} from './music-track'
import {TracksApiControllerApi} from '../../server-api/index'

const ItemGroup = React.lazy(() => import('semantic-ui-react').then(mod => ({ default: mod.ItemGroup })));

export class ItemExampleExtraContent extends React.Component {
    playerRef = {}
    state = false
    
    constructor(props) {
        super(props)
        this.playerRef = props.playerRef
        this.state = {
            data: null,
            loading: true,
            error: null,
        };
        this.trackElements = []
    }

    callback = (error, data, response) => {
        if (data) {
            console.log(data);
            this.trackElements = data
        } else {
            console.log('API called successfully.');
        }
    };

    componentDidMount() {
        // Вызов функции запроса
        new TracksApiControllerApi().getAll(this.callback);
    }

    render() {
        const tracks = this.trackElements
        return <ItemGroup unstackable relaxed>
            {tracks.map(track => {
                    return <MusicTrack key={track.id} playerRef={this.playerRef} track={track}></MusicTrack>
            })}
        </ItemGroup>
    }
}