import { useEffect, useRef } from 'react';

const SelectInput = ({
  label,
  placeholder,
  options,
  value,
  onSelect,
  errorMessage,
  required,
}: {
  value?: string;
  onSelect?: (value: string) => void;
  label: string;
  placeholder: string;
  options?: string[];
  errorMessage?: string;
  required?: boolean;
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (!required) return;

    selectRef.current?.setCustomValidity(
      value === '' ? 'Please select an option.' : ''
    );
  }, [value, required]);

  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        ref={selectRef}
        className={`select select-bordered ${
          errorMessage ? 'select-error' : ''
        }`}
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
      {errorMessage && (
        <div className="label">
          <span className="label-text-alt text-error font-bold">
            {errorMessage}
          </span>
        </div>
      )}
    </div>
  );
};

export default SelectInput;
