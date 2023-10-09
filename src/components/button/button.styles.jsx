import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 12px;
  background-color: #232D3F;
  color: white;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: #232D3F;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #232D3F;
  border: 1px solid black;

  &:hover {
    background-color: #232D3F;
    color: white;
    border: none;
  }
`;
