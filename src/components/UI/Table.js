import styled from 'styled-components';

const TableWrapper = styled.div`
  overflow-x: auto;
  max-width: ${props => (props.inLine ? '68vw' : '80vw')};
`;
const Table = styled.table`
  margin: 10px 0;
  font-weight: 400;
  text-transform: capitalize;
  border-collapse: collapse;
  width: 100%;
  @media only screen and (max-width: ${props => props.theme.breakMobile}) {
    font-size: 0.8rem;
    letter-spacing: 0;
    margin: 10px 0;
  }
`;
const Th = styled.th`
  padding: 10px 15px;
  @media only screen and (max-width: ${props => props.theme.breakMobile}) {
    padding: 3px 5px;
  }
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.grey};
`;
const Tr = styled.tr`
  border-bottom: 1px solid ${props => props.theme.grey};
`;
const Td = styled.td`
  padding: 10px 15px;
  @media only screen and (max-width: ${props => props.theme.breakMobile}) {
    padding: 3px 5px;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
  }
  text-align: center;
`;

export { Table, Th, Tr, Td, TableWrapper };
