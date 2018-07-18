import React, { Component } from 'react';
import FetchSpeakerRequests from '../actions/FetchSpeakerRequests';
import IndividualSpeakerRequest from './individualspeakerrequest.component';

export default class SpeakerIssue extends Component {
    constructor() {
        super();
        this.state = {
            SpeakerRequests: []
        };
    }

    componentDidMount() {
        FetchSpeakerRequests().then((response) => {
            this.setState({
                SpeakerRequests: response
            });
        })
    }

    render() {
        return (
            <div>
                { this.state.SpeakerRequests.map((request, i) => <IndividualSpeakerRequest key={ i } />) }
            </div>
        )
    }
}