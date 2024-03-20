import styled from 'styled-components'

export const CardItem = styled.li`
  width: 32%;
  max-height: 200px;
  padding: 16px;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  margin: 22px 10px 0px 5px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const CardTitle = styled.h1`
  color: #1e293b;
  font-size: 22px;
  font-weight: 600;
  margin-top: 0px;
`

export const CardDescription = styled.p`
  color: #334155;
  font-size: 16px;
  font-weight: 450;
  margin-top: 0px;
`
