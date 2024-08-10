import React, { useState } from 'react';
import JsonInput from './JsonInput';
import ValidationResult from './ValidationResult';
import FormattedJson from './FormattedJson';

const JsonValidator = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [formattedJson, setFormattedJson] = useState('');

  const validateJson = (input) => {
    try {
      const parsed = JSON.parse(input);
      setIsValid(true);
      setErrorMessage('');
      setFormattedJson(JSON.stringify(parsed, null, 2));
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error.message);
      setFormattedJson('');
    }
  };

  const handleInputChange = (value) => {
    setJsonInput(value);
    if (value.trim() === '') {
      setIsValid(null);
      setErrorMessage('');
      setFormattedJson('');
    } else {
      validateJson(value);
    }
  };

  return (
    <div className="space-y-6">
      <JsonInput value={jsonInput} onChange={handleInputChange} />
      <ValidationResult isValid={isValid} errorMessage={errorMessage} />
      {isValid && <FormattedJson json={formattedJson} />}
    </div>
  );
};

export default JsonValidator;