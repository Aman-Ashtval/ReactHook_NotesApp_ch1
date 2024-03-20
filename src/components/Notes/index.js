import {useState} from 'react'
import {v4 as uuid} from 'uuid'

import {
  MainContainer,
  Heading,
  InputContainer,
  TitleInput,
  TitleDescriptionInput,
  Button,
  EmptyNotesContainer,
  EmptyNotesImage,
  EmptyNotesTitle,
  EmptyNotesSubTitle,
  NotesList,
  Form,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [noteTitle, setTitle] = useState('')
  const [noteDescription, setDescription] = useState('')

  const onChangeNotesTitle = event => setTitle(event.target.value)
  const onChangeNotesDescription = event => setDescription(event.target.value)

  const [notesList, setNotesList] = useState([])

  const onAddNotes = event => {
    event.preventDefault()
    setNotesList(prevState => [
      ...prevState,
      {id: uuid(), noteTitle, noteDescription},
    ])
    setTitle('')
    setDescription('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <InputContainer>
        <Form onSubmit={onAddNotes}>
          <TitleInput
            type="text"
            placeholder="Title"
            value={noteTitle}
            onChange={onChangeNotesTitle}
          />
          <TitleDescriptionInput
            placeholder="Take a Note..."
            rows="3"
            cols="100"
            value={noteDescription}
            onChange={onChangeNotesDescription}
          />
          <Button type="submit" onClick={onAddNotes}>
            Add
          </Button>
        </Form>
      </InputContainer>
      {notesList.length === 0 ? (
        <EmptyNotesContainer>
          <EmptyNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyNotesTitle>No Notes Yet</EmptyNotesTitle>
          <EmptyNotesSubTitle>
            Notes you add will appear here
          </EmptyNotesSubTitle>
        </EmptyNotesContainer>
      ) : (
        <NotesList>
          {notesList.map(each => (
            <NoteItem key={each.id} noteDetails={each} />
          ))}
        </NotesList>
      )}
    </MainContainer>
  )
}

export default Notes
