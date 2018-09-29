import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import ShareIcons from '../ShareIcons';

const checkIfTextSelected = () => {
  const selection = window.getSelection();
  return (
    selection &&
    selection.rangeCount > 0 &&
    selection.getRangeAt(0) &&
    !selection.getRangeAt(0).collapsed &&
    selection.getRangeAt(0).getBoundingClientRect().width > 0 &&
    selection.getRangeAt(0).getBoundingClientRect().height > 0
  );
};

const PopUp = ({ top, left }) => (
  <PopUpContainer top={top} left={left}>
    <ArrowDown>
      <polygon points="0,0 10,10 20,0" fill="currentColor" />
    </ArrowDown>
    <ShareIcons popup />
    {/* <IconWrapper twitter>
      <IconTwitter />
    </IconWrapper>
    <IconWrapper linkedin>
      <IconLinkedin />
    </IconWrapper> */}
  </PopUpContainer>
);

export default class Highlightable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popUptop: 0,
      popUpLeft: 0,
      selectedText: '',
    };
  }

  clearSelection = () => {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      document.selection.empty();
    }
    this.setState({
      selectedText: '',
    });
  };
  componentDidMount() {
    window.addEventListener('mousedown', this.clearSelection, true);
  }
  componentWillUnmount() {
    window.removeEventListener('mousedown', this.clearSelection, true);
  }
  computePopUpBox = () => {
    const selection = window.getSelection();
    if (!checkIfTextSelected()) {
      this.clearSelection();
      return;
    }
    this.setState({
      selectedText: selection.toString(),
    });
    const el = ReactDOM.findDOMNode(this.highlightableArea);
    const highlightableAreaRect = el.getBoundingClientRect();
    const selectionRect = selection.getRangeAt(0).getBoundingClientRect();
    this.setState({
      popUpLeft:
        selectionRect.x -
        highlightableAreaRect.x -
        75 +
        selectionRect.width / 2,
      popUptop: selectionRect.y - highlightableAreaRect.y - 60,
    });
  };

  render() {
    return (
      <HighlightableWrapper
        onMouseUp={this.computePopUpBox}
        onMouseDown={this.clearSelection}
        ref={c => {
          this.highlightableArea = c;
        }}
      >
        {this.state.selectedText ? (
          <PopUp top={this.state.popUptop} left={this.state.popUpLeft} />
        ) : null}
        {this.props.children}
      </HighlightableWrapper>
    );
  }
}

const HighlightableWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  height: 50px;
  width: 50px;
  svg {
    fill: ${props => props.theme.inverseTextColor};
    &:hover {
      cursor: pointer;
    }
  }
`;
const ArrowDown = styled.svg`
  height: 20px;
  width: 40px;
  color: red;
  position: absolute;
  bottom: -19px;
  left: 45px;
  color: ${props => props.theme.popUpColor};
  filter: drop-shadow(1px 1px rgba(0, 0, 0, 0.5));
`;

const PopUpContainer = styled.div`
  padding: 0 10px;
  min-width: 100px;
  z-index: 30;
  height: 50px;
  background-color: ${props => props.theme.popUpColor};
  border-radius: 10px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;
