import {Component} from 'react'
import {
  Heading,
  InputBox,
  Label,
  Form,
  Container,
  Button,
  ImageContainer,
  ImageText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    generate: false,
    fontSize: '',
    topText: '',
    bottomText: '',
    imgUrl: '',
    optionId: fontSizesOptionsList[0].optionId,
  }

  onGenerateForm = event => {
    event.preventDefault()
    this.setState({generate: true})
  }

  onChangeImage = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeDropDown = event => {
    this.setState({optionId: event.target.value, fontSize: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  render() {
    const {
      generate,
      fontSize,
      topText,
      bottomText,
      imgUrl,
      optionId,
    } = this.state

    return (
      <div>
        <Heading>Meme Generator</Heading>
        <Container>
          <Form onSubmit={this.onGenerateForm}>
            <Label htmlFor="Image URL">Image URL</Label>
            <InputBox
              onChange={this.onChangeImage}
              id="Image URL"
              type="text"
            />
            <Label htmlFor="Top Text">Top Text</Label>
            <InputBox
              onChange={this.onChangeTopText}
              id="Top Text"
              type="text"
            />
            <Label htmlFor="Bottom Text">Bottom Text</Label>
            <InputBox
              onChange={this.onChangeBottomText}
              id="Bottom Text"
              type="text"
            />
            <Label htmlFor="Font Size">Font Size</Label>
            <InputBox
              id="Font Size"
              as="select"
              value={optionId}
              onChange={this.onChangeDropDown}
            >
              {fontSizesOptionsList.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.value}>
                  {eachOption.displayText}
                </option>
              ))}
            </InputBox>
            <Button type="submit">Generate</Button>
          </Form>

          {generate && (
            <ImageContainer imgUrl={imgUrl}>
              <ImageText fontSize={`${fontSize}px`}>{topText}</ImageText>
              <ImageText fontSize={`${fontSize}px`}>{bottomText}</ImageText>
            </ImageContainer>
          )}
        </Container>
      </div>
    )
  }
}

export default MemeGenerator
