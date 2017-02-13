import React, {Component} from 'react';
import moment from 'moment';

export default class RecursiveItemElement extends Component {
    render () {
        if (_.isBoolean(this.props.value)) {
            return (
                <BoolField value={this.props.value}/>
            )
        }
        if (_.isNumber(this.props.value)) {
            return (
                <NumberField value={this.props.value}/>
            )
        }
        if (_.isArray(this.props.value)) {
            return (
                <ArrayField value={this.props.value}/>
            )
        }
        if (_.isDate(this.props.value)) {
            return (
                <DateField value={this.props.value}/>
            )
        }
        if (_.isObject(this.props.value)) {
            return (
                <ObjectField value={this.props.value}/>
            )
        }
        return (
            <TextField value={this.props.value}/>
        )
    }
};

export class TextField extends Component {

    render () {
        return (
            <td>
                {this.props.value}
            </td>
        )
    }
}

export class BoolField extends Component {

    render () {
        return (
            <td>
                {this.props.value
                    ? 'Yes'
                    : 'No'
                }
            </td>
        )
    }
}

export class NumberField extends Component {

    render () {
        return (
            <td>
                {this.props.value}
            </td>
        )
    }
}

export class DateField extends Component {

    render () {
        return (
            <td>
                {this.props.value
                    ? moment(this.props.value).format('DD-MM-YYYY')
                    : null
                }
            </td>
        )
    }
}

export class ArrayField extends Component {

    render () {
        return (
            <td>
                {
                    _.map(this.props.value, (element)=> {
                        let id = _.uniqueId();
                        return (
                            <span key={id}>{element}, </span>
                        )
                    })
                }
            </td>
        )
    }
}


export class ObjectField extends Component {

    render () {
        return (
            <td>
                {
                    _.map(this.props.value, (element, label)=> {
                        let id = _.uniqueId();
                        return (
                            <span key={id}> {label}: <RecursiveItemElement value={element} /> </span>
                        )
                    })
                }
            </td>
        )
    }
}