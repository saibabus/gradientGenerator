import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  Appcontainer,
  Heading,
  ColorInputvalue,
  ColorDisc,
  GradientDirectionCon,
  GradientColorcon,
  GenerateButton,
  GradientColorandValuecon,
  CustomInput,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

// Write your code here

class GradientGenerator extends Component {
  state = {
    gradientDirection: gradientDirectionsList[0].value,
    fromColorinput: '#8ae323',
    toColorinput: '#014f7b',
    gradientsColorsBg: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  clikedgradientDirectionItem = value => {
    this.setState({gradientDirection: value})
  }

  changefromColor = event => {
    this.setState({fromColorinput: event.target.value})
  }

  changetoColor = event => {
    this.setState({toColorinput: event.target.value})
  }

  generateGradient = () => {
    const {gradientDirection, fromColorinput, toColorinput} = this.state
    this.setState({
      gradientsColorsBg: `to ${gradientDirection},  ${fromColorinput},  ${toColorinput}`,
    })
  }

  render() {
    const {
      fromColorinput,
      gradientsColorsBg,
      gradientDirection,
      toColorinput,
    } = this.state
    return (
      <Appcontainer
        gradientValue={gradientsColorsBg}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <ColorDisc>Choose Direction</ColorDisc>
        <GradientDirectionCon>
          {gradientDirectionsList.map(eachDirec => (
            <GradientDirectionItem
              key={eachDirec.directionId}
              eachDirec={eachDirec}
              isActive={gradientDirection === eachDirec.value}
              clikedgradientDirectionItem={this.clikedgradientDirectionItem}
            />
          ))}
        </GradientDirectionCon>
        <ColorDisc>Pick the Colors</ColorDisc>
        <GradientColorcon>
          <GradientColorandValuecon>
            <ColorInputvalue>{fromColorinput}</ColorInputvalue>
            <CustomInput
              type="color"
              value={fromColorinput}
              onChange={this.changefromColor}
            />
          </GradientColorandValuecon>
          <GradientColorandValuecon>
            <ColorInputvalue>{toColorinput}</ColorInputvalue>

            <CustomInput
              type="color"
              value={toColorinput}
              onChange={this.changetoColor}
            />
          </GradientColorandValuecon>
        </GradientColorcon>
        <GenerateButton onClick={this.generateGradient}>
          Generate
        </GenerateButton>
      </Appcontainer>
    )
  }
}
export default GradientGenerator
