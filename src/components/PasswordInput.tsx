const PasswordInput = ({
  label,
  value,
  setValue,
  errorMessage,
  required,
  minLength,
  maxLength,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  errorMessage?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}) => {
  return (
    <div className="form-control">
      <label htmlFor="password-field" className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="password"
        name="password-field"
        id="password-field"
        className={`input input-bordered ${errorMessage ? 'input-error' : ''}`}
        placeholder="Type password here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
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

export default PasswordInput;
