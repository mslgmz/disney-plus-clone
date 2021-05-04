import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0542B444AA85B0ACF8FD33B8D4FC29EE8B5C1E084863AC4D72AE50A4C57F1503/scale?width=400&aspectRatio=1.78&format=jpeg"></img>
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0295540AC0891AEF999447FF19B90AEF4220E39B21856A53965C1E426812CD6F/scale?width=400&aspectRatio=1.78&format=jpeg"></img>
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0E4AEE59DB4F6D20B1FA628F80A980D1B3A686B28E5A302556910FB8E159663B/scale?width=400&aspectRatio=1.78&format=jpeg"></img>
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0FCB0352D064EA31297DC2C9E630F9C8A2CAF6C3C7F21FA587D8BEE91635756A/scale?width=400&aspectRatio=1.78&format=jpeg"></img>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 20px -10px;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
