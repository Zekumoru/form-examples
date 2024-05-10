import { useState } from 'react';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import RadioInput from './RadioInput';
import CheckboxInput from './CheckboxInput';
import SelectInput from './SelectInput';
import ThemeSwapInput from './ThemeSwapInput';
import FileInput from './FileInput';
import RangeInput from './RangeInput';
import TextArea from './TextArea';
import ToggleInput from './ToggleInput';
import RatingInput from './RatingInput';
import DatePicker from './DatePicker';
import { format } from 'date-fns';

const radioOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
const selectOptions = ['Select 1', 'Select 2', 'Select 3', 'Select 4'];

const Form = () => {
  const [textValue, setTextValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [dateValue, setDateValue] = useState(() =>
    format(new Date(), 'yyyy-MM-dd')
  );
  const [textAreaValue, setTextAreaValue] = useState('');
  const [toggle1Checked, setToggle1Checked] = useState(true);
  const [toggle2Checked, setToggle2Checked] = useState(true);
  const [toggle3Checked, setToggle3Checked] = useState(true);
  const [radioValue, setRadioValue] = useState(radioOptions[0]);
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);
  const [checkbox4Checked, setCheckbox4Checked] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_fileValue, setFileValue] = useState<File | null>(null);
  const [rangeValue, setRangeValue] = useState(40);
  const [ratingValue, setRatingValue] = useState(3.5);

  const handleSubmit = () => {
    console.log(textValue);
  };

  return (
    <form
      className="form-control gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="flex justify-between">
        <h1 className="text-4xl">Form Examples</h1>
        <ThemeSwapInput firstTheme="dark" secondTheme="light" />
      </div>

      <TextInput label="Text Field" value={textValue} setValue={setTextValue} />

      <PasswordInput
        label="Password Field"
        value={passwordValue}
        setValue={setPasswordValue}
      />

      <DatePicker
        label="Date Picker"
        value={dateValue}
        setValue={setDateValue}
      />

      <TextArea
        placeholder="Input your text here..."
        value={textAreaValue}
        onChange={setTextAreaValue}
      />

      <FileInput label="File Input" onChange={setFileValue} />

      <RangeInput
        min={0}
        max={100}
        value={rangeValue}
        onChange={setRangeValue}
      />

      <div className="form-control">
        <div className="label">
          <span className="label-text">Toggle Inputs</span>
        </div>
        <ToggleInput
          label="Toggle 1"
          className="toggle-primary"
          checked={toggle1Checked}
          onCheck={setToggle1Checked}
        />
        <ToggleInput
          label="Toggle 2"
          className="toggle-secondary"
          checked={toggle2Checked}
          onCheck={setToggle2Checked}
        />
        <ToggleInput
          label="Toggle 3"
          className="toggle-accent"
          checked={toggle3Checked}
          onCheck={setToggle3Checked}
        />
      </div>

      <RadioInput
        label="Radio Options"
        name="radio-options"
        options={radioOptions}
        value={radioValue}
        setValue={setRadioValue}
      />

      <div className="form-control">
        <div className="label">
          <span className="label-text">Checkboxes</span>
        </div>
        <CheckboxInput
          label="Checkbox 1"
          checked={checkbox1Checked}
          onCheck={setCheckbox1Checked}
        />
        <CheckboxInput
          label="Checkbox 2"
          checked={checkbox2Checked}
          onCheck={setCheckbox2Checked}
        />
        <CheckboxInput
          label="Checkbox 3"
          checked={checkbox3Checked}
          onCheck={setCheckbox3Checked}
        />
        <CheckboxInput
          label="Checkbox 4"
          checked={checkbox4Checked}
          onCheck={setCheckbox4Checked}
        />
      </div>

      <SelectInput
        label="Selection"
        value={selectValue}
        placeholder="Select an option"
        options={selectOptions}
        onSelect={setSelectValue}
      />

      <RatingInput
        label="Rating Input"
        value={ratingValue}
        onChange={setRatingValue}
      />

      <button className="btn btn-primary mt-2">Submit</button>
    </form>
  );
};

export default Form;
