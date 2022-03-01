import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 80%;
  align-items: center;
  position: relative;
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 60%;
    display: none;
  }
  &:hover {
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  //height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ID = styled.span`
  width: 50%;
  //margin-bottom: 15px;
`;

export const CreatedDate = styled.span`
  width: 50%;
`;