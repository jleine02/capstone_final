import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  text-underline-color: white;
`;

export const IconContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.grey};
  z-index: 99;
  padding: 0.7rem 1.5rem;
  input {
    width: 500px;
  }
  .toggle-navhandler {
    display: none;
  }
  .logo span {
    position: relative;
    top: 1px;
  }
  ul {
    list-style: none;
    display: flex;
    position: relative;
    top: 2px;
  }
  li svg {
    margin-right: 1.7rem;
    position: relative;
    top: 3px;
  }
  img {
    position: relative;
    top: 3px;
  }
  @media screen and (max-width: 1093px) {
    .toggle-navhandler {
      display: block;
    }
  }
  @media screen and (max-width: 1000px) {
    input {
      width: 400px;
    }
  }
  @media screen and (max-width: 850px) {
    input {
      width: 280px;
    }
  }
  @media screen and (max-width: 500px) {
    .toggle-navhandler {
      display: none;
    }
    li svg {
      width: 30px;
      height: 30px;
      margin-right: 1.7rem;
      position: relative;
      top: 0px;
    }
  }
`;