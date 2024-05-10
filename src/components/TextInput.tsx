import { useEffect, useRef } from 'react';

const TextInput = ({
  label,
  value,
  setValue,
  errorMessage,
  required,
  regex,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  errorMessage?: string;
  required?: boolean;
  regex?: RegExp;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value === '') return;

    if (regex && !regex.test(value)) {
      inputRef.current?.setCustomValidity(
        'Please respect the format of this field.'
      );
    } else {
      inputRef.current?.setCustomValidity('');
    }
  }, [value, regex]);

  return (
    <div className="form-control">
      <label htmlFor="text-field" className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        ref={inputRef}
        type="text"
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
