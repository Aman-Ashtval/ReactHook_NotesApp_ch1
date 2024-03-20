import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  @media (max-width: 767px) {
    padding: 16px;
  }
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-size: 48px;
  font-family: 'Bree Serif';
  @media (max-width: 767px) {
    font-size: 32px;
  }
`

export const InputContainer = styled(MainContainer)`
  width: 80%;
  min-height: 30vh;
  padding: 16px;
  box-shadow: 4px 4px 15px #aab8c8;
  align-items: flex-start;
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TitleInput = styled.input`
  color: #475569;
  font-size: 16px;
  font-weight: 550;
  padding: 7px 10px;
  outline: none;
  border: none;
  margin-bottom: 16px;
`

export const TitleDescriptionInput = styled.textarea`
  color: #475569;
  font-size: 16px;
  font-weight: 550;
  padding: 7px 10px;
  width: 100%;
  outline: none;
  border: none;
  margin-bottom: 16px;
`

export const Button = styled.button`
  color: #ffffff;
  font-size: 16px;
  font-weight: normal;
  padding: 10px 20px;
  background-color: #4c63b6;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
`

export const EmptyNotesContainer = styled.div`
  padding: 0px;
  margin-top: 26px;
  width: 80%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const EmptyNotesImage = styled.img`
  width: 150px;
`

export const EmptyNotesTitle = styled.h3`
  color: #334155;
  margin: 10px 0px;
`
export const EmptyNotesSubTitle = styled.p`
  color: #475569;
  margin: 0px;
  font-weight: 350;
`

export const NotesList = styled.ul`
  width: 80%;
  padding: 0px;
  list-style-type: none;
  flex-grow: 1;
  display: flex;
  flex-flow: row wrap;
  overflow-y: auto;
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    flex-flow: column nowrap;
  }
`
