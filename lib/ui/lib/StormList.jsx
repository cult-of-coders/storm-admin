import React from 'react';
import RecursiveDisplay from './RecursiveDisplay.jsx';

export default function StormList({ data }) {
    return (
        <table>
            <tbody>
                {
                    _.map(data, dataRow => (
                        <RecursiveDisplay data={dataRow} key={dataRow._id} />
                    ))
                }
                {
                    data.length === 0
                    ? <tr>
                        <td colSpan="5">No items found.</td>
                    </tr>
                    : null
                }
            </tbody>
        </table>
    );
}
