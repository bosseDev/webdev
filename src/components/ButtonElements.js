import styled from 'styled-components'
import { BiRocket } from 'react-icons/bi'

export const Button = styled.button`
  display: flex;
  border-radius: 8px;
  background: ${({ primary }) => (primary ? "#6930c3" : "#64dfdf")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 16px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  transition: all 0.4s cubic-bezier(.25,.8,.25,1);

  &:hover {
    transition: all 0.4s ease-out;
    background: ${({ primary }) => (primary ? "#64dfdf" : "#6930c3")};
    color: #252525;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const ButtonIcon = styled(BiRocket)`
  margin-left: 0.5rem;
  font-size: 24px;
`