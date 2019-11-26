import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null://vista si conect esta vacio
                return  [
                    <li><Payments /></li>,
                <li><a href="/api/logout">Logout</a></li>
            ];
                break;
            case false://vista si conect es falso
                return <li><a href="/auth/google">Login with google</a></li>;
                break;
            default://vista si conect es verdadero
                return [
                    <li key="1"><Payments /></li>,
                <li key="2"><a href="/api/logout">Logout</a></li>
            ];
                break;
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.user ? '/surveys' : '/'}
                        className="left brand-logo">Emaly</Link>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header); //conecta el header con mapStateToProps{}