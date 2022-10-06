import { Fragment, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Header,
  Reset,
  Text,
  Flex,
  Pill,
  Skill,
  Icon
} from '..';
import { get } from 'axios';

const MyCV = () => {
  const [colectia, modificaColectia] = useState([]);
  const [summary, update] = useState({});

  useEffect(() => {
    const ggg = async () => {
      const { data } = await get('content.json');
      update(data);
    };

    ggg();
  }, []);
  const { aboutTitle, descriptionList } = summary.welcome || {
    welcome: { aboutTitle: '', descriptionList: [''] },
  };
  const { skillTypeList, legend, sectionTitle, description } = summary.skills || {
    skills: { skillTypeList: [], legend: {}, sectionTitle: "", description: [] },
  };
  const { title, itemList } = legend || {title: '', itemList: []};
  console.log('summary', summary);
  return (
    <div>
      <Reset />
      <Header>Welcome to my CV</Header>
      <Flex vertical align='center'>
        <Icon culoare='black' size='small' icon='youtube'/>
        <Button icon='youtube' href='google.com' title='BINE' color='transparent'>fantoma
        </Button>
        <Text type='h1'>Alexandru Ivanov</Text>
        <Text type='h2'>Web Developer</Text>
        <Button icon='youtube'color='funGreen'>
          <span>O</span>
          Download
        </Button>
        <Divider height={32} />
      </Flex>
      <Header font={16} color='funOrange'>
        Continue reading so you can get to know how I can help you help me help
        you so everytone gets helped
      </Header>
      <Divider height={16} />
      <Flex vertical align='center'>
        <Box aboutTitle={aboutTitle} descriptionList={descriptionList} />
        <Button color='milanoRed'>Subscribe</Button>
      </Flex>
      <Divider height={48} />
      <Header>Tech I love to work with</Header>
      <Flex align='center' vertical>
        <Button href='google.com' title='BINE' color='transparent'>
            FANTOMA
          </Button>
        <Box aboutTitle={sectionTitle} descriptionList={description} />
        <Skill skillTypeList={skillTypeList} />
        <Box padding={8} aboutTitle={title} legend={itemList} shadow />
      </Flex> 
      <Header font={16} color='funOrange'>
        Continue reading so you can get to know how I can help you help me help
        you so everytone gets helped
      </Header>
      <Flex vertical align='center'>
        <Button color='milanoRed'>Let`s chat!</Button>
      </Flex>
      <Divider height={32} />
      <Header>Meet me where you are</Header>
      <Flex vertical align='center'>
        <Button href='google.com' title='BINE' color='transparent'>
          FANTOMA
        </Button>
        <Button color='funGreen'>Bonus</Button>
      </Flex>
      <Text type='h3'>Ola</Text>
      <p>Neata, ne trezim?</p>
    </div>
  );
};

export default MyCV;
