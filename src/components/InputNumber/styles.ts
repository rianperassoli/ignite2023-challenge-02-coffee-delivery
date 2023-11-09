import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-button']};
  display: inline-flex;
  height: 2rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.375rem;

  & > span {
    color: ${(props) => props.theme.colors['base-title']};
    text-align: center;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }

  & > svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.purple};

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`
