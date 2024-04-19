const RatingInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: number;
  onChange?: (value: number) => void;
}) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <div className="rating rating-lg rating-half">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <input
              type="radio"
              name="rating-10"
              key={index}
              className={`bg-orange-400 mask mask-star-2 ${
                index % 2 ? 'mask-half-2' : 'mask-half-1'
              }`}
              checked={!!value && (index + 1) / 2 <= value}
              onChange={() => onChange?.((index + 1) / 2)}
            />
          ))}
      </div>
    </div>
  );
};

export default RatingInput;
