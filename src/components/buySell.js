import React, {Component} from 'react'
import '../styles/style.scss';

class BuySell extends Component{
    
    constructor(props){
        super(props)
        this.state={
            sell:false
        }

    this.showSell = this.showSell.bind(this)
    }

    showSell(){
        this.setState({
            sell: !this.state.sell
        })
    }

    render(){
        return(
            <div className="buySell">
                <div className="tabs">
                    <div className={(this.state.sell)?'nactive':'active'}
                    onClick={this.showSell}>
                        Buy
                    </div>
                    <div className={(!this.state.sell)?'nactive':'active'}
                    onClick={this.showSell}
                    >
                        Sell
                    </div>
                </div>

                <div className="percentBtns">
                    <span>10%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>100%</span>
                </div>

                <div className="fields">
                    <div>
                        <span>Buy Amount (BTC)</span>
                        <div className="inputGroup">
                            <input type="text" />
                            <b className="label">BTC</b>
                        </div>
                    </div>

                    <div>
                        <span>Price Per (KRW)</span>
                        <div className="inputGroup">
                            <input type="number" />
                        </div>
                    </div>
                </div>

                <div className="fee">
                    <div className="fee-fields">
                        <span>Fee : </span>
                        <span>0 BTC</span>
                    </div>

                    <div className="fee-fields total">
                        <span>Order Total : </span>
                        <span>0 KRW</span>
                    </div>
                    <p>Min. Order Amuount: 1,000 KRW Fees - Maker : 0%, Taker : 0.015%</p>
                </div>

                <div className="actionBtns">
                    <button className="reset">
                        Reset
                    </button>
                    {
                        !this.state.sell &&
                    <button className="action">
                        Buy
                    </button>
                    }

                    {
                        this.state.sell &&
                        <button className="action">
                            Sell
                        </button>
                    }
                </div>
            </div>
        )
    }
}


export default BuySell