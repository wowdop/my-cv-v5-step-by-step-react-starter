import { Text, Flex } from "..";

const Box = ({ summary }) => {
  const { title, box } = summary;
  console.log(box, "box");

  return (
    <div>
      <Text type="h3">{title}</Text>
      <Flex gap={8} vertical>
        {(box || []).map((elements, key) => {
          return <Text key={key}>{elements}</Text>;
        })}
      </Flex>
    </div>
  );
};

export default Box;
