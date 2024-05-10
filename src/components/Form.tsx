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

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PHONE_NUMBER_REGEX =
  /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const radioOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
const selectOptions = ['Select 1', 'Select 2', 'Select 3', 'Select 4'];

// TODO: to refactor error logic since there's no single source of truth
const Form = () => {
  const [textValue, setTextValue] = useState('');
  const [textErrorMessage, setTextErrorMessage] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [dateValue, setDateValue] = useState(() =>
    format(new Date(), 'yyyy-MM-dd')
  );
  const [textAreaValue, setTextAreaValue] = useState('');
  const [textAreaErrorMessage, setTextAreaErrorMessage] = useState('');
  const [toggle1Checked, setToggle1Checked] = useState(true);
  const [toggle2Checked, setToggle2Checked] = useState(true);
  const [toggle3Checked, setToggle3Checked] = useState(true);
  const [radioValue, setRadioValue] = useState(radioOptions[0]);
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);
  const [checkbox4Checked, setCheckbox4Checked] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [selectErrorMessage, setSelectErrorMessage] = useState('');
  const [fileValue, setFileValue] = useState<File | null>(null);
  const [fileErrorMessage, setFileErrorMessage] = useState('');
  const [rangeValue, setRangeValue] = useState(40);
  const [ratingValue, setRatingValue] = useState(3.5);
  const [jsonData, setJsonData] = useState('{}');

  const validateTextInput = () => {
    if (textValue.trim() === '') {
      setTextErrorMessage('Text is required!');
      return false;
    }
    return true;
  };

  const validateEmailInput = () => {
    if (emailValue.trim() === '') {
      setEmailErrorMessage('Email is required!');
      return false;
    }
    if (!PHONE_NUMBER_REGEX.test(phoneNumberValue)) {
      setEmailErrorMessage(
        'Wrong email format! Example format: test@example.com'
      );
      return false;
    }
    return true;
  };

  const validatePasswordInput = () => {
    if (passwordValue.trim() === '') {
      setPasswordErrorMessage('Password is required!');
      return false;
    }
    if (passwordValue.trimStart().length < 8) {
      setPasswordErrorMessage('Password must be at least 8 characters long.');
      return false;
    }
    if (passwordValue.trimStart().length > 30) {
      setPasswordErrorMessage(
        'Password cannot be more than 30 characters long.'
      );
      return false;
    }
    return true;
  };

  const validatePhoneNumberInput = () => {
    if (phoneNumberValue.trim() === '') {
      setPhoneNumberErrorMessage('Phone number is required!');
      return false;
    }
    if (!PHONE_NUMBER_REGEX.test(phoneNumberValue)) {
      setPhoneNumberErrorMessage(
        'Wrong number format! Example format: +39 123 456 7890'
      );
      return false;
    }
    return true;
  };

  const validateTextAreaInput = () => {
    if (textAreaValue === '') {
      setTextAreaErrorMessage('Text area is required!');
      return false;
    }
    return true;
  };

  const validateFileInput = () => {
    if (fileValue == null) {
      setFileErrorMessage('File is required!');
      return false;
    }
    return true;
  };

  const validateSelectInput = () => {
    if (selectValue === '') {
      setSelectErrorMessage('An option is required!');
      return false;
    }
    return true;
  };

  const handleValidations = () => {
    validateTextInput();
    validateEmailInput();
    validatePasswordInput();
    validatePhoneNumberInput();
    validateTextAreaInput();
    validateFileInput();
    validateSelectInput();
  };

  const handleSubmit = () => {
    const data = {
      text: textValue,
      email: emailValue,
      password: passwordValue,
      phoneNumber: phoneNumberValue,
      date: dateValue,
      textArea: textAreaValue,
      toggle1: toggle1Checked,
      toggle2: toggle2Checked,
      toggle3: toggle3Checked,
      radio: radioValue,
      checkbox1: checkbox1Checked,
      checkbox2: checkbox2Checked,
      checkbox3: checkbox3Checked,
      checkbox4: checkbox4Checked,
      select: selectValue,
      file: fileValue,
      rating: ratingValue,
    };

    setJsonData(
      JSON.stringify(data, (_key, value) => {
        if (value instanceof File) return value.name;
        return value;
      })
    );
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

      <TextInput
        label="Text Field"
        value={textValue}
        setValue={(value) => {
          setTextErrorMessage('');
          setTextValue(value);
        }}
        errorMessage={textErrorMessage}
        required
      />

      <TextInput
        label="Email Field"
        value={emailValue}
        setValue={(value) => {
          setEmailErrorMessage('');
          setEmailValue(value);
        }}
        errorMessage={emailErrorMessage}
        regex={EMAIL_REGEX}
        required
      />

      <PasswordInput
        label="Password Field"
        value={passwordValue}
        setValue={(value) => {
          setPasswordErrorMessage('');
          setPasswordValue(value);
        }}
        minLength={8}
        maxLength={30}
        errorMessage={passwordErrorMessage}
        required
      />

      <TextInput
        label="Phone Number"
        value={phoneNumberValue}
        setValue={(value) => {
          setPhoneNumberErrorMessage('');
          setPhoneNumberValue(value);
        }}
        errorMessage={phoneNumberErrorMessage}
        regex={PHONE_NUMBER_REGEX}
        required
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
        errorMessage={textAreaErrorMessage}
        required
      />

      <FileInput
        label="File Input"
        onChange={(file) => {
          setFileErrorMessage('');
          setFileValue(file);
        }}
        errorMessage={fileErrorMessage}
        required
      />

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
        errorMessage={selectErrorMessage}
        onSelect={(value) => {
          setSelectErrorMessage('');
          setSelectValue(value);
        }}
        required
      />

      <RatingInput
        label="Rating Input"
        value={ratingValue}
        onChange={setRatingValue}
      />

      <button className="btn btn-primary mt-2" onClick={handleValidations}>
        Submit
      </button>

      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">Sent JSON</div>
      </div>

      <div className="mockup-code no-scrollbar">
        <pre data-prefix="1">
          <code>{jsonData}</code>
        </pre>
      </div>
    </form>
  );
};

export default Form;
