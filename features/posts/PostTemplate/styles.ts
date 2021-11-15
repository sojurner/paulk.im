import styled from '@emotion/styled';

export const Article = styled.article`
  p {
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 300;
    color: var(--chakra-colors-gray-600);
  }

  em {
    color: var(--chakra-colors-blue-500);
    text-shadow: 0 0 5px var(--chakra-colors-blue-100),
      0 0 10px var(--chakra-colors-blue-200);
  }

  strong {
    color: var(--chakra-colors-pink-500);
    text-shadow: 0 0 5px var(--chakra-colors-pink-100),
      0 0 10px var(--chakra-colors-pink-200);
    font-weight: 700;
    letter-spacing: 1.1px;
  }

  ul {
    margin: -10px 0 25px 0;
  }

  li {
    opacity: 0.9;
    margin: 0.5em 0;
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
    color: var(--chakra-colors-gray-800);
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
