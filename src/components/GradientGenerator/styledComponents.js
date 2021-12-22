// Style your elements here
import styled from 'styled-components'

export const Appcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const Heading = styled.h1`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`

export const ColorDisc = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
`

export const GradientDirectionCon = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  padding: 0;
`

export const GradientColorcon = styled.div`
  display: flex;
  padding: 10px;
  width: 50%;
  justify-content: space-between;
`
export const GradientColorandValuecon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`
export const CustomInput = styled.input`
  outline: none;
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
`
export const ColorInputvalue = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
  padding: 10px;
`
