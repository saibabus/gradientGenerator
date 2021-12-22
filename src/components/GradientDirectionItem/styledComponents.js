// Style your elements here
import styled from 'styled-components'

export const Listcontain = styled.li`
  width: 80px;
  margin: 10px;
`
export const Direbutton = styled.button`
  width: 100%;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
