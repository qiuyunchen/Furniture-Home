import React from 'react';
import './dropdown1.css';

export default (props) =>{
    return <>
   <div className='dropdown-categ'>

            <div className='list-group'>
            <h5 className='rm'>Bathroom</h5>
            <ul className='categ-list'>
                {
                ['Sink', 'Storage', 'Toilet']
                    .map((e, i) => <li className='list-item' key={i}>{e}</li>)
                }
            </ul>
            </div>


            <div className='list-group'>
            <h5 className='rm'>Bedroom</h5>
            <ul className='categ-list'>
                {
                ['Beds', 'Bench', 'Dressers', 'Nightstands', 'Storage']
                    .map((e, i) => <li className='list-item' key={i}>{e}</li>)
                }
            </ul>
            </div>

            <div className='list-group'>
            <h5 className='rm'>Kitchen & Dining Room</h5>
            <ul className='categ-list'>
                {
                ['China Cabinets', 'Dining Chairs', 'Dining Sets', 'Dining Tables', 'Kitchen Islands']
                    .map((e, i) => <li className='list-item' key={i}>{e}</li>)
                }
            </ul>
            </div>
            
            <div className='list-group'>
            <h5 className='rm'>Living Area</h5>
            <ul className='categ-list'>
                {
                ['Bookshelves', 'File Cabinets', 'Sofas & Chairs', 'Tables & Desks', 'TV Stands']
                    .map((e, i) => <li className='list-item' key={i}>{e}</li>)
                }
            </ul>
            </div>

            <div className='list-group'>
            <h5 className='list-item'>Other Misc</h5>
            </div>
        </div>
    </>
}
