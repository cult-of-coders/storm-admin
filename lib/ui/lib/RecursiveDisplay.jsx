import React from 'react';
import RecursiveField from './FieldDisplays/RecursiveField.jsx';

export default function RecursiveDisplay({ data }) {
    return (
        <div>
            {
                _.map(data, (value, label) => {
                    const id = _.uniqueId(`${label}_`);
                    return (
                        <RecursiveField data={value} key={id} />
                    );
                })
            }
        </div>
    );
}
