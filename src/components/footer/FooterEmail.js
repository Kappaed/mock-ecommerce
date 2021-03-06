import styled from "styled-components";
import SectionHeading from "../shared/SectionHeading";

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
`;

const StyledText = styled.p`
  margin: 15px 0 10px 0;
  font-weight: lighter;
  @media (max-width: 600px) {
    margin: 20px 0;
    text-align: left;
  }
`;

const EmailWrapper = styled.form`
  display: flex;
`;

const EmailInput = styled.input`
  background: whitesmoke;
  border: none;
  padding: 15px 0 15px 15px;
  width: 100%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button = styled.button`
  cursor: pointer;
  color: white;
  font-size: 1.1rem;
  padding: 10px 25px;
  background: black;
  text-align: center;
  &:hover {
    opacity: var(--hover-link-opacity);
  }
`;

const EmailHeading = styled(SectionHeading)`
  @media (max-width: 600px) {
    text-align: left;
    margin-top: 30px;
  }
`;
const FooterEmail = () => {
  return (
    <Wrapper>
      <EmailHeading fontSize="1.2rem">Be in the know</EmailHeading>
      <StyledText>
        Promotions, new products and sales. Directly to your inbox.
      </StyledText>
      <EmailWrapper>
        <EmailInput
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
        />
        <Button type="submit">Subscribe</Button>
      </EmailWrapper>
    </Wrapper>
  );
};

export default FooterEmail;
