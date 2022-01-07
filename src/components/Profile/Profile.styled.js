import styled from "styled-components";

export const ProfileCard = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 500px;
  border-radius: 2px;
  margin: 0 auto;

  box-shadow: ${(props) => props.theme.colors.boxShadow};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 39px;
  background-color: ${(props) => props.theme.colors.lightPeach};
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 0.6;
  color: ${(props) => props.theme.colors.black};
  margin: 0;
  margin-top: 20px;
`;

export const Tag = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 0.84;
  color: ${(props) => props.theme.colors.gray};
  margin: 0;
  margin-top: 20px;
`;

export const Location = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 0.84;
  color: ${(props) => props.theme.colors.gray};
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
  background-color: ${(props) => props.theme.colors.peach};
`;

export const StatisticListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 25px;
  text-align: center;
  width: 60px;
  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.colors.black};
  }
`;

export const Label = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 0.84;
  color: ${(props) => props.theme.colors.gray};
`;

export const Quantity = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 0.8;
  color: ${(props) => props.theme.colors.black};
  margin-top: 10px;
`;
