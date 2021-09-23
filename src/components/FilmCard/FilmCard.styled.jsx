import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const MovieDetailes = styled.div`
  display: flex;
`;

export const StyledImg = styled.img`
  width: 300px;
  height: auto;
  border-radius: 15px;
  margin-bottom: 10px;
  margin-right: 100px;
`;

export const StyledBtn = styled.button`
  margin: 20px;
  color: #2a363b;
  background-color: #2196f3;
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #2a363b;
    color: #2196f3;
  }
`;

export const StyledP = styled.p`
  font-size: 18px;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  color: #2a363b;
  padding: 5px;
  border-radius: 5px;
  background-color: #2196f3;
  &:hover,
  &:focus {
    color: #2196f3;
    background-color: #2a363b;
    font-weight: 700;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: circle;
`;

export const StyledLi = styled.li`
  margin-bottom: 10px;
  padding: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
