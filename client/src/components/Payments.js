import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions'

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="Emaly"
                description="dame 5 dolarillos y te doy 5 vergazos xdxd"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Añadir vergazos!
                </button>
            </StripeCheckout>
        )
    };
}

export default connect(null, actions)(Payments);