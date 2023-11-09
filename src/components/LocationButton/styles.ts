import styled from 'styled-components'

export const Container = styled.header`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors['purple-light']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    color: ${(props) => props.theme.colors['purple-dark']};
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
  }

  svg {
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`
