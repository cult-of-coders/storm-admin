import React from 'react';
import moment from 'moment';

export default function DateField({ value }) {
    return (
        <div>
            {value
                ? moment(value).format('DD-MM-YYYY')
                : null
            }
        </div>
    );
}
