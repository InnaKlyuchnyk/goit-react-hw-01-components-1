import styled from "styled-components";

function checkStatus({ status, theme }) {
  switch (status) {
    case true:
      return theme.colors.green;
    case false:
      return theme.colors.red;
    default:
      return theme.colors.black;
  }
}

export const OneFriend = styled.li`
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 16px;
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
  margin-right: 20px;
  background-color: ${checkStatus};
`;

export const FriendImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

export const FriendName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.black};
  margin: 0;
`;
