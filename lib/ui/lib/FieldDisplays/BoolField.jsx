import React from 'react';

export default function BoolField({ value }) {
    return (
        <td>
            {value
                ? 'Yes'
                : 'No'
            }
        </td>
    );
}
