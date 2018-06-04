import React from 'react';
import styled from 'styled-components';

const Important = ({ children }) => (
  <PanelContainer>
    <Bar important />
    <Content>{children}</Content>
  </PanelContainer>
);

const Cit = ({ cit, by }) => (
  <PanelContainer>
    <Bar cit />
    <Content>
      <CitContent>{cit}</CitContent>
      <By>{by}</By>
    </Content>
  </PanelContainer>
);

const PanelContainer = styled.div`
  display: flex;
  margin: 10px 0;
  flex-direction: row;
  line-height: 1.7;
`;

const Bar = styled.div`
  width: 10px;
  background-color: ${props =>
    props.important ? props.theme.importantColor : props.theme.citColor};
  border-radius: 2px 0 0 2px;
`;

const Content = styled.div`
  background-color: ${props => props.theme.panelBackgroundColor};
  padding: 1rem;
  width: 100%;
  border-radius: 0 2px 2px 0;
`;

const CitContent = styled.cite`
  &::before {
    content: '"';
  }
  &::after {
    content: '"';
  }
`;

const By = styled.div`
  font-weight: bold;
  &::before {
    content: '- ';
  }
`;

export { Important, Cit };
