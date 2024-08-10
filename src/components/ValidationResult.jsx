import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle } from 'lucide-react';

const ValidationResult = ({ isValid, errorMessage }) => {
  if (isValid === null) return null;

  return (
    <Alert variant={isValid ? 'default' : 'destructive'}>
      <AlertTitle className="flex items-center">
        {isValid ? (
          <CheckCircle className="h-4 w-4 mr-2" />
        ) : (
          <XCircle className="h-4 w-4 mr-2" />
        )}
        {isValid ? 'Valid JSON' : 'Invalid JSON'}
      </AlertTitle>
      {!isValid && <AlertDescription>{errorMessage}</AlertDescription>}
    </Alert>
  );
};

export default ValidationResult;