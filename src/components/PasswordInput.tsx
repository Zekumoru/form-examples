const PasswordInput = ({
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
      <label htmlFor="password-field" className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="password"
        name="password-field"
        id="password-field"
        className="input input-bordered"
        placeholder="Type password here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default PasswordInput;
