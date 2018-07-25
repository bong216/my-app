import * as React from 'react';

interface Props {
    pk: number;
    title: string;
    content: string;
    right: string;
    onclick: Function;
}

export default class Timeline extends React.PureComponent<Props, object> {

    render() {
        const right: string = `timeline-content ${this.props.right}`;
        return (
            <div className="timeline-item">
                <div className="timeline-icon" />
                <div className={right}>
                    <h2 className="timeline_header">{this.props.title}</h2>
                        <p className="timeline_content">
                            {this.props.content}
                        </p>
                    <a
                        href="/"
                        className="btn"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.onclick(this.props.pk);
                            const modal: HTMLElement | null = document.getElementById('modal');

                            if (modal) {
                                modal.style.display = 'block';
                            }
                        }}
                    >
                        button
                    </a>
                </div>
            </div>
        );
    }
}
