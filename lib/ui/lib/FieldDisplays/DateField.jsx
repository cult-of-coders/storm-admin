import React from 'react';
import moment from 'moment';

export default function DateField({ value }) {
    return (
        <td>
            {value
                ? moment(value).format('DD-MM-YYYY')
                : null
            }
        </td>
    );
}
