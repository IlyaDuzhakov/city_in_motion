export type LevelType = "Легко" | "Средне" | "Сложно";
interface ButtonLevelProps {
  img: string;
  text: LevelType;
}

const ButtonLevel = ({ img, text }:ButtonLevelProps) => {
  return (
    <div>
      <img src={img} alt="alt" />
      <p>{text}</p>
    </div>
  );
};

export default ButtonLevel;
