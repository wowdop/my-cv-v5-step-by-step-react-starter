import { Button, Header, Reset } from "..";

const MyCV = () => {
  return (
    <div>
      <Reset />
      <Header>Welcome to my CV</Header>
      <Button color="funGreen">
        <span>O</span>
        Download
      </Button>
      <Header>Tech I love to work with</Header>
      <Button color="milanoRed">Subscribe</Button>
      <Header font={16} color="funOrange">
        Continue reading so you can get to know how I can help you help me help
        you so everytone gets helped
      </Header>
      <Header font={16} color="funBlue">
        Continue reading so you can get to know how I can help you help me help
        you so everytone gets helped
      </Header>
      <Button color="milanoRed">Let`s chat!</Button>
      <Header>Meet me where you are</Header>
      <Button color="funGreen">Bonus</Button>
      <p>Neata, ne trezim?</p>
    </div>
  );
};

export default MyCV;
