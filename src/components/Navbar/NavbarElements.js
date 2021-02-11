import { Link } from 'gatsby'
import { FaDev } from 'react-icons/fa'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: ${({ active }) => active ? "#252525" : "transparent"};
  height: 80px;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: background 0.2s ease;

  @media screen and (max-width: 960px) {
    background-color: ${({ click, active }) => (click || active ? "#252525" : "transparent")};
    transition: 0.325s all ease-out;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`

export const NavLogo = styled(Link)`
  font-family: "Do Hyeon", sans-serif;
  font-weight: bold;
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding-left: 24px;
`

export const NavIcon = styled(FaDev)`
  margin: 0 0.5rem 0.2rem 0.1rem;
  fill: #fff;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

    svg {
      color: #fff !important;
    }
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  z-index: 1;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    ${({ click }) => 
      (click ? "height: 95vh; opacity: 1;" : "height: 0; opacity: 0;")};
    transition: all 0.325s ease-out;
    background: #252525;
  }
`

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Roboto", sans-serif;
  transition: all 400ms cubic-bezier(.47,1.64,.41,.8);
  
  &:hover {
    color: #6930c3;
    transform: scale(1.3);
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`