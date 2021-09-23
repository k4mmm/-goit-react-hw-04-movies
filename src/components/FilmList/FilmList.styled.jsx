import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  color: #2a363b;
  &:hover,
  &:focus {
    color: #2196f3;
    background-color: #2a363b;
    padding: 5px;
    border-radius: 5px;
    font-weight: 700;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: circle;
`;

export const StyledLi = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
