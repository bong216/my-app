import * as React from 'react';

import './style.css';

export default class Message extends React.PureComponent<{}, {}> {

    render() {
        return (
            <div id="modal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="header-title">추출된 정보</h3>
                        <div
                            className="close fa fa-close"
                            onClick={(event) => {
                                const modal: HTMLElement | null = document.getElementById('modal');

                                if (modal) {
                                    modal.style.display = 'none';
                                }
                            }}
                        />
                    </div>
                    <div className="modal-body">
                        <h3>핵심 단어</h3>
                        <p  id="modal_content" />
                        <h3>추출된 단어</h3>
                        <p  id="modal_content_one" />
                    </div>
                    <div className="modal-footer" />
                </div>
            </div>
        );
    }
}
