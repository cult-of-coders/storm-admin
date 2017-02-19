import React from 'react';
import RecursiveDisplay from './RecursiveDisplay.jsx';

export default function StormList({ data }) {
    return (
        <div>
            {
                _.map(data, dataRow => (
                    <RecursiveDisplay data={dataRow} key={dataRow._id} />
                ))
            }
            {
                data.length === 0
                ? <div>
                    <span colSpan="5">No items found.</span>
                </div>
                : null
            }
        </div>
    );
}
