const TextArea = ({
  value,
  onChange,
  placeholder,
}: {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
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
        className="textarea textarea-bordered h-48 resize-none text-base"
      />
    </div>
  );
};

export default TextArea;
