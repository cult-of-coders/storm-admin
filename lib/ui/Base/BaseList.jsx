import React, {Component} from 'react';
import StormList from './../lib/StormList.jsx';
import {createQueryContainer} from 'meteor/cultofcoders:grapher-react';
import {CircularProgress, Card} from 'material-ui';

const List = ({loading, data, error}) => {
    if (loading) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>Error : {error.reason}</div>;
    }

    return (
        <StormList data={data} />
    );
};

export default class BaseListWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.config = {};
    }

    componentDidMount() {
        this._init();
    }
    getQuery() {
        return this.query;
    }
    _init() {
        if (this.props) {
            this.query = this.props.query;
        }
        if (this.props.config) {
            if (this.props.config.title) {
                _.extend(this.config, {
                    title: this.props.config.title
                });
            }
        }
        this.Container = createQueryContainer(this.getQuery(), List, {
            reactive: false
        });
        this.setState({
            loading: false
        });
    }
    render() {
        if (this.state.loading) {
            return (
                <div>Loading</div>
            );
        }

        return (
            <div className="storm-list-wrapper-outer">
                <h3 className="storm-list-title">{this.config.title}</h3>
                <div className="filtered-list">
                    <div className="storm-list-wrapper-inner">
                        {React.createElement(this.Container)}
                    </div>
                </div>
            </div>
        );
    }
}
