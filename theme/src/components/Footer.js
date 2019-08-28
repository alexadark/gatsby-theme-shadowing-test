/** @jsx jsx */
import { Container, Footer as StyledFooter, jsx } from "theme-ui"
import FooterContent from "./FooterContent"
import AccordionTest from "./Accordion"

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterContent />
      <AccordionTest />
    </Container>
  </StyledFooter>
)

export default Footer
