import React from 'react';

export default function ArrayField({ value }) {
    return (
        <td>
            {
                _.map(value, (element) => {
                    const id = _.uniqueId();
                    return (
                        <span key={id}>{element}, </span>
                    );
                })
            }
        </td>
    );
}
