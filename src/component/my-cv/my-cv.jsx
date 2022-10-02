import { Fragment, useEffect, useState } from "react";
import { Box, Button, Header, Reset, Text, Flex } from "..";
import { get } from "axios";

const MyCV = () => {
  const [colectia, modificaColectia] = useState([]);
  const [summary, update] = useState({});

  useEffect(() => {
    const ggg = async () => {
      const { data } = await get("alex.json");
      update(data);
    };

    ggg();
  }, []);

  return (
    <div>
      <Reset />
      <Header>Welcome to my CV</Header>
      <Flex vertical align="center">
        <Text type="h1">Alexandru Ivanov</Text>
        <Text type="h2">Web Developer</Text>
        <Button color="funGreen">
          <span>O</span>
          Download
        </Button>
      </Flex>
      {/* <ul>
        {colectia.map(({ language, description, id }) => (
          <Fragment key={id}>
            <li>{description}</li>
            <li>{language}</li>
            <li>{id}</li>
            <hr />
          </Fragment>
        ))}
      </ul> */}
      <Header font={16} color="funOrange">
        Continue reading so you can get to know how I can help you help me help
        you so everytone gets helped
      </Header>
      <Box summary={summary} />
      <Header>Tech I love to work with</Header>
      <Button color="milanoRed">Subscribe</Button>
      <Header font={16} color="funOrange">
        Continue reading so you can get to know how I can help you help me help
        you so everytone gets helped
      </Header>
      <Button color="milanoRed">Let`s chat!</Button>
      <Header>Meet me where you are</Header>
      <Button color="funGreen">Bonus</Button>
      <Text type="h3">Ola</Text>
      <p>Neata, ne trezim?</p>
    </div>
  );
};

export default MyCV;
