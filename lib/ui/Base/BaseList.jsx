import React, {Component} from 'react';
import StormTable from './../lib/StormTable.jsx';
import {createQueryContainer} from 'meteor/cultofcoders:grapher-react';
import {CircularProgress, Card} from 'material-ui';

const List = ({loading, data, error}) => {
    if (loading) {
        return <div>Loading</div>
    }

    if (error) {
        return <div>Error : {error.reason}</div>
    }

    return (
        <StormTable data={data} />
    )
};

export default class BaseListWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.config = {}
    }

    componentDidMount() {
        this._init();

    }
    _init () {
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
    getQuery() {
        return this.query;
    }

    render() {
        if (this.state.loading) {
            return (
                <CircularProgress/>
            )
        }

        return (
            <div className="app-page">
                <h3 className="page-title">{this.config.title}</h3>
                <div className="filtered-list">
                    <div className="filter-wrapper">

                    </div>
                    <div className="storm-list-wrapper">
                        <Card>
                            {React.createElement(this.Container)}
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}