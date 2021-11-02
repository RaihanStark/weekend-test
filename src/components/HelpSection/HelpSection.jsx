import styled from 'styled-components'
import Card from '../Card/Card'
import axios from 'axios'
import { useEffect, useState } from 'react';
import TextSection from "../TextSection/TextSection";

const StyledHelpSection = styled.div`
  position: relative;

  @media (min-width: 992px) {
    padding-top: 2.063rem;
    padding-bottom: 3.75rem;
  }
`

const StyledBlob = styled.svg`
    position: absolute;
    top: 0;
    right: 127px;
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
}
`

function HelpSection() {

  const [helpItems, setHelpItems] = useState([]);

  useEffect(()=>{
    axios.get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
    .then((res) => {
      setHelpItems(res.data)
    })

  },[])
  return (
  <StyledHelpSection>
    <StyledBlob width="159" height="195" viewBox="0 0 159 195" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Path 3" fillRule="evenodd" clipRule="evenodd" d="M142.605 121.872C99.5237 70.9323 138.138 30.094 93.7358 5.65252C49.3339 -18.7889 -19.0365 38.3254 4.97311 132.719C28.9827 227.113 214.319 206.668 142.605 121.872Z" fill="#FF8787"/>
    </StyledBlob>

    <TextSection
      card
      name="Help & Tips"
      description={helpItems.length === 0 ? "Loading..." : helpItems.map((item)=> { return <Card key={item.id} title={item.title} image={item.image}/>})}
    />
    
  </StyledHelpSection>)
}

export default HelpSection;