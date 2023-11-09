import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-bottom: 10rem;

  h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 3rem;
  }
`

export const ContentContainer = styled.section`
  padding: 2rem 0;
  position: relative;
`

export const CoffeeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 2.5rem;
  list-style: none;
`

export const CoffeeListItem = styled.li`
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 0.375rem 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem 1.25rem 1.25rem;

  img {
    margin-bottom: 0.75rem;
    margin-top: -16px;
  }

  h3 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.colors['base-label']};
    text-align: center;
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 2rem;
  }
`

export const CoffeeListItemCategory = styled.div`
  margin-bottom: 1rem;

  span {
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    border-radius: 6.25rem;
    font-family: Roboto;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;

    & + span {
      margin-left: 0.25rem;
    }
  }
`

export const CoffeeListItemFooter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  label {
    color: ${(props) => props.theme.colors['base-text']};
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;

    & > span {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 130%;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;

    & > svg {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors['purple-dark']};
      color: ${(props) => props.theme.colors.white};
      border-radius: 0.375rem;
      width: 2.375rem;
      height: 2.375rem;
      padding: 0.5rem;

      &:hover {
        background-color: ${(props) => props.theme.colors.purple};
      }
    }
  }
`
