const FileInput = ({
  label,
  onChange,
  errorMessage,
  required,
}: {
  label: string;
  onChange?: (file: File | null) => void;
  errorMessage?: string;
  required?: boolean;
}) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="file"
        className={`file-input file-input-bordered ${
          errorMessage ? 'file-input-error' : ''
        }`}
        onChange={(e) => onChange?.(e.target.files && e.target.files[0])}
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

export default FileInput;
