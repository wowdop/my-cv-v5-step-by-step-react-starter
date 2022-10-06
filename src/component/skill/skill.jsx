import { Pill, Text, Flex } from '..';

const Skill = ({ skillTypeList }) => {
  return (
    <div>
      <Flex gap={16} vertical>
        {(skillTypeList || []).map(({ category, skillList }, key) => {
          return (
            <Flex gap={16} vertical key={key}>
              <Text type='h4'>{category}</Text>
              <Flex gap={8}>
                {(skillList || []).map(({ color, label }, key) => {
                  return (
                    <Pill color={color} key={key}>
                      {label}
                    </Pill>
                  );
                })}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
};

export default Skill;
