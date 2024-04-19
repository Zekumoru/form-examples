const CheckboxInput = ({
  label,
  checked,
  onCheck,
}: {
  label: string;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
}) => {
  return (
    <label className="label cursor-pointer justify-start gap-2">
      <input
        type="checkbox"
        className="checkbox checkbox-primary"
        checked={checked}
        onChange={() => onCheck?.(!checked)}
      />
      <span className="label-text">{label}</span>
    </label>
  );
};

export default CheckboxInput;
