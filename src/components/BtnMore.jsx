import styled from 'styled-components';
import { Link } from 'react-router-dom'

const BtnMore = ({ url, click, Nama }) => {
    return (
        <Link to={url}>
            <StyledWrapper>
                <button onClick={click}>{Nama}</button>
            </StyledWrapper>
        </Link>
    );
}

const StyledWrapper = styled.div`
  button {
    color: #fff;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: transparent;
    border: 1px solid transparent;
    transition: all 0.3s;
    box-shadow: 6px 6px 12px rgba(000, 000, 000, 1), 
            -6px -6px 12px rgba(255, 41, 237, 0.01);
  }

  button:active {
    color: transparent;
    box-shadow: inset 4px 4px 12px #000, inset -4px -4px 12px #1f1f1f;
  }`;

export default BtnMore;
