import React from 'react';
import moment from 'moment';
import RecursiveItemElement from './FieldDisplays';

export default function RecursiveDisplay({data}) {
    return (
        <tr>
            {
                _.map(data, (value, label) => {
                    let id = _.uniqueId(label + '_');
                    return (
                        <RecursiveItemElement value={value} key={id}/>
                    )
                })
            }
        </tr>

    )
}