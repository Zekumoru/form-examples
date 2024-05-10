const DatePicker = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
}) => {
  return (
    <div className="form-control">
      <label htmlFor="text-field" className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="date"
        className="input input-bordered"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
