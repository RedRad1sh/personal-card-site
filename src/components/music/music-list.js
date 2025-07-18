import React from "react";
import { MusicTrack } from './music-track'
import { TracksApiControllerApi } from '../../server-api/index'

const ItemGroup = React.lazy(() => import('semantic-ui-react').then(mod => ({ default: mod.ItemGroup })));

export class ItemList extends React.Component {
    playerRef = {}

    constructor(props) {
        super(props)
        this.playerRef = props.playerRef
        this.state = {
            trackElements: []
        }
        this.tracksApi = new TracksApiControllerApi()
    }

    callback = (error, data, response) => {
        if (data) {
            console.log(data);
            this.setState({trackElements: data})
        } else {
            console.log('API called successfully.');
        }
    };

    componentDidUpdate(prevProps) {
        if (prevProps.activeTags !== this.props.activeTags) {
            this.props.onTagsChange(this.callback);
          }
    }

    componentDidMount() {
        // Вызов функции запроса
        this.tracksApi.getAll({tags: []}, this.callback);
    }

    render() {
        const tracks = this.state.trackElements
        return <ItemGroup unstackable relaxed>
            {tracks.map(track => {
                return <MusicTrack key={track.id} playerRef={this.playerRef} track={track}></MusicTrack>
            })}
        </ItemGroup>
    }
}