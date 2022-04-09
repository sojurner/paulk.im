import styled from '@emotion/styled';

export const Article = styled.div<{ isLight: boolean }>`
  p {
    margin: 15px 0;
    font-size: 18px;
    font-weight: 300;
    opacity: 0.8;
  }

  em {
    color: ${props => props.isLight ? 'var(--chakra-colors-blue-600)' : 'var(--chakra-colors-blue-200)' };

  }

  strong {
    color: ${props => props.isLight ? 'var(--chakra-colors-orange-600)' : 'var(--chakra-colors-orange-200)' };
    font-weight: bold;
    letter-spacing: 1.1px;
  }

  code {
    font-size: 14px;
  }

  code:not([class]) {
    background: ${props => props.isLight ? 'var(--chakra-colors-gray-500)' : 'var(--chakra-colors-whiteAlpha-300)' };
    color: ${props => props.isLight ? 'var(--chakra-colors-white)' : 'var(--chakra-colors-gray-200)' };
    border-radius: 5px;
    padding: 0 4px;
    font-size: 15px;
  }


  ul,
  ol {
    margin: 0 25px 25px;
  }

  li {
    opacity: 0.9;
    margin: 0.5em 0;
    font-size: 18px;
  }

  h4 {
    margin-bottom: 30px;
    font-size: 1.5em;
    opacity: 0.9;
  }

  img {
    margin: 30px auto;
    height: 400px;
  }

  h2 {
    margin: 40px 0 15px 0;
    font-size: 1.5em;
    font-weight: 600;
    font-family: Noto Serif Display;
    color: var(--chakra-colors-gray-800);
  }

  h3 {
    margin: 0 0 25px 0;
  }

  a {
    position: relative;
    color: ${props =>
      props.isLight
        ? 'var(--chakra-colors-purple-800)'
        : 'var(--chakra-colors-purple-200)'};
    font-weight: bold;
    text-decoration: underline;
    &:hover {
      background-image: linear-gradient(
        0deg,
        $color-negative-500 5%,
        transparent 10%
      );
    }
  }

  blockquote {
    background: $color-blank-800;
    padding: 10px 15px;
    border-left: 3px solid $color-neutral-900;
    font-weight: 500;
    margin-bottom: 25px;
    p {
      color: $color-neutral-600;
      margin: 0;
    }
  }
`;