const TextArea = ({
  value,
  onChange,
  placeholder,
  errorMessage,
  required,
}: {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  errorMessage?: string;
  required?: boolean;
}) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">Text Area</span>
      </div>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className={`textarea textarea-bordered h-48 resize-none text-base ${
          errorMessage ? 'textarea-error' : ''
        }`}
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

export default TextArea;
