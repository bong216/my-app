import *as React from 'react';

import { Header, Timeline, TimelineHeader, Message, Writer,  } from '../components';
import {
    getBoardListByUser,
    getBoardContentAnalyzePretty,
    getBoardContentCollocationPretty,
    createBoard,
}  from '../lib/toServer';

interface BoardType {
    pk: number;
    user: string;
    title: string;
    content: string;
    background_color: string;
    color: string;
    created: string;
    updated: string;
}

interface MainState {

    boardList: BoardType[];
    newTitle: string;
    newContent: string;
}

export default class IndexContainer extends React.Component <{}, MainState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            boardList : [],
            newTitle: '',
            newContent: '',
        };
        this.onClickToGetKeywordAnalys = this.onClickToGetKeywordAnalys.bind(this);
        this.onTitleHandling = this.onTitleHandling.bind(this);
        this.onContentHandling = this.onContentHandling.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        if (window.localStorage) {
            if (!window.localStorage.getItem('user')) {
                window.location.href = window.location.href + 'login';
            }
        }
    }

    componentDidMount() {

        if (window.localStorage.getItem('user')) {

            getBoardListByUser(window.localStorage.getItem('user'))
            .then(response => {
                this.setState({
                    boardList : response.data,
                });
            })
            .catch(error => window.console.log(error));
        }
    }

    onClickToGetKeywordAnalys(id: number) {
        getBoardContentAnalyzePretty(id)
        .then((response) => {
            const modal: HTMLElement | null = document.getElementById('modal_content_one');
            if (modal) {
                modal.textContent = response.data.result;
            }
        })
        .catch((error) => window.console.log(error));
        getBoardContentCollocationPretty(id)
        .then((response) => {
            const modal: HTMLElement | null = document.getElementById('modal_content');
            if (modal) {
                modal.textContent = response.data.result.slice(0, response.data.result.length - 1);
            }
        })
        .catch((error) => window.console.log(error));
    }

    onTitleHandling(value: string) {
        this.setState({
            newTitle: value,
        });
    }

    onContentHandling(value: string) {
        this.setState({
            newContent: value,
        });
    }

    onSubmit() {
        if (window.localStorage.getItem('user')) {
            createBoard(
                this.state.newTitle,
                this.state.newContent,
                window.localStorage.getItem('user'),
            )
            .then((response) => window.location.href = 'http://13.125.76.112')
            .catch((error) => window.console.log(error));
        }

    }

    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <TimelineHeader />
                    <Writer
                        onContentHandling={this.onContentHandling}
                        onTitleHandling={this.onTitleHandling}
                        onSubmit={this.onSubmit}
                    />
                    <Message />
                    <div id="timeline">
                        {
                            this.state.boardList.map((item, index) => {
                                if (index % 2 === 0) {
                                    return (
                                        <Timeline
                                            key={index}
                                            pk={item.pk}
                                            title={item.title}
                                            content={item.content}
                                            right={''}
                                            onclick={this.onClickToGetKeywordAnalys}
                                        />
                                    );
                                } else {
                                    return (
                                        <Timeline
                                            key={index}
                                            pk={item.pk}
                                            title={item.title}
                                            content={item.content}
                                            right={'right'}
                                            onclick={this.onClickToGetKeywordAnalys}
                                        />
                                    );
                                }}
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}
