import React, { useState } from 'react'
import Sentiment from 'sentiment'
import styled from 'styled-components'
import Chart from './Chart'

const TextInputStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  textarea {
    width: 70vw;
    height: 70vh;
  }
`

function AddText() {
  const [text, setText] = useState('')
  const [positive, setPositive] = useState('')
  const [negative, setNegative] = useState('')
  const [comparative, setComparative] = useState('')

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const sentiment = new Sentiment()
    const { score, comparative, positive, negative } = sentiment.analyze(text)

    setPositive(positive)
    setNegative(negative)
    setComparative(comparative)
  }

  // const newArr = positive.concat(negative)

  console.log(positive.length, negative.length)

  return (
    <>
      <TextInputStyles>
        <textarea
          type="textarea"
          placeholder="Paste text in this box"
          name="text"
          required
          value={text}
          onChange={handleChange}
        />
        {positive.length}
      </TextInputStyles>
      <button
        onClick={handleSubmit}
        style={{ float: 'right', marginRight: '20px' }}
      >
        Submit
      </button>
      <Chart positive={positive} negative={negative} />
    </>
  )
}

export default AddText
