import React from 'react';

export default function ArrayField({ value }) {
    return (
        <div>
            {
                _.map(value, (element) => {
                    const id = _.uniqueId();
                    if (_.last(value, element)) {
                        return (
                            <span key={id}>{element}</span>
                        );
                    }
                    return (
                        <span key={id}>{element}, </span>
                    );
                })
            }
        </div>
    );
}
