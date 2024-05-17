import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicListItem,
  TrackInfoContainer,
  MusicTrackImage,
  NameGenreContainer,
  Name,
  Genre,
  DurationDeleteContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {MusicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <MusicListItem>
      <TrackInfoContainer>
        <MusicTrackImage alt="track" src={imageUrl} />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>

        <DurationDeleteContainer>
          <Duration>{duration}</Duration>
          <DeleteButton
            type="button"
            data-testid="delete"
            onClick={onDeleteTrack}
          >
            <AiOutlineDelete size={25} />
          </DeleteButton>
        </DurationDeleteContainer>
      </TrackInfoContainer>
    </MusicListItem>
  )
}
export default MusicItem
