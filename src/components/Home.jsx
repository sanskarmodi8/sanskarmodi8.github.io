import {
  Box,
  Image,
  VStack,
  Text,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Stack,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import React, { useState } from 'react';
import banner from '../assets/img/banner-bg.webp';
import { motion } from 'framer-motion';
import astronaut from '../assets/img/header-img.svg';
import TypeWriterEffect from 'react-typewriter-effect';
import { AiOutlineDownload } from 'react-icons/ai';
import footerimg from '../assets/img/footer-bg.webp';
import deepdetect from '../assets/img/ddlogo.png';
import mushroom from '../assets/img/mushroom.png';
import autoforecast from '../assets/img/autoforecast.png';

const Home = () => {
  const skills = [
    { name: 'Python', value: 90, bool: false },
    { name: 'Dockers', value: 80, bool: false },
    { name: 'C++', value: '80', bool: false },
    { name: 'Flask', value: 90, bool: false },
    { name: 'FastAPI', value: 90, bool: false },
    { name: 'Scikit-Learn', value: 90, bool: false },
    { name: 'Tensorflow', value: 90, bool: false },
    { name: 'OpenCV', value: 80, bool: false },
    { name: 'MLFLOW', value: 85, bool: false },
    { name: 'DVC', value: 85, bool: false },
    { name: 'ZenML', value: 80, bool: false },
    { name: 'PyTorch', value: 80, bool: false },
    { name: 'Hugging Face', value: 80, bool: false },
    { name: 'Langchain', value: 90, bool: false },
    { name: 'Gradio' , value: 90 , bool: false},
    { name: 'Streamlit' , value: 90 , bool: false},
  ];
  const tab1_projects = [
    {
      name: 'Deepfake Detection',
      url: 'https://huggingface.co/spaces/SanskarModi/DeepDetect',
      img: deepdetect,
      repourl: 'https://github.com/sanskarmodi8/DeepDetect',
    },
    {
      name: 'AUTOFORECAST',
      url: 'https://autoforecast-bacfbzfudkg5fhbd.centralindia-01.azurewebsites.net/',
      img: autoforecast,
      repourl: 'https://github.com/sanskarmodi8/AUTOFORECAST',
    },
    {
      name: 'Mushroom Classification',
      url: 'https://mushroom-classification.streamlit.app/',
      img: mushroom,
      repourl: 'https://github.com/sanskarmodi8/mushroom-classification',
    },
  ];
  const tab3_projects = [];
  const tab2_projects = [];

  const [activeTab, setActiveTab] = useState('ml');
  return (
    <Box
      w={'full'}
      h="fit-content"
      backgroundImage={banner}
      bgColor={'black'}
      pt={['14vh', '16vh', '18vh', '20vh']}
      id="home"
      bgRepeat={'no-repeat'}
    >
      <Stack
        direction={
          window.matchMedia('(max-width: 850px)').matches ? 'column' : 'row'
        }
        w={'full'}
        px={['30px', '50px', '100px', '100px', '150px', '250px']}
        h={'55vh'}
      >
        <VStack
          display={'flex'}
          h={'full'}
          w={window.matchMedia('(max-width: 850px)').matches ? 'full' : '45vw'}
        >
          <Box
            alignSelf={'flex-start'}
            display={'flex'}
            w={'fit-content'}
            h={'fit-content'}
            mb={'15px'}
            fontWeight={['bold', 'extrabold']}
            p={'7px 13px'}
            letterSpacing={['wide', 'wider', 'widest']}
            color={'white'}
            border={'1px solid rgba(255, 255, 255, 0.5)'}
            fontSize={['12px', '14px', '16px', '18px']}
            background={
              'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)'
            }
          >
            Welcome to my portfolio
          </Box>
          <Box
            alignSelf={'flex-start'}
            fontSize={['xl', '2xl', '2xl', '5xl']}
            fontWeight={'extrabold'}
            color={'white'}
            fontFamily={'heading'}
            display={'flex'}
            w={'fit-content'}
            h={'fit-content'}
          >
            <TypeWriterEffect
              startDelay={100}
              cursorColor="white"
              multiText={["Hi! I'm Sanskar, an ML Engineer,", 'I Love AI.']}
              multiTextDelay={1500}
              typeSpeed={69}
              multiTextLoop
            />
          </Box>
          <Box
            mt={'20px'}
            display={'flex'}
            w={'fit-content'}
            h={'fit-content'}
            color={'#B8B8B8'}
            fontSize={['14px', '16px', '16px', '18px']}
            letterSpacing={'widest'}
            p={'10px 0px'}
            alignSelf={'flex-start'}
            lineHeight={['1.3em', '1.5em', '1.5em', '1.7em']}
          >
            As a person interested in AI and ML, I look forward for creating
            impactful solutions. I love contributing to the Open Source, I
            thrive on challenges and embrace continuous learning.
          </Box>
          <Box
            display={'flex'}
            w={'fit-content'}
            h={'fit-content'}
            p={'10px 0px'}
            mt={'20px'}
            alignSelf={'flex-start'}
          >
            {/* eslint-disable-next-line */}
            <a 
              href="https://drive.google.com/file/d/12fUlMF4trz9mXT8QhhdAK29UO5JJCdEy/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Box
                color={'white'}
                letterSpacing={'wide'}
                transition={'0.3s ease-in-out'}
                fontSize={['md', 'xl']}
                fontWeight={'extrabold'}
                _hover={{ cursor: 'pointer' }}
              >
                <HStack>
                  <Text>Resume</Text>{' '}
                  <AiOutlineDownload size={'1.3em'} color="white" />
                </HStack>
              </Box>
            </a>
          </Box>
        </VStack>
        <VStack
          h={'fit-content'}
          display={'flex'}
          w={
            window.matchMedia('(max-width: 850px)').matches
              ? 'full'
              : 'fit-content'
          }
        >
          <motion.div
            animate={{
              translateY: window.matchMedia('(max-width: 850px)').matches
                ? '25px'
                : '50px',
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Image
              h={['40vh', '45vh', '45vh', '55vh']}
              objectFit={'contain'}
              src={astronaut}
              alt="astronaut"
            />
          </motion.div>
        </VStack>
      </Stack>
      <VStack
        mt={['300px', '320px', '320px', '250px', '150px', '50px']}
        id="skills"
        h={'fit-content'}
        pb={'50px'}
        p={'8px'}
        borderRadius={'64px'}
        mx={['30px', '50px', '100px', '100px', '150px', '250px']}
        bgColor={'#151515'}
      >
        <Box
          display={'flex'}
          color={'white'}
          fontSize={['25px', '30px', '40px']}
          fontWeight={'bold'}
          fontFamily={'heading'}
          w={'fit-content'}
          h={'fit-content'}
          my={'20px'}
        >
          Skills
        </Box>
        <Box
          w={'fit-content'}
          h={'fit-content'}
          display={'flex'}
          color={'#B8B8B8'}
          textAlign={'center'}
          className="aboutskillsnprojects"
          fontSize={['14px', '16px', '18px']}
          letterSpacing={['wide', 'wider', 'widest']}
          lineHeight={['1.1em', '1.3em', '1.5em']}
          pb={'20px'}
        >
          These are the skills I currently acquire and working on.
        </Box>
        <HStack pb={'25px'} wrap={'wrap'} justifyContent={'space-evenly'}>
          {skills.map(i => (
            <Skill name={i.name} value={i.value} bool={i.bool} />
          ))}
        </HStack>
      </VStack>
      <VStack
        w={'full'}
        h={'fit-content'}
        bgColor={'black'}
        mt={'100px'}
        id="projects"
        px={['10px', '20px', '30px', '40px', '70px', '90px', '120px', '150px']}
        pb={'200px'}
      >
        <Box
          display={'flex'}
          color={'white'}
          fontSize={['25px', '30px', '40px']}
          fontWeight={'bold'}
          fontFamily={'heading'}
          w={'fit-content'}
          h={'fit-content'}
          pb={'40px'}
        >
          Projects
        </Box>
        <Box h={'fit-content'} w={'fit-content'}>
          <Box
            background={
              activeTab === 'ml'
                ? 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)'
                : 'rgb(255 255 255 / 10%)'
            }
            fontSize={['2xs', 'xs', 'sm', 'sm', 'md', 'md']}
            display={'inline-flex'}
            color={'white'}
            letterSpacing={['normal', 'wide', 'wise', 'wider']}
            padding={['8px', '8px', '13px', '18px']}
            px={['10px', '15px', '20px', '50px', '50px', '70px']}
            m={'0px'}
            border={'1px solid rgba(255, 255, 255, 0.5)'}
            borderRadius={'64px 0 0 64px'}
            onClick={() => setActiveTab('ml')}
            cursor={'pointer'}
          >
            AI / ML
          </Box>
          <Box
            background={
              activeTab === 'reimpl'
                ? 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)'
                : 'rgb(255 255 255 / 10%)'
            }
            display={'inline-flex'}
            color={'white'}
            letterSpacing={['normal', 'wide', 'wise', 'wider']}
            padding={['8px', '8px', '13px', '18px']}
            fontSize={['2xs', 'xs', 'sm', 'sm', 'md', 'md']}
            px={['20px', '25px', '30px', '60px', '60px', '80px']}
            m={'0px'}
            border={'1px solid rgba(255, 255, 255, 0.5)'}
            onClick={() => setActiveTab('reimpl')}
            cursor={'pointer'}
          >
            Reimplementations
          </Box>
          <Box
            background={
              activeTab === 'cpp'
                ? 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)'
                : 'rgb(255 255 255 / 10%)'
            }
            display={'inline-flex'}
            color={'white'}
            letterSpacing={['normal', 'wide', 'wise', 'wider']}
            padding={['8px', '8px', '13px', '18px']}
            fontSize={['2xs', 'xs', 'sm', 'sm', 'md', 'md']}
            px={['20px', '25px', '30px', '60px', '60px', '80px']}
            m={'0px'}
            border={'1px solid rgba(255, 255, 255, 0.5)'}
            onClick={() => setActiveTab('cpp')}
            borderRadius={'0 64px 64px 0'}
            cursor={'pointer'}
          >
            C++ & DSA
          </Box>
        </Box>
        <Box
          w={'fit-content'}
          h={'fit-content'}
          className="aboutskillsnprojects"
          pt={'70px'}
          display={'flex'}
          color={'#B8B8B8'}
          textAlign={'center'}
          fontSize={['xs', 'sm', 'sm', 'md', 'md']}
          letterSpacing={'widest'}
          lineHeight={'1.5em'}
        >
          {activeTab === 'cpp'
            ? `Personal projects using C++, Data Structures and Algorithms .`
            : activeTab === 'ml'
            ? `Personal projects using AI, ML.`
            : `ML Research papers reimplemented.`}
        </Box>
        <HStack
          display={activeTab === 'cpp' ? 'inherit' : 'none'}
          mt={'50px'}
          wrap={'wrap'}
          justifyContent={'space-evenly'}
        >
          {tab2_projects.map(i => (
            <Project
              name={i.name}
              url={i.url}
              img={i.img}
              repourl={i.repourl}
            />
          ))}
        </HStack>
        <HStack
          display={activeTab === 'ml' ? 'inherit' : 'none'}
          mt={'50px'}
          wrap={'wrap'}
          justifyContent={'space-evenly'}
        >
          {tab1_projects.map(i => (
            <Project
              name={i.name}
              url={i.url}
              img={i.img}
              repourl={i.repourl}
            />
          ))}
        </HStack>
        <HStack
          display={activeTab === 'reimpl' ? 'inherit' : 'none'}
          mt={'50px'}
          wrap={'wrap'}
          justifyContent={'space-evenly'}
        >
          {tab3_projects.map(i => (
            <Project
              name={i.name}
              url={i.url}
              img={i.img}
              repourl={i.repourl}
            />
          ))}
        </HStack>
      </VStack>
      <Stack
        py={'100px'}
        id="contact"
        px={['30px', '50px', '100px', '100px', '150px', '250px']}
        direction={
          window.matchMedia('(max-width: 700px)').matches ? 'column' : 'row'
        }
        bgImage={footerimg}
        display={'flex'}
        alignItems={'center'}
      >
        <Box display={'flex'}>
          <Heading mb={'10px'} color={'white'} size={['sm', 'md', 'md', 'lg']}>
            SANSKAR MODI
          </Heading>
        </Box>
        <Spacer className="footerspacer" />
        <VStack display={'flex'}>
          <Box
            display={'flex'}
            alignSelf={
              window.matchMedia('(max-width: 700px)').matches
                ? 'center'
                : 'flex-end'
            }
          >
            <a
              href="https://www.linkedin.com/in/sanskar-modi-ba53a2267?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS%2Bydo8EpQbmX4Yw%2BvCDBXA%3D%3D"
              target="blank"
            >
              <Box
                bgColor={'#282828'}
                padding={['9px', '10px', '12px']}
                border={'1px solid white'}
                borderRadius={'100%'}
                mr={'10px'}
                _hover={{ bgColor: '#60bafa' }}
                transition={'0.3s ease-in-out'}
              >
                <FaLinkedinIn color="white" size={'1.2em'} />
              </Box>
            </a>
            <a href="https://twitter.com/sanskar_modi8" target="blank">
              <Box
                bgColor={'#282828'}
                padding={['9px', '10px', '12px']}
                border={'1px solid white'}
                borderRadius={'100%'}
                mr={'10px'}
                _hover={{ bgColor: '#60bafa' }}
                transition={'0.3s ease-in-out'}
              >
                <AiOutlineTwitter color="white" size={'1.2em'} />
              </Box>
            </a>
            <a href="https://github.com/sanskarmodi8" target="blank">
              <Box
                bgColor={'#282828'}
                padding={['9px', '10px', '12px']}
                border={'1px solid white'}
                borderRadius={'100%'}
                _hover={{ bgColor: '#60bafa' }}
                transition={'0.3s ease-in-out'}
                className="github"
              >
                <FiGithub color="white" size={'1.2em'} />
              </Box>
            </a>
          </Box>
          <Text
            fontSize={'14px'}
            fontWeight={'400'}
            letterSpacing={'0.5px'}
            color={'#B8B8B8'}
          >
            Copyright 2023. All rights reserved
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};
const Project = ({ name, url, img, repourl }) => {
  return (
    <VStack>
      <Box
        h={'fit-content'}
        mt={['20px', '30px', '30px', '40px']}
        w={'fit-content'}
        position={'relative'}
      >
        <Image
          className="projectimg"
          fit={'fit'}
          borderRadius={'10px'}
          w={['330px', '330px', '330px', '355px', '405px']}
          h={['220px', '220px', '220px', '245px', '295px']}
          src={img}
          alt="project"
        />

        <VStack
          pos={'absolute'}
          borderRadius={'10px'}
          _hover={{
            opacity: '0.95',
            background:
              'linear-gradient(90.21deg, #9370db -5.91%, #9370db 111.58%)',
          }}
          top={0}
          bottom={0}
          left={0}
          right={0}
          opacity={0}
          transition={'0.3s ease-in-out'}
          justifyContent={'center'}
          alignItems={'center'}
          background={
            'linear-gradient(90.21deg, #9370db -5.91%, #9370db 111.58%)'
          }
        >
          <Text
            p={'5px'}
            fontSize={'lg'}
            color={'white'}
            as={'h2'}
            fontWeight={'extrabold'}
          >{`${name}`}</Text>
          <Box display={'flex'}>
            {url !== '' ? (
              <a href={url} target="blank">
                <Box
                  bgColor={'#282828'}
                  padding={'13px'}
                  border={'1px solid white'}
                  borderRadius={'100%'}
                  mr={'10'}
                  _hover={{ bgColor: 'black' }}
                  transition={'0.3s ease-in-out'}
                >
                  <FaPlay color="white" size={'1em'} />
                </Box>
              </a>
            ) : (
              <></>
            )}
            <a href={`${repourl}`} target="blank">
              <Box
                bgColor={'#282828'}
                padding={'12px'}
                border={'1px solid white'}
                borderRadius={'100%'}
                _hover={{ bgColor: 'black' }}
                transition={'0.3s ease-in-out'}
                className="github"
              >
                <FiGithub color="white" size={'1.2em'} />
              </Box>
            </a>
          </Box>
        </VStack>
      </Box>
      <Text
        py={'10px'}
        color={'#B8B8B8'}
        textAlign={'center'}
        fontSize={['xs', 'sm', 'sm', 'md', 'md']}
        letterSpacing={'widest'}
        lineHeight={'1.5em'}
      >
        {name}
      </Text>
    </VStack>
  );
};
const Skill = ({ name, value, bool }) => {
  return (
    <Box
      className="skillscontainer"
      px={['20px', '20px', '20px', '50px']}
      py={['0px', '50px']}
      textAlign={'center'}
      mb={['30px', '30px']}
    >
      <CircularProgress
        value={value}
        size={['80px', '90px', '100px', '200px']}
        color="mediumpurple"
        trackColor="gray.900"
        capIsRound
        isIndeterminate={bool}
      >
        <CircularProgressLabel
          fontSize={['14px', '16px', '20px', '24px']}
          fontWeight={'bold'}
          color={'white'}
        >
          {bool ? '' : `${value}%`}
        </CircularProgressLabel>
      </CircularProgress>
      <Text
        fontSize={['sm', 'md']}
        color={'white'}
        mt={[3, 3, 3, 3, -20]}
        letterSpacing={['tight', 'wide', 'wider', 'widest']}
      >
        {`${name}`}
      </Text>
    </Box>
  );
};

export default Home;
