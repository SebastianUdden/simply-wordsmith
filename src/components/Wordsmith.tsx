import { useState } from "react";
import styled from "styled-components";

const Wordsmith = () => {
  const [value, setValue] = useState("");
  const [reverseValue, setReverseValue] = useState("");
  const handleUpdateReverse = (value: string) => {
    setValue(value);
    const periods = value.split(".");
    const results = periods
      .map((p) => {
        const commas = p.split(",");
        return commas
          .map((c) => {
            const words = c.split(" ");
            const reversed = words
              .map((w) => w.split("").reverse().join(""))
              .join(" ");
            return reversed;
          })
          .join(",");
      })
      .join(".");
    setReverseValue(results);
  };
  return (
    <Wrapper>
      <h1>Wordsmith</h1>
      <Flex>
        <Input
          value={value}
          onChange={(e) => handleUpdateReverse(e.target.value)}
        />
      </Flex>
      <p>{reverseValue}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  text-align: left;
  padding: 20px;
  width: 100%;
`;
const Flex = styled.div`
  display: flex;
  width: 100%;
`;
const Input = styled.input`
  box-sizing: border-box;
  min-width: 100%;
  padding: 20px;
`;

export default Wordsmith;
