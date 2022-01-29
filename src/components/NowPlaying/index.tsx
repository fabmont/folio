import { Box, Link, Stack, Text, theme, useTheme } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import useSWR from 'swr';
import fetcher from '../../services/fetcher';
import { SpotifyLogoWrapper } from './styles';

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

const NowPlaying: React.FC = () => {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);
  const {
    colors: { whatsapp },
  } = theme;

  return data?.isPlaying ? (
    <Stack direction="row" mb="6" align="center">
      <SpotifyLogoWrapper>
        <FaSpotify size="18" color={whatsapp[500]} className="spotify-logo" />
      </SpotifyLogoWrapper>
      <Box pl="2">
        <Link isExternal href={data?.songUrl}>
          <Text fontWeight="bold">{data?.title}</Text>
        </Link>
        <Text fontSize="sm">{data?.artist}</Text>
      </Box>
    </Stack>
  ) : (
    <Stack direction="row" mb="6" align="center">
      <FaSpotify size="18" color={whatsapp[500]} opacity={0.4} />
      <Text fontWeight="bold">Not playing</Text>
      <Text>•</Text>
      <Text opacity={0.6}>Spotify</Text>
    </Stack>
  );
};

export default NowPlaying;
