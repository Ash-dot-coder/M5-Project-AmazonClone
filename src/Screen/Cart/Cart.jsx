import React from 'react'
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>

            {/* Left-Side */}
            <div className="topLeftCart">
                <div className="topLeftCartTitle">Shoping Cart</div>
                <div className="deSelectAllCart">Deselect all items</div>
                <div className="cartPriceTextDivider">Price</div>

                <div className="cartItemsDiv">
                    <div className="cartItemBlock">
                        <div className="cartItemLeftBlock">
                            <div className="cardItemLeftBlockImage">
                                <img src="https://m.media-amazon.com/images/I/61eYUYAexeL._SX679_.jpg" alt="Item" className="cartItemLeftBlockImg" />
                            </div>
                            <div className="cartItemLeftBlockDetails">
                                <div className="cartItemProductName">ZEBRONICS Companion 301 2.4GHz Wireless Keyboard & Mouse Combo with UV Printed, Retro Style Keys, 104 + 12 Integrated Multimedia Keys, 1600 DPI, High Prec...</div>
                                <div className="inStockCart">In Stock</div>
                                <div className="elgFreeShip">Eligible for Free Shipping</div>
                                <div className="amazonFullFilledImage"><img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="fullfilledImage" className="fullFillImg" /></div>
                                <div className="removeFromCart">Remove From Basket</div>
                            </div>
                        </div>

                        <div className="cartItemRightBlock">Rs {15989}</div>
                    </div>

                    <div className="cartItemBlock">
                        <div className="cartItemLeftBlock">
                            <div className="cardItemLeftBlockImage">
                                <img src="https://m.media-amazon.com/images/I/61eYUYAexeL._SX679_.jpg" alt="Item" className="cartItemLeftBlockImg" />
                            </div>
                            <div className="cartItemLeftBlockDetails">
                                <div className="cartItemProductName">ZEBRONICS Companion 301 2.4GHz Wireless Keyboard & Mouse Combo with UV Printed, Retro Style Keys, 104 + 12 Integrated Multimedia Keys, 1600 DPI, High Prec...</div>
                                <div className="inStockCart">In Stock</div>
                                <div className="elgFreeShip">Eligible for Free Shipping</div>
                                <div className="amazonFullFilledImage"><img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="fullfilledImage" className="fullFillImg" /></div>
                                <div className="removeFromCart">Remove From Basket</div>
                            </div>
                        </div>

                        <div className="cartItemRightBlock">Rs {15989}</div>
                    </div>

                    <div className="cartItemBlock">
                        <div className="cartItemLeftBlock">
                            <div className="cardItemLeftBlockImage">
                                <img src="https://m.media-amazon.com/images/I/61eYUYAexeL._SX679_.jpg" alt="Item" className="cartItemLeftBlockImg" />
                            </div>
                            <div className="cartItemLeftBlockDetails">
                                <div className="cartItemProductName">ZEBRONICS Companion 301 2.4GHz Wireless Keyboard & Mouse Combo with UV Printed, Retro Style Keys, 104 + 12 Integrated Multimedia Keys, 1600 DPI, High Prec...</div>
                                <div className="inStockCart">In Stock</div>
                                <div className="elgFreeShip">Eligible for Free Shipping</div>
                                <div className="amazonFullFilledImage"><img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="fullfilledImage" className="fullFillImg" /></div>
                                <div className="removeFromCart">Remove From Basket</div>
                            </div>
                        </div>

                        <div className="cartItemRightBlock">Rs {15989}</div>
                    </div>
                </div>

            </div>


            {/* Right-Side */}
            <div className="topRightCart">
                <div className="subTotalTitle">Subtotal ({2} items) : <span className="subTotalTitleSpan">Rs {64199}</span></div>
                <div className="giftAddTo">
                    <input type="checkbox" />
                    <div>This Order Contains a gift</div>
                </div>
                <div className="proceedToBuy">Proceed To Buy</div>
            </div>
        </div>
    )
}

export default Cart