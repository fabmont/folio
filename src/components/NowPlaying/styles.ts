import styled from 'styled-components';

export const SpotifyLogoWrapper = styled.div`
  .spotify-logo {
    animation: pulse 1s infinite;

    @keyframes pulse {
      0% {
        transform: scale(0.95);
      }

      70% {
        transform: scale(1.2);
      }

      100% {
        transform: scale(0.95);
      }
    }
  }
`;

export default SpotifyLogoWrapper;
