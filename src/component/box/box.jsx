import { Text, Flex, Pill } from "..";

const Box = ({ aboutTitle, descriptionList, shadow, padding, legend}) => {
  return (
    <Flex width={60} vertical>
      <Text type="h3">{aboutTitle}</Text>
      <Flex padding={padding} gap={8} vertical shadow={shadow}>
        {descriptionList && descriptionList.map((element, key) => {
          return <Text key={key}>{element}</Text>;
        })}

        {legend && legend.map(({color, label}, key) => {
          return (
            <Flex gap={8} padding={[8,0]} key={key}>
              <Pill color={color}>{key+1}</Pill>
              <Text>{label}</Text>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  );
};

export default Box;
