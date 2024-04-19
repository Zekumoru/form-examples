import RadioOption from './RadioOption';

const RadioInput = ({
  name,
  label,
  options,
  value,
  setValue,
}: {
  value?: string;
  setValue?: (value: string) => void;
  name: string;
  label: string;
  options?: string[];
}) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {options?.map((option) => (
        <RadioOption
          key={option}
          label={option}
          name={name}
          checked={value === option}
          onCheck={setValue}
        />
      ))}
    </div>
  );
};

export default RadioInput;
