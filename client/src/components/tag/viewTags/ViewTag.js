import ViewTagItem from "./ViewTagItem";

const ViewTag = ({ tagList, color }) => {
  return (
    <div className="gap-1 flex flex-row items-center flex-wrap">
      {tagList.map((text, index) => (
        <div key={index}>
          <ViewTagItem text={text} color={color} />
        </div>
      ))}
    </div>
  );
};

export default ViewTag;
