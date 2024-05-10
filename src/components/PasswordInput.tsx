const PasswordInput = ({
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
