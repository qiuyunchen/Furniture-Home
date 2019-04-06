import React from 'react';

export default (props) =>{
    return <>
        <div className='prod-results'>
            pic, vendor, item name, price
        </div>

        <div className='sort-box'>
            <h6>Sort By</h6>
            <ul>
                {
                    ['Relevance','Ratings','Price (low to high)','Price (high to low','Product Name','Vendor Name']
                    .map( (e,i) => <li key={i}>{e}</li> )
                }
            </ul>
        </div>

        <div className='shop-results'>
            shop logo, shop name, hover-over-desc
        </div>
    </>
}