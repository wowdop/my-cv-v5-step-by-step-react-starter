import { Text, Flex } from "..";

const Box = ({ aboutTitle, descriptionList, shadow, padding }) => {
  return (
    <div>
      <Text type="h3">{aboutTitle}</Text>
      <Flex padding={padding} gap={8} vertical shadow={shadow}>
        {(descriptionList || []).map((elements, key) => {
          return <Text key={key}>{elements}</Text>;
        })}
      </Flex>
    </div>
  );
};

export default Box;
