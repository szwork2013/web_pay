/**
 * Created by cuitao-pc on 16/5/24.
 */
import React, {PropTypes} from 'react';
import OrderSelector from '../../components/OrderSelector/OrderSelector';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import MarketingInfo from '../../components/MarketingInfo/MarketingInfo';
import Billing from '../../components/Billing/Billing';
import PayButton from '../../components/PayButton/PayButton';
import Payment from '../../Payment';
import history from '../../core/history';

function Order(props, context) {
  context.setTitle("订单");

  return (
    <div>
      <OrderSelector onEmptyOrder={ () => history.push("/acqOrder")} />
      <OrderInfo />
      <MarketingInfo />
      <Billing />
      <PayButton canCancel={props.terminalType == "MERCHANT"} onReqPay={orderId => {
        Payment.reqPayAuth(orderId);
      }} onPay={orderId => {
        history.push({
          pathname: '/payment',
          query: {orderId: orderId}
        });
      }} onCancel={orderId => {
        Payment.cancelOrder(orderId);
      }}/>
    </div>
  )
}
Order.propTypes = {isMerchant: PropTypes.bool.isRequired};
Order.contextTypes = {setTitle: PropTypes.func.isRequired};
export default Order;