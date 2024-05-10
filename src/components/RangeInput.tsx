import { useEffect, useId, useState } from 'react';

const RangeInput = ({
  min,
  max,
  step,
  label,
  value: initialValue,
  onChange,
}: {
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  value?: number;
  onChange?: (value: number) => void;
}) => {
  const id = useId();
  const [value, setValue] = useState(initialValue ?? 1);
  const [valueText, setValueText] = useState(initialValue?.toString() ?? '1');

  useEffect(() => {
    const value = Number(valueText);
    if (min && value < min) return setValue(min);
    if (max && value > max) return setValue(max);
    setValue(value);
  }, [valueText, min, max]);

  useEffect(() => {
    onChange?.(value);
  }, [onChange, value]);

  return (
    <div className="form-control">
      {label && (
        <label className="label-text" htmlFor={`value-${id}`}>
          {label}
        </label>
      )}
      <div className="flex items-center gap-2 flex-col md:flex-row">
        <input
          type="range"
          id={`value-${id}`}
          className="range range-sm"
          onChange={(e) => {
            setValueText(e.target.value.toString());
            setValue(Number(e.target.value));
          }}
          value={value}
          step={step}
          min={min}
          max={max}
        />
        <input
          type="text"
          className="input input-bordered w-full md:w-auto"
          value={valueText}
          onChange={(e) => {
            if (
              e.target.value !== '' &&
              !/^(0(\.\d*)?|[1-9]\d*\.?\d*)$/.test(e.target.value)
            )
              return;
            setValueText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default RangeInput;
