import styled from "styled-components";

const StyledTestimonial = styled.div`
  position: relative;
  top: -8rem;
`;

const SectionTitle = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.875rem;
`;

const TestimonialContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 0.625rem;
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
  letter-spacing: -0.43px;
`;

function TestimonialSection() {
  return (
    <StyledTestimonial>
      <SectionTitle>Testimonial</SectionTitle>
      <TestimonialContainer>
        <TestimonialItem>
          <TestimonialTitle>Blue Kicks</TestimonialTitle>
          <TestimonialContent>
            Places where you can leverage tools and software to free up time to
            focus on growing the business.
          </TestimonialContent>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialTitle>Blue Kicks</TestimonialTitle>
          <TestimonialContent>
            Places where you can leverage tools and software to free up time to
            focus on growing the business.
          </TestimonialContent>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialTitle>Blue Kicks</TestimonialTitle>
          <TestimonialContent>
            Places where you can leverage tools and software to free up time to
            focus on growing the business.
          </TestimonialContent>
        </TestimonialItem>
      </TestimonialContainer>
    </StyledTestimonial>
  );
}

export default TestimonialSection;
