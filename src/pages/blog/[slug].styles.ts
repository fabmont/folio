/* eslint-disable indent */
import { Theme } from '@chakra-ui/react';
import styled from '@emotion/styled';

const PostBody = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
    margin-bottom: 4px;
    margin-top: 4px;
  }

  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 18.72px;
  }
  h4,
  h5 {
    font-size: 16px;
  }

  p {
    text-align: justify;
  }

  code {
    display: inline-block;
    font-family: ${({ theme }: { theme: Theme }) => theme.fonts.mono};
    font-size: ${({ theme }: { theme: Theme }) => theme.fontSizes.sm};
    padding-inline: 0.2em;
    border-radius: ${({ theme }: { theme: Theme }) => theme.radii.sm};
    background: rgba(226, 232, 240, 0.16);
  }

  a {
    color: ${({ theme }: { theme: Theme }) => theme.colors.blue[400]};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default PostBody;
