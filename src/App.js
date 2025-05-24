import React, { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import html2canvas from 'html2canvas';
import tripContent from './tripContent.json';
import girlImg from './girl.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    direction: rtl;
    font-family: 'Vazirmatn', sans-serif;
    background: #2d211a;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  background: #a97c5d;
  width: 480px;
  margin: 40px auto;
  border-radius: 8px;
  padding: 0 0 16px 0;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  margin: 16px;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
`;

const Header = styled(Card)`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  padding-bottom: 0;
`;

const Logo = styled.div`
  background: #1a0d07;
  color: #ff3c3c;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 0 0 0 8px;
  padding: 8px 16px;
  position: absolute;
  top: 0;
  left: 0;
`;

const HeaderText = styled.div`
  flex: 1;
  margin-right: 16px;
  margin-top: 8px;
`;

const Title = styled.h1`
  color: #c22c2c;
  font-size: 1.7rem;
  margin: 0 0 8px 0;
  font-weight: 700;
`;

const Subtitle = styled.div`
  color: #c22c2c;
  font-size: 1rem;
  margin-bottom: 8px;
  white-space: pre-line;
`;

const Start = styled.div`
  color: #c22c2c;
  font-size: 1rem;
  margin-bottom: 8px;
`;

const Img = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-left: 16px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
`;

const Col = styled(Card)`
  flex: 1;
  min-width: 0;
  min-height: 80px;
`;

const SectionTitle = styled.div`
  color: #c22c2c;
  font-weight: bold;
  margin-bottom: 8px;
`;

const List = styled.ul`
  color: #c22c2c;
  margin: 0;
  padding-right: 18px;
  font-size: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 4px;
`;

const Note = styled.div`
  color: #c22c2c;
  font-size: 1rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const Why = styled(Card)`
  color: #c22c2c;
  font-size: 1rem;
`;

const Description = styled(Card)`
  color: #c22c2c;
  font-size: 1rem;
  white-space: pre-line;
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 12px;
  color: #fff;
  font-size: 1.1rem;
`;

const ScreenshotButton = styled.button`
  background: #c22c2c;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 18px;
  font-size: 1rem;
  margin: 16px auto 0 auto;
  display: block;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #a97c5d;
  }
`;

function App() {
  const ref = useRef();

  const handleScreenshot = async () => {
    if (ref.current) {
      const canvas = await html2canvas(ref.current);
      const link = document.createElement('a');
      link.download = 'trip-screenshot.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <div ref={ref}>
          <Header>
            <Logo>{tripContent.logo}</Logo>
            <Img src={girlImg} alt="trip" />
            <HeaderText>
              <Title>{tripContent.title}</Title>
              <Subtitle>{tripContent.subtitle}</Subtitle>
              <Start>{tripContent.start}</Start>
            </HeaderText>
          </Header>
          <Row>
            <Col>
              <SectionTitle>{tripContent.localFoodsTitle}</SectionTitle>
              <List>
                {tripContent.localFoods.map((food, i) => (
                  <ListItem key={i}>{food}</ListItem>
                ))}
              </List>
            </Col>
            <Col>
              <SectionTitle>{tripContent.transportTitle}</SectionTitle>
              <List>
                {tripContent.transport.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </List>
            </Col>
          </Row>
          <Card>
            <Note>🕒 {tripContent.specialNote}</Note>
            <div style={{ color: '#c22c2c', fontSize: '1rem' }}>{tripContent.contact}</div>
          </Card>
          <Why>
            <SectionTitle>{tripContent.whyTitle}</SectionTitle>
            <div>{tripContent.why}</div>
          </Why>
          <Description>
            {tripContent.description}
          </Description>
        </div>
        <ScreenshotButton onClick={handleScreenshot}>دریافت تصویر</ScreenshotButton>
        <Footer>
          <img src="https://assets.genial.ly/resources/logo-genially.svg" alt="genially" style={{height:24,verticalAlign:'middle'}} />
        </Footer>
      </Container>
    </>
  );
}

export default App; 