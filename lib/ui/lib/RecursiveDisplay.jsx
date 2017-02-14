import React from 'react';
import _ from 'underscore';
import RecursiveItemElement from './FieldDisplays.jsx';

export default function RecursiveDisplay({ data }) {
    return (
        <tr>
            {
                _.map(data, (value, label) => {
                    const id = _.uniqueId(`${label}_`);
                    return (
                        <RecursiveItemElement data={value} key={id} />
                    );
                })
            }
        </tr>
    );
}
