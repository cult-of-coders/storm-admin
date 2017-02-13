    import React, {Component} from 'react';
    import RecursiveDisplay from './RecursiveDisplay';

    export default class StormTable extends Component {

        render () {
            return (
                <table>
                    <tbody>
                    {
                        _.map(this.props.data, dataRow => {
                            return (
                                <RecursiveDisplay data={dataRow} key={dataRow._id}/>
                            )
                        })
                    }
                    {this.props.data.length === 0
                        ?
                        <tr>
                            <td colSpan="5">No items found.</td>
                        </tr>
                        : null
                    }
                    </tbody>
                </table>

            )
        }

    }