import React from 'react'
import styled from 'styled-components'
import Russell from '../images/russell-bertrand.jpg'

const HeaderStyles = styled.div`
  background-size: cover;

  display: grid;
  grid-template-columns: 50% 50%;
  background: #673ab708;
  grid-gap: 1em;
  .welcome {
    text-align: center;
    margin: 20px;
    margin-top: 5rem;
    margin-bottom: 10rem;
  }
  img {
    border: 15px solid #092df77a;
    padding: 20px;
    background: white;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`

export default function Header() {
  return (
    <HeaderStyles>
      <div className="welcome">
        <h1>Russell DeConjutgator</h1>
        <button>Try it out below</button>
      </div>
      <div className="border">
        <img src={Russell} alt="" style={{ width: '200px' }} />
      </div>
    </HeaderStyles>
  )
}
