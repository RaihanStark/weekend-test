import styled, { css } from "styled-components";
import ArrowRight from '../../assets/svg/arrow_right.svg'
import { useRef, useEffect, useState } from 'react';
import axios from 'axios'

const StyledTestimonial = styled.div`
  position: relative;
  top: -6.35rem;
  margin-bottom: -2rem;

  @media (min-width: 992px) {
    margin-bottom: 0rem;
  }
`;

const SectionTitle = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.875rem;

  @media (min-width: 992px) {
    text-align: center;
  }
`;

const TestimonialContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 0.625rem;
  scroll-behavior: smooth;

  @media (min-width: 992px) {
    max-width: 37.313rem;
    overflow-x: hidden;
  }
  
}
`;

const TestimonialItem = styled.div`
  background-color: white;
  padding: 1.25rem;
  min-width: 15.438rem;
`;

const TestimonialTitle = styled.h1`
  font-weight: 900;
  font-size: 2rem;
  margin-bottom: 1.25rem;


`;

const TestimonialContent = styled.div`
  font-size: 0.75rem;
  letter-spacing: -0.027rem;
`;

const SliderContainer = styled.div`
  display:flex;
  justify-content: center;
`

const ActionSlider = styled.img`
  display: none;
  margin-left: 3.125rem;
  cursor: pointer;
  ${({left}) => left && css`
     transform: rotate(180deg);
     margin-left: 0;
     margin-right: 3.125rem;
  `}

  ${({disabled}) => disabled && css`
     opacity: 0.5;
     cursor: default;
  `}

  @media (min-width: 992px) {
    display: block;
  }
`

function TestimonialSection() {
  const testimonialContainerRef = useRef(null);
  const itemsRef = useRef([]);

  const itemWidth = 257;
  const itemDisplayPerPage = 2;

  const [testimonial, setTestimonial] = useState([]);

  const [sliderState, setSliderState] = useState({
    currentItem: 0,
    nextItem: 1,
    maxItem: 0,
    nextButtonDisabled: false,
    prevButtonDisabled: true,
  })

  useEffect(() => {
    axios.get("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
    .then((res) => {
      setTestimonial(res.data)
      setSliderState({...sliderState, maxItem: Math.ceil(res.data.length / itemDisplayPerPage)})
    })
  },[]);

  const actionSliderHandler = (e) => {
    let nagivateValue = e === "next" ? sliderState.nextItem : (sliderState.currentItem - 1);
    let scrollToValue = itemWidth * nagivateValue;
    let nextLastItem = false;
    let prevFirstItem = false;

    // Prevent nagivate button on first and last item
    if ( (e === "prev" && sliderState.prevButtonDisabled) || (e === "next" && sliderState.nextButtonDisabled) ) {
      return
    }

    // Determine last and first scroll
    switch (e) {
      case "next":
        // If last item
        if (sliderState.nextItem >= sliderState.maxItem) {
          nextLastItem = true;
        }
        break;

      case "prev":
        // if first item
        if (scrollToValue <= 0) {
          prevFirstItem = true;
        }
        break;

      default:
        break;
    }

    testimonialContainerRef.current.scrollTo(scrollToValue,0)

    setSliderState(
      {
        ...sliderState, 
        currentItem: e === "next" ? sliderState.currentItem + 1 : sliderState.currentItem - 1, 
        nextItem: e === "next" ? sliderState.nextItem + 1 : sliderState.nextItem - 1,
        nextButtonDisabled: nextLastItem,
        prevButtonDisabled: prevFirstItem
      }
    )
}

  return (
    <StyledTestimonial>
      <SectionTitle>Testimonial</SectionTitle>
      <SliderContainer>
        <ActionSlider left disabled={sliderState.prevButtonDisabled} onClick={()=> actionSliderHandler('prev')} src={ArrowRight}/>
        
        <TestimonialContainer ref={testimonialContainerRef}>
          
        {testimonial.length === 0 ? 
        <p style={{marginTop: '.5rem'}}>Loading...</p> 
        : 
        testimonial.map((element, index) => {
          return (
            <TestimonialItem ref={el => itemsRef.current[index] = el} key={element.id}>
              <TestimonialTitle>{element.by}</TestimonialTitle>
              <TestimonialContent>
                {element.testimony}
              </TestimonialContent>
            </TestimonialItem>
          )
        })}
        </TestimonialContainer>
        <ActionSlider disabled={sliderState.nextButtonDisabled} onClick={()=> actionSliderHandler('next')} src={ArrowRight}/>
      </SliderContainer>
    </StyledTestimonial>
  );
}

export default TestimonialSection;
