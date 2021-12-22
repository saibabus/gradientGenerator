// Write your code here
import {Direbutton, Listcontain} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirec, isActive, clikedgradientDirectionItem} = props
  const {value, displayText} = eachDirec

  const onclickdirecButton = () => {
    clikedgradientDirectionItem(value)
  }
  return (
    <Listcontain>
      <Direbutton
        type="button"
        isActive={isActive}
        onClick={onclickdirecButton}
      >
        {displayText}
      </Direbutton>
    </Listcontain>
  )
}

export default GradientDirectionItem
