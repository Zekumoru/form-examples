const RangeInput = ({
  min,
  max,
  step,
  value,
  onChange,
}: {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
}) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">Range Input</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="range"
      />
    </div>
  );
};

export default RangeInput;
