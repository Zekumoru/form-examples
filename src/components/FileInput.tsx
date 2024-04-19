const FileInput = ({
  label,
  onChange,
}: {
  label: string;
  onChange?: (file: File | null) => void;
}) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="file"
        className="file-input file-input-bordered"
        onChange={(e) => onChange?.(e.target.files && e.target.files[0])}
      />
    </div>
  );
};

export default FileInput;
