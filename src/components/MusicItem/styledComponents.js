import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  font-family: 'Roboto';
`

export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`

export const MusicTrackImage = styled.img`
  height: 100px;
  width: 140px;
  margin-right: 20px;
`

export const NameGenreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const Name = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin: 0px;
`

export const Genre = styled.p`
  color: #3b82f6;
  font-size: 18px;
  font-weight: 500;
  line-height: px;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Duration = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  margin-right: 0px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
`
