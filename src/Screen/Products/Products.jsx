import React from 'react'
import './Products.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import productDetail from './Products.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/Actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const handleAddToCart = (item) => {
        toast.success("Added To Cart", {
            position: 'bottom-right'
        })
        
        dispatch(addToCart(item));
    }

    return (
        <div className='productPage'>
            <div className="productTopBanner">
                <div className="productTopBannerItems">
                    Electronics
                </div>
                <div className="producttopBannerItemsSubMenu">Mobiles & Accessories</div>
                <div className="producttopBannerItemsSubMenu">Laptops & Accessories</div>
                <div className="producttopBannerItemsSubMenu">TV & Home Entertainment</div>
                <div className="producttopBannerItemsSubMenu">Audio</div>
                <div className="producttopBannerItemsSubMenu">Cameras</div>
                <div className="producttopBannerItemsSubMenu">Computer Peripherals</div>
                <div className="producttopBannerItemsSubMenu">Smart Technology</div>
                <div className="producttopBannerItemsSubMenu">Musical Instruments</div>
                <div className="producttopBannerItemsSubMenu">Office & Stationary</div>
            </div>

            {/* Left */}
            <div className="productsPageMain">
                <div className="productsPageMainLeftCategory">
                    <div className="productsPageMainLeftCategoryTitle">Category</div>
                    <div className="productsPageMainLeftCategoryContent">
                        <div className="productsPageMainLeftCategoryTitleContent">Computers & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Macbooks</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="ratingLeftBox">
                            <StarOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlineOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <div className="andUp">& Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlineOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlineOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <div className="andUp">& Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlineOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlineOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlineOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <div className="andUp">& Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlineOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlineOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlineOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <StarOutlineOutlinedIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                            <div className="andUp">& Up</div>
                        </div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                    </div>
                </div>

                {/* Right */}
                <div className="productsPageMainRight">
                    <div className="productsPageMainRightTopBanner">
                        1-5 of 5 results for <span className="productsPageMainRightTopBannerSpan">Macbooks</span>
                    </div>

                    <div className="itemsImageProductPage">

                        {
                            productDetail.product.map((item, index) => {
                                return (
                                    <div className="itemsImageProductPageOne" key={item.id}>
                                        <div className="imgBlockItemsImageProductPageOne">
                                            <img src={item.imageUrl} alt="productImage" className="productImageProduct" />
                                        </div>

                                        <div className="productNameProduct">
                                            <div>{item.name}</div>
                                            <div className="productNameProductRating">
                                                <StarOutlinedIcon sx={{ fontSize: '16px', color: "#febd69" }} />
                                                <StarOutlinedIcon sx={{ fontSize: '16px', color: "#febd69" }} />
                                                <StarOutlinedIcon sx={{ fontSize: '16px', color: "#febd69" }} />
                                                <StarOutlinedIcon sx={{ fontSize: '16px', color: "#febd69" }} />
                                                <StarOutlineOutlinedIcon sx={{ fontSize: '16px', color: "#febd69" }} />
                                            </div>
                                            <div className="priceProductDetailPage">
                                                <div className="currencyText">₹</div>
                                                <div className="rateHomeDetail">{item.price}</div>
                                                <div className="addToBasketBtn" onClick={() => { handleAddToCart(item) }}>Add To Cart</div>
                                            </div>
                                            <div className="offProductPage">Upto 10% off on select cards</div>
                                            <div className="freeDeliveryHomePage">Free Delivery By Amazon</div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default Products