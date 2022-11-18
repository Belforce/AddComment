import React from 'react'
import { Coment, Container, Nome, Option } from './styles'

const Cards = ({ titulo, option, texto }) => {
  return (
    <Container>
      <Nome>{titulo}</Nome>
      <Option>{option}</Option>
      <Coment>{texto}</Coment>
    </Container>
  )
}

export default Cards