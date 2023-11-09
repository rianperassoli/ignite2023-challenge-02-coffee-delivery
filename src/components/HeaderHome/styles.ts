import styled from 'styled-components'
import imageBG from '../../assets/header-background.png'

export const Container = styled.div`
  background-image: url(${imageBG});
  position: absolute;
  left: 0;
  height: 34rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`
export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 37.75rem;

  h1 {
    color: ${(props) => props.theme.colors['base-title']};
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  p {
    flex: 1;
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: Roboto;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const List = styled.div`
  display: flex;

  & > div + div {
    margin-left: 2.5rem;
  }

  & > div > div {
    margin-bottom: 1.25rem;
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  span {
    color: ${(props) => props.theme.colors['base-text']};
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

const ICON_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IconWrapperProps {
  bgColor: keyof typeof ICON_COLORS
}

export const IconWrapper = styled.div<IconWrapperProps>`
  background-color: ${(props) =>
    props.theme.colors[ICON_COLORS[props.bgColor]]};
  border-radius: 50%;
  padding: 0%.5rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    height: 22.5rem;
    object-fit: cover;
  }
`
