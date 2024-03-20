import {CardItem, CardTitle, CardDescription} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {noteTitle, noteDescription} = noteDetails

  return (
    <CardItem>
      <CardTitle>{noteTitle}</CardTitle>
      <CardDescription>{noteDescription}</CardDescription>
    </CardItem>
  )
}

export default NoteItem
