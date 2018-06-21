import React, { Component } from 'react';
import StackGrid from "react-stack-grid";

import * as quoteService from '../service/request';

import Quote from './quote';
import Spinner from './commons/spinner';

class QuoteList extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            quotes: []
        }
    }
    componentWillMount() {
        this.setState({
            isLoading: true
        })
        quoteService.fetchQuotes().then(response => {
            this.setState({
                quotes: response,
                isLoading: false
            });
        }).catch(er => {
            this.setState({
                isLoading: false
            })
        })
    }
    render() {
        if (this.state.isLoading) {
            return <Spinner />
        }
        return (
            <StackGrid>
                {
                    this.state.quotes.length == 0 ? <h1>No Quotes</h1>
                        :
                        this.state.quotes.map(quote => {
                            return <Quote message={quote.quote} />
                        })
                }
            </StackGrid>
        );
    }
}

export default QuoteList;