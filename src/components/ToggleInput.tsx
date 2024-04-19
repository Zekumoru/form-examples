const ToggleInput = ({
  label,
  className,
  checked,
  onCheck,
}: {
  label: string;
  className?: string;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
}) => {
  return (
    <label className="label cursor-pointer justify-start gap-2">
      <input
        type="checkbox"
        className={`toggle ${className ?? ''}`}
        checked={checked}
        onChange={() => onCheck?.(!checked)}
      />
      <span className="label-text">{label}</span>
    </label>
  );
};

export default ToggleInput;
