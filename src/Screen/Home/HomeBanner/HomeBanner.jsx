import React from 'react'
import './HomeBanner.css'
import homeBannerItemProduct from '../../../HomeProduct.json';

const HomeBanner = () => {
  return (
    <div className='homeBanner'>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg" alt="hero-img" className="homeBannerImg" />
      <div className="grayBGHomeBanner"></div>

      <div className="homeBannerItemDiv">

        {
          homeBannerItemProduct.product.map((item, idx) => {
            return (
              <div className="homeBannerItemDivCard">
                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                <div className="imgHomeBannerItemDivCard">

                  {
                    item.imgs.map((it, idx) => {
                      return (
                        <div className="imgBannerHomeDiv">
                          <img className="imgBannerHomeDivImg" src={it} />
                          <div className="imgBannerImgName">Cushion covers, bedsheets & more</div>
                        </div>
                      );
                    })
                  }

                </div>

                <div className="seeMoreHomebanner">See More</div>
              </div>

            );
          })
        }



      </div>

    </div>
  )
}

export default HomeBanner