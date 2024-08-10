import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const FormattedJson = ({ json }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Formatted JSON</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{json}</code>
        </pre>
      </CardContent>
    </Card>
  );
};

export default FormattedJson;