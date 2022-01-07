import styled from "styled-components";

export const ProfileCard = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 500px;
  border-radius: 2px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 39px;
  background-color: rgb(247, 239, 228);
`;

export const Avatar = styled.img`
  width: 200px;
  heigth: 200px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 0.6;
  color: #212121;
  margin: 0;
  margin-top: 20px;
`;

export const Tag = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 0.84;
  color: #757575;
  margin: 0;
  margin-top: 20px;
`;

export const Location = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 0.84;
  color: #757575;
  margin: 0;
  margin-top: 20px;
`;

export const StatisticList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
  background-color: rgb(253, 222, 183);
`;

export const StatisticListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 25px;
  text-align: center;
  width: 60px;
  &: not(: last-child) {
    border-right: 1px solid black;
  }
`;

export const Label = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 0.84;
  color: #757575;
`;

export const Quantity = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 0.8;
  color: #212121;
  margin-top: 10px;
`;
