import styled from 'styled-components'

export const Container = styled.header`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors['yellow-light']};
  border-radius: 6px;
  position: relative;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors['yellow-dark']};
  }

  span {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
    font-family: 'Roboto';
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: -0.045rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`
