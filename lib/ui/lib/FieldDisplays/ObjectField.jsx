import React from 'react';
import RecursiveField from './RecursiveField.jsx';

export default function ObjectField({ value }) {
    return (
        <div>
            {
                _.map(value, (element, label) => {
                    const id = _.uniqueId();
                    return (
                        <div key={id}> {label}: <RecursiveField value={element} /> </div>
                    );
                })
            }
        </div>
    );
}
