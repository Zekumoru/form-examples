const RadioOption = ({
  checked,
  name,
  label,
  onCheck,
}: {
  label: string;
  name: string;
  checked?: boolean;
  onCheck?: (value: string) => void;
}) => {
  return (
    <label className="label cursor-pointer justify-start gap-2">
      <input
        type="radio"
        name={name}
        className="radio radio-primary"
        checked={checked}
        onChange={() => onCheck?.(label)}
      />
      <span className="label-text">{label}</span>
    </label>
  );
};

export default RadioOption;
