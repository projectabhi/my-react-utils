import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const FooterPage = () => {
  return (
    <div>
      <Footer container>
        <FooterCopyright href="#" by="Abhijit Dey™" year={2025} />
        <FooterLinkGroup>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
    </div>
  );
};
export default FooterPage;
