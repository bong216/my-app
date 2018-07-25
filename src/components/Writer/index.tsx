import * as React from 'react';

import './style.css';

interface Props {
    onTitleHandling: Function;
    onContentHandling: Function;
    onSubmit: Function;
}

export default class Writer extends React.PureComponent<Props, object> {

    render() {
        return (
            <div id="writer" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="header-title">글쓰기</h3>
                        <div
                            className="close fa fa-close"
                            onClick={(event) => {
                                const writer: HTMLElement | null = document.getElementById('writer');

                                if (writer) {
                                    writer.style.display = 'none';
                                }
                            }}
                        />
                    </div>
                    <div className="modal-body">
                        <h3>글쓰기 창</h3>
                        <p className="name">
                            <input
                                type="text"
                                className="validate[required, custom[onlyLetter], length[0,100]] feedback-input"
                                placeholder="Title"
                                id="title"
                                onChange={(event) => {
                                    event.preventDefault();
                                    this.props.onTitleHandling(event.target.value);
                                }}
                            />
                        </p>
                        <p className="text">
                            <textarea
                                className="validate[required, length[6,300]] feedback-input"
                                id="comment"
                                placeholder="Comment"
                                onChange={(event) => {
                                    event.preventDefault();
                                    this.props.onContentHandling(event.target.value);
                                }}
                            />
                        </p>
                        <div className="submit">
                            <input
                                type="submit"
                                value="SEND"
                                id="button-blue"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.onSubmit();
                                }}
                            />
                            <div className="ease" />
                        </div>
                    </div>
                    <div className="modal-footer" />
                </div>
            </div>
        );
    }
}
