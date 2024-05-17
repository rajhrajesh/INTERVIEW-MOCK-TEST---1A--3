import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  font-family: 'Roboto';
`
export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`
export const ArtistName = styled.h1`
  color: #ffffff;
  font-size: 42px;
  font-weight: bold;
`
export const ArtistInfo = styled.p`
  font-size: 32px;
  color: #ffffff;
  font-weight: 400;
`
export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`
export const PlayListHeading = styled.h1`
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
`
export const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const MusicList = styled.ul`
  margin: 0px;
  padding-left: 50px;
  padding-right: 50px;
`
export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSongsText = styled.p`
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
`
