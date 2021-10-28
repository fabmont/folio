import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === 'transition',
});

const Section: React.FC<{ delay?: string }> = ({ children, delay = '0' }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transitionDuration="0.8"
    transitionDelay={delay}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
