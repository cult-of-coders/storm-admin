import React from 'react';

export default function BoolField({ value }) {
    return (
        <div>
            {value
                ? 'Yes'
                : 'No'
            }
        </div>
    );
}
