import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const JsonInput = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="json-input">Enter JSON:</Label>
      <Textarea
        id="json-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your JSON here..."
        className="h-64"
      />
    </div>
  );
};

export default JsonInput;