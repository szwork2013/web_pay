/**
 * Created by cuitao-pc on 16/5/19.
 */
import React from 'react'
import s from './AcqOrder.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {InputGroup, Glyphicon, Button, FormGroup, FormControl, Form, ControlLabel} from 'react-bootstrap';

var OrderItem = React.createClass({
	getValidationName: function () {
		let length = this.props.name.length;
		if (length) return 'success';
		else if (length == 0) return 'warning';
		else return 'error';
	},
	getValidationPrice: function () {
		let length = this.props.price;
		if (length) return 'success';
		else if (length == 0) return 'warning';
		else return 'error';
	},
	render: function () {
		return (
			<Form inline className={s.mgt}>
				<FormGroup>
					<FormGroup controlId="productName"
										 validationState={this.getValidationName()}
					>
						<InputGroup>
							<InputGroup.Addon className={s.noBLR}>
								<Glyphicon glyph="shopping-cart"/>
							</InputGroup.Addon>
							<ControlLabel className="sr-only ">productName</ControlLabel>
							<FormControl className={s.inputRadius} name="items.name"
													 value={this.props.name}
													 onChange={this.props.nameChange}
													 placeholder="商品名称"/>
							<FormControl.Feedback/>
						</InputGroup>
					</FormGroup>
					<FormGroup controlId="productPrice"
										 validationState={this.getValidationPrice()}>
						<InputGroup className={s.top1}>
							<InputGroup.Addon className={s.noALR + " " + s.inputRadius}>
								<Glyphicon glyph="yen"/>
							</InputGroup.Addon>
							<ControlLabel className="sr-only ">productPrice</ControlLabel>
							<FormControl className={s.inputRadius} name="items.price"
													 value={this.props.price}
													 onChange={this.props.priceChange}
													 placeholder="单价"/>
							<FormControl.Feedback/>
						</InputGroup>
					</FormGroup>
					<FormGroup controlId="productCounts"
										 validationState={this.getValidationPrice()}>
						<InputGroup className={s.top2}>
							<InputGroup.Addon className={s.noALR + " " + s.inputRadius}>
								<Glyphicon glyph="tags"/>
							</InputGroup.Addon>
							<ControlLabel className="sr-only ">productCounts</ControlLabel>
							<FormControl className={s.noRightBorderR} name="items.quantity"
													 value={this.props.quantity}
													 onChange={this.props.quantityChange}
													 placeholder="数量"/>
							<FormControl.Feedback/>
						</InputGroup>
					</FormGroup>
					<InputGroup className={s.divRemove}>
						<Button className={s.btnRemove}
										onClick={this.props.deleteItem}>删除</Button>
					</InputGroup>
				</FormGroup>
			</Form>
		)
	}
});

export default withStyles(s)(OrderItem);