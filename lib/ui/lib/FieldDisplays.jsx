import React from 'react';
import moment from 'moment';

export default function RecursiveItemElement({ data }) {
    if (_.isBoolean(data)) {
        return (
            <BoolField value={data} />
        );
    }
    if (_.isNumber(data)) {
        return (
            <NumberField value={data} />
        );
    }
    if (_.isArray(data)) {
        return (
            <ArrayField value={data} />
        );
    }
    if (_.isDate(data)) {
        return (
            <DateField value={data} />
        );
    }
    if (_.isObject(data)) {
        return (
            <ObjectField value={data} />
        );
    }
    return (
        <TextField value={data} />
    );
}

export function TextField({ value }) {
    return (
        <td>
            {value}
        </td>
    );
}

export function BoolField({ value }) {
    return (
        <td>
            {value
                ? 'Yes'
                : 'No'
            }
        </td>
    );
}

export function NumberField({ value }) {
    return (
        <td>
            {value}
        </td>
    );
}

export function DateField({ value }) {
    return (
        <td>
            {value
                ? moment(value).format('DD-MM-YYYY')
                : null
            }
        </td>
    );
}

export function ArrayField({ value }) {
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


export function ObjectField({ value }) {
    return (
        <td>
            {
                _.map(value, (element, label) => {
                    const id = _.uniqueId();
                    return (
                        <span key={id}> {label}: <RecursiveItemElement value={element} /> </span>
                    );
                })
            }
        </td>
    );
}
