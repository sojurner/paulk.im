import styled from '@emotion/styled';

export const Article = styled.article<{darkMode: boolean}>`
  p {
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 300;
    color: ${props => props.darkMode ? "var(--chakra-colors-gray-300)" : "var(--chakra-colors-gray-600)"};
  }

  em {
    color: ${props => props.darkMode ? "var(--chakra-colors-blue-300)" : "var(--chakra-colors-blue-500)"};
  }

  strong {
    color: ${props => props.darkMode ? "var(--chakra-colors-pink-300)" : "var(--chakra-colors-pink-500)"};
    font-weight: 700;
    letter-spacing: -.2px;
  }

  ul {
    margin: -10px 0 25px 0;
    padding-left: 20px;

    li {
      p {
        margin-bottom: 5px;
      }
    }
  }

  li {
    opacity: 0.9;
    color: $color-neutral-050;
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
    color: ${props => props.darkMode ? "var(--chakra-colors-orange-300)" : "var(--chakra-colors-orange-400)"};

  }

  h3 {
    margin: 0 0 25px 0;
    color: $color-neutral-200;
  }

  a {
    color: $color-negative-800;
    position: relative;
    background-image: linear-gradient(
      0deg,
      $color-negative-800 5%,
      transparent 5%
    );
    text-shadow: 0 0 5px $color-negative-100, 0 0 8px $color-negative-050;

    &:hover {
      color: $color-negative-500;
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
