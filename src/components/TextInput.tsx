const TextInput = ({
  label,
  value,
  setValue,
  errorMessage,
  required,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  errorMessage?: string;
  required?: boolean;
}) => {
  return (
    <div className="form-control">
      <label htmlFor="text-field" className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        name="text-field"
        id="text-field"
        className={`input input-bordered ${errorMessage ? 'input-error' : ''}`}
        placeholder="Type here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      />
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

export default TextInput;
