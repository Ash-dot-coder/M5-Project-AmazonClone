import React from 'react'
import './Products.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

const Products = () => {
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
            </div>
        </div>
    )
}

export default Products