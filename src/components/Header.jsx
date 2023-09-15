import {
  Box,
  Container,
  HStack,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [activeLink, setActiveLink] = useState('home');

  return (
    <Box
      w={'full'}
      px={['30px', '50px', '100px', '100px', '150px', '250px']}
      display={'flex'}
      pos={'fixed'}
      top={0}
      right={0}
      left={0}
      bgColor={scrolled ? '#121212' : 'transparent'}
      alignItems={'center'}
      zIndex={20}
      transition={'0.32s ease-in-out'}
    >
      <Box display={['none', 'flex', 'flex']} py={'30px'}>
        <HashLink to={'#home'} style={{ textDecoration: 'none' }}>
          <Heading
            size={['sm', 'md', 'md', 'lg']}
            fontFamily={'cursive'}
            color={'white'}
          >
            SANSKAR MODI
          </Heading>
        </HashLink>
      </Box>
      <Spacer />
      <Box display={'flex'} letterSpacing={'wide'} fontWeight={'hairline'}>
        <HashLink
          onClick={() => setActiveLink('home')}
          to={'#home'}
          style={{ textDecoration: 'none' }}
        >
          <Text
            _hover={{ filter: 'invert(0)' }}
            filter={activeLink === 'home' ? 'invert(0)' : 'invert(0.3)'}
            transition={'0.2s ease-in-out'}
            mr={['20px', '30px', '30px', '50px']}
            color={'white'}
            fontSize={['15px', '17px', '19px']}
          >
            Home
          </Text>
        </HashLink>
        <HashLink
          to={'#skills'}
          onClick={() => setActiveLink('skills')}
          style={{ textDecoration: 'none' }}
        >
          {' '}
          <Text
            _hover={{ filter: 'invert(0)' }}
            filter={activeLink === 'skills' ? 'invert(0)' : 'invert(0.3)'}
            transition={'0.2s ease-in-out'}
            mr={['20px', '30px', '30px', '50px']}
            color={'white'}
            fontSize={['15px', '17px', '19px']}
          >
            Skills
          </Text>
        </HashLink>
        <HashLink
          onClick={() => setActiveLink('projects')}
          to={'#projects'}
          style={{ textDecoration: 'none' }}
        >
          <Text
            _hover={{ filter: 'invert(0)' }}
            filter={activeLink === 'projects' ? 'invert(0)' : 'invert(0.3)'}
            transition={'0.2s ease-in-out'}
            mr={['20px', '30px', '30px', '50px']}
            color={'white'}
            fontSize={['15px', '17px', '19px']}
          >
            Projects
          </Text>
        </HashLink>
      </Box>
      <HStack display={['none', 'none', 'none', 'inherit']}>
        <a
          href="https://www.linkedin.com/in/sanskar-modi-ba53a2267?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS%2Bydo8EpQbmX4Yw%2BvCDBXA%3D%3D"
          target="blank"
        >
          <Box
            p={'10px'}
            bgColor={'#282828'}
            border={'1px solid white'}
            borderRadius={'100%'}
            mr={['5px', '8px', '10px']}
            _hover={{ bgColor: '#60bafa' }}
            transition={'0.3s ease-in-out'}
          >
            <FaLinkedinIn color="white" size={'1.3em'} />
          </Box>
        </a>
        <a href="https://twitter.com/sanskar_modi8" target="blank">
          <Box
            p={'10px'}
            bgColor={'#282828'}
            border={'1px solid white'}
            borderRadius={'100%'}
            mr={['5px', '8px', '10px']}
            _hover={{ bgColor: '#60bafa' }}
            transition={'0.3s ease-in-out'}
          >
            <AiOutlineTwitter color="white" size={'1.3em'} />
          </Box>
        </a>
        <a href="https://github.com/sanskarmodi8" target="blank">
          <Box
            p={'10px'}
            bgColor={'#282828'}
            border={'1px solid white'}
            borderRadius={'100%'}
            mr={['15px', '20px', '25px']}
            _hover={{ bgColor: '#60bafa' }}
            transition={'0.3s ease-in-out'}
          >
            <FiGithub color="white" size={'1.3em'} />
          </Box>
        </a>
      </HStack>
      <HashLink to={'#contact'} style={{ textDecoration: 'none' }}>
        <Box
        mr={['10px', '0px', '0px', '0px']}
          my={'12px'}
          display={'flex'}
          textAlign={'center'}
          onClick={() => setActiveLink('contact')}
          color={'white'}
          fontSize={['sm', 'md', 'md', 'lg']}
          bgColor={'transparent'}
          p={['18px', '25px', '25px', '30px']}
          fontWeight={'extrabold'}
          py={['8px', '13px', '13px', '16px']}
          border={'1px solid white'}
          _hover={{ bgColor: 'white', color: 'black', cursor: 'pointer' }}
          transition={'all 300ms linear'}
        >
          Let's Connect
        </Box>
      </HashLink>
    </Box>
  );
};

export default Header;
