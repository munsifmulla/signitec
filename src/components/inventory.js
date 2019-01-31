import React, {Component} from 'react'
import '../styles/style.scss';

class Inventory extends Component{

    render(){
        return(
            <div className="inventory">
                <ul>
                    <li>Product</li>
                    <li>Available balance</li>
                    <li>Total balance</li>
                </ul>

                <div>
                    <ol>
                        <li>KRW</li>
                        <li>35000</li>
                        <li>45000</li>
                    </ol>
                    <ol>
                        <li>KRW</li>
                        <li>35000</li>
                        <li>45000</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Inventory