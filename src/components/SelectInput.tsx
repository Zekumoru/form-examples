const SelectInput = ({
  label,
  placeholder,
  options,
  value,
  onSelect,
}: {
  value?: string;
  onSelect?: (value: string) => void;
  label: string;
  placeholder: string;
  options?: string[];
}) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        className="select select-bordered"
        name="selection"
        id="selection"
        value={!value && value === '' ? placeholder : value}
        onChange={(e) => onSelect?.(e.target.value)}
      >
        <option value={placeholder} disabled>
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
