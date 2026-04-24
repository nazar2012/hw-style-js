import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  background-color: white;
  width: 210px;
  height: 80px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 12px;
`

const Levels = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`

const Text = styled.p`
    margin-left: 5px;
    margin-top: -10px;
    margin-bottom: 5px;
    align-items: flex-start;
`

const Level = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: ${({ active }) => (active ? "white" : "black")};
  background-color: ${({ active, type }) => {
        if (!active) return "#eee";

        if (type === "easy") return "#f09696";
        if (type === "medium") return "#f09696";
        if (type === "hard") return "#f09696";
    }};
`

function Difficulty({ difficulty }) {
    return (
        <Wrapper>
            <Text>Difficulty</Text>
            <Levels>
                <Level type="easy" active={difficulty === 0}>Easy</Level>
                <Level type="medium" active={difficulty === 1}>Medium</Level>
                <Level type="hard" active={difficulty === 2}>Hard</Level>
            </Levels>
        </Wrapper>
    );
}

export default Difficulty;