import React from 'react';
import RecursiveField from './RecursiveField.jsx';

export default function ObjectField({ value }) {
    return (
        <td>
            {
                _.map(value, (element, label) => {
                    const id = _.uniqueId();
                    return (
                        <span key={id}> {label}: <RecursiveField value={element} /> </span>
                    );
                })
            }
        </td>
    );
}
