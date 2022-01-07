import styled from "styled-components";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 50px;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.lightPeach};
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 0.6;
`;

export const StatisticList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 1px;
`;

export const StatisticListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  padding: 5px;
  background-color: ${getRandomHexColor};
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 0.84;
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const Percentage = styled.span`
  margin-top: 3px;
`;
