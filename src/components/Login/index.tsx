import * as React from 'react';

import './style.css';

export default class Login extends React.PureComponent<{}, {}> {
    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <div className="login_logo">
                            <img src="../loginLogo.png" />
                        </div>
                        <input type="text" id="input_id" placeholder="username" />
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                const input: HTMLElement | null = document.getElementById('input_id');

                                if(input && window.localStorage) {
                                    window.localStorage.setItem('user', input[`value`]);
                                    window.location.href = 'http://13.125.76.112';
                                }
                            }}
                        >
                            login

                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
