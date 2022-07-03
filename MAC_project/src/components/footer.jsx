import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";
  import styled from "styled-components";
  
  const Container = styled.div({
    display: "flex",
  });
  
  const Left = styled.div({
    flex: "1",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  });
  
  const Logo = styled.h1({});
  
  const Desc = styled.p({
    margin: "20px 0px",
  });
  
  const SocialContainer = styled.div({
    display: "flex",
  });
  
  const SocialIcon = styled.div({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    color: "white",
    display: "flex",
    alignIteams: "center",
    justifyContent: "center",
    marginRight: "20px",
  });
  
  const Center = styled.div({
    flex: "1",
    padding: "20px",
  });
  
  const Title = styled.h3({
    marginBottom: "30px",
  });
  
  const List = styled.ul({
    margin: "0",
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
  });
  
  const ListItem = styled.li({
    width: "50%",
    marginBottom: "10px",
  });
  
  const Right = styled.div({
    flex: "1",
    padding: "20px",
  });
  
  const ContactItem = styled.div({
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
  });
  
  const Payment = styled.img({
    width: "50%",
  });
  
  export const Footer = () => {
    return (
      <div>

      
      <div className="foter">
        <Container>
          <Left>
            <Logo>E-STORE</Logo>
            <Desc>
            E-Store India is a Venture of Axis E-Corp Solutions Pvt. Ltd. It was started in Year 2016 and is growing year by years.

E-Store India is the electronic revolution, that is planned to serve common people technology  products with best quality and competitive price at the doorstep. The objective of this store chain is to arrange good quality  products on best price in the industry.
            </Desc>
            <SocialContainer>
              <SocialIcon color="3B5999">
                <Facebook />
              </SocialIcon>
              <SocialIcon color="E4405F">
                <Instagram />
              </SocialIcon>
              <SocialIcon color="55ACEE">
                <Twitter />
              </SocialIcon>
              <SocialIcon color="E60023">
                <Pinterest />
              </SocialIcon>
            </SocialContainer>
          </Left>
          <Center>
            <Title>SHOP</Title>
            <List>
              <ListItem>Laptop</ListItem>
              <ListItem>Tv</ListItem>
              <ListItem>Mobiles</ListItem>
              <ListItem>Electronics</ListItem>
              <ListItem>Tv</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
            </List>
          </Center>
          <Right>
            <Title>Contact</Title>
            <ContactItem>
              <Room style={{ marginRight: "10px" }} />
              Ongole, prakasam, AndhraPradesh-523263
            </ContactItem>
            <ContactItem>
              <Phone style={{ marginRight: "10px" }} /> +91 9113078942
            </ContactItem>
            <ContactItem>
              <MailOutline style={{ marginRight: "10px" }} />{" "}
              e-store80@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Right>
        </Container>
      </div>
      </div>
    );
  };
  
