import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

const ThemeToggleButton: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ x: -5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 5, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('text', 'yellow')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
