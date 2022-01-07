import styled from "styled-components";

export const TransactionTable = styled.table`
  width: 100%;
  margin-top: 40px;
  box-shadow: ${(props) => props.theme.colors.boxShadow};
`;

export const TransactionTitle = styled.th`
  background-color: ${(props) => props.theme.colors.blue};
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 0.6;
  color: ${(props) => props.theme.colors.black};
`;

export const TableBody = styled.tbody`
  background-color: ${(props) => props.theme.colors.lightBlue};
  &:nth-child(2n) {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const TableString = styled.tr`
  height: 50px;
`;

export const TableItem = styled.td`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 0.84;
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.gray};
`;
