import styled from 'styled-components'
import ArrowRight from '../../assets/svg/arrow_right.svg'

const StyledCard = styled.div`
  position: relative;
  height: 176px;
`

const CardTitle = styled.div`
  position: absolute;
  bottom: 0px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1.063rem 1.563rem 1.063rem 1.563rem;
  width: 311px;
  
  font-size: 1rem;
  line-height: 1.188rem;
  letter-spacing: -0.036rem;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
`

const CardTitleName = styled.div`
  width: 218px;
  text-align: left;
`
function Card({title, image}) {
  return (
  <StyledCard>
    <img src={image} width="311" />
    <CardTitle> 
      <CardTitleName>{title}</CardTitleName>
      <img src= {ArrowRight} width="32" />
    </CardTitle>
  </StyledCard>)
}

export default Card;