/**
 * Created by cuitao-pc on 16/5/25.
 */

import React, {PropTypes} from 'react';
import OrderCreateFrom from '../../components/OrderCreateFrom/OrderCreateFrom';
import Payment from '../../Payment/Payment';
import history from '../../core/history';

function AcqOrder(props, context) {
  context.setTitle("创建订单");
  var items = [
    {
      name: "袜子",
      price: 2900,
      quantity: 2
    },
    {
      name: "裤头",
      price: 3980,
      quantity: 1
    },
    {
      name: "卫生纸",
      price: 2690,
      quantity: 5
    }
  ]
  return (
    <div>
      <OrderCreateFrom items={items} createOrder={items => {
      Payment.createOrder({products: items});

      history.push("/mer");
      }} onEntryOrder={() => history.push("/mer") } />
    </div>
  );
}

AcqOrder.contextTypes = { setTitle: PropTypes.func.isRequired };
export default AcqOrder;