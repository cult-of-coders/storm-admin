import React from 'react';
import BoolField from './BoolField.jsx';
import NumberField from './NumberField.jsx';
import ArrayField from './ArrayField.jsx';
import DateField from './DateField.jsx';
import ObjectField from './ObjectField.jsx';
import TextField from './TextField.jsx';

export default function RecursiveField({ data }) {
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
