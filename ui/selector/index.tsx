interface SelectorPropItem {
  description: string;
  action: Function;
}

interface SelectorProps {
  options: SelectorPropItem[];
}

// TODO: action should receive a parameter identifying a supported action
// TODO: there should be a default message when no option
const Selector: React.FC<SelectorProps> = ({ options }) => {
  return (
    <div className="selector">
      {options.length > 0 ? (
        options.map((option) => {
          return (
            <div
              className="selector-option"
              onClick={() => {
                option.action();
              }}
            >
              {option.description}
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Selector;
