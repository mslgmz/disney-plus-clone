import React from "react";
import styled from "styled-components";

function header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg"></Logo>
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg"></img>
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg"></img>
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg"></img>
          <span>WATCH LIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg"></img>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg"></img>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg"></img>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.6435-9/160276041_239409911225034_7257873140378262485_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE5djGKSHvOdXVx8Z2PwruHKMbZvXSLVk8oxtm9dItWTyqQ22xeDZS1s5hrFujfCYs9jjWPUSByjyumcZnhjvpt&_nc_ohc=UMOrbWSyf1IAX-9aY-B&_nc_ht=scontent.fhmo2-1.fna&oh=b024e6f63f13dbc8da124e257cd8631d&oe=60B46AB4" />
    </Nav>
  );
}

export default header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
