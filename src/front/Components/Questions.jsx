import React, { Component } from 'react';
import { Container, Card, Button, Image } from 'semantic-ui-react';
import { shuffle } from 'lodash';

const COLORS = ['orange', 'red', 'blue', 'green'];
const PLACEHOLDER_IMAGE_URL = 'https://placeimg.com/200/200/any';


/**
 * Provides a Semantic UI Button. This can be called programattically
 */
const button = (ans, color) => (
  ans ?
    (
      <Button color={color}>
        {ans}
      </Button>
    ) :
    null
);

/**
 * Takes in a Question Object and uses the fields called out in the input of
 * this function to spit out a card for each question
 */
class QBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shuffledColors: shuffle(COLORS),
      imageLoaded: false,
      image: null
    }
  }
  componentDidMount() {
    let image;
    if (this.props.question.image_path) {
      // TODO, will probably have to have two setStates because this will be async
    } else {
      image = <Image src={PLACEHOLDER_IMAGE_URL} />
    }
    this.setState({
      imageLoaded: true,
      image
    });
  }
  render() {
    let { question_id, poster_id, question, ans1, ans2, ans3, ans4, image_path }
      = this.props.question
    let { shuffledColors, imageLoaded, image } = this.state;

    return (
      <Card textAlign='center'>
        {imageLoaded ? image : null}
        <Card.Content>
          <Card.Header>{question}</Card.Header>
        </Card.Content>
        <Card.Content>
          {button(ans1, shuffledColors[0])}
          {button(ans2, shuffledColors[1])}
          {button(ans3, shuffledColors[2])}
          {button(ans4, shuffledColors[3])}
        </Card.Content>
      </Card>
    )

  }
}

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded : false,
      questions: []
    }
  }

  componentDidMount() {
    fetch('/api/question')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            questions: result
          })
        }
      )
  }

  render() {
    let { isLoaded, questions } = this.state;
    return (
      <Container textAlign='center'>
        <h2>Questions!</h2>
        <p>Answer some while you're here</p>
        <Card.Group>
          { isLoaded ? questions.map(q => <QBox question={q} />) : null}
        </Card.Group>
      </Container> 
    )
  }
}

export default Questions;