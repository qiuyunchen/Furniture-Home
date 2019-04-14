import React from 'react';
import './addproduct.css';


export default class AddProduct extends React.Component {
    state = {
        name: '',
        price: '',
        desc: '',
        category: '',
        images: [],
        error: '',
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value}, ()=>{
            console.log(this.state)
        });
    }

    handleAddProduct = e => {
        e.preventDefault();
        const {name, price, desc, category, images} = this.state;
        if (!name || !price || !desc || !category || images.length === 0 || category === 'Product Category'){
            this.setState({error: 'Please fill out all information to add product to store.'})
        } else {
            // post product info to backend database
            this.setState({error: ''})
        }
    }

    handleImageUpload = e =>{
        console.log(e.target.files)
    }

    /////////////////////
    // handleFileInput = async (e) => {
    //     const firstFile = e.target.files[0];
    
    //     const root = firebase.storage().ref()
    //     const newImage = root.child(firstFile.name);
    
    //     // newImage.put(firstFile)
    //     //   .then((snapshot) => {
    //     //     return snapshot.ref.getDownloadURL()
    //     //   })
    //     //   .then((url) => {
    //     //     console.log(url)
    //     //     this.saveImage(url);
    //     //   })
    
    //     try {
    //       const snapshot = await newImage.put(firstFile);
    //       const url = await snapshot.ref.getDownloadURL();
    //       this.saveImage(url);
    //     }
    //     catch(err) {
    //       console.log(err);
    //     }
        
    //   }

    render (){
        const {name, price, desc, category, error} = this.state;
        const displayError = error ? <div className='alert alert-danger full-width space' role='alert'>{error}</div>  : '';

        return <form className='add-prod-form'>  
            {displayError}            
            <input type='text' className='full-width space' onChange={this.handleChange} name='name' placeHolder='Product Name' value={name}></input>
            <input type='text' className='full-width space' onChange={this.handleChange} name='desc' placeHolder='Product Description' value={desc}></input>
            <label className='space'>
                $ <input type='text' onChange={this.handleChange} name='price' placeHolder='Price' value={price}></input>
            </label>
            <select className='space' onChange={this.handleChange} name='category' value={category}>
                <option>Product Category</option>
                <option>Bathroom</option>
                <option>Bedroom</option>
                <option>Kitchen & Dining Room</option>
                <option>Living Area</option>
                <option>Other Misc</option>
            </select>

            <div className='upload-prod-img-box'>
                <label className='upload-prod-img-text' onClick={this.handleImageUpload}>
                    ⬆️ Upload product images here ⬆️
                    <input type='file'></input>
                </label>
            </div>

            <div></div>
            <button type='submit' className='add-new-prod-btn'
                onClick={this.handleAddProduct}>
                Add product to store
            </button>
            <div></div>
        </form>
    }
}