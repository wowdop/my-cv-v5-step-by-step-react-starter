import { Flex, Text, Pill } from '..';

const SkillContainer = ({ s }) => {
  return (
    <Flex vertical gap={16}>
      {s &&
        s.map(({ category, skillList }, key) => {
          return (
            <Flex gap={8} vertical key={key}>
              <Text type='h4'>{category}</Text>
              <Flex gap={8}>
                {skillList.map(({ color, label }, key) => {
                  return <Pill color={color} label={label} key={key} />;
                })}
              </Flex>
            </Flex>
          );
        })}
    </Flex>
  );
};

export default SkillContainer;
