import React from 'react';
import AddProduct from '../../components/store/addproduct';
import firebase from '../../firebase';
import './store.css';


export default class Store extends React.Component {
    state = {
        shopName: '',
        shopSummary: '',
        shopLogo: '',
        storeExists: false,
        errorMsg: '',
        addProd: false,
    }
    
    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = e =>{
        e.preventDefault();
        const {shopName, shopSummary, shopLogo} = this.state;
        if (!shopName){
            this.setState({
                errorMsg: 'Please enter a name for your shop.',
                storeExists: false,
            });
        } else if (!shopSummary){
            this.setState({
                errorMsg: 'Please enter a brief summary for the shop.',
                storeExists: false,
            });
        } else {
            this.setState({ errorMsg: '', storeExists: true });
        }
    }
    handleAddProduct = e =>{
        e.preventDefault();
        const {addProd} = this.state;
        this.setState({addProd: !addProd});
    }
    handleImageUpload = e =>{
        const {shopName} = this.state;
        if (!shopName) this.handleSubmit(e);
        const file1 = e.target.files[0];
        if (!file1) return;

        const root = firebase.storage().ref();
        const newImage = root.child(`${shopName}/logo/${file1.name}`);

        newImage.put(file1)
            .then(snapshot =>{
                return snapshot.ref.getDownloadURL();
            })
            .then(url =>{
                this.setState({shopLogo: url});
            })
            .catch(err =>{
                console.log('get firebase img url error! ', err);
            })
    }

    render (){
        const {shopName, shopSummary, errorMsg, shopLogo, storeExists, addProd} = this.state;
        const displayError = errorMsg ? <div className='alert alert-danger' role='alert'>{errorMsg}</div> : '';
        const addProductBtn = storeExists ? <button type='submit' onClick={this.handleAddProduct}>Add Products</button> : '';
        const addProductForm = addProd ? <AddProduct /> : '';

        return <div className='store-box'>
            <h1 className='text-center'>Welcome!</h1>
            <h4 className='text-center'>This is where you will set up your store.</h4>
            {displayError}
            <form className='store-form'>
                <input type='text' className='input row' onChange={this.handleChange} name='shopName' value={shopName} placeholder='Shop Name'></input>
                <input type='text' className='input row' onChange={this.handleChange} name='shopSummary' value={shopSummary} placeholder='An About Shop Summary'></input>

                {shopLogo? <img className='shop-logo-img' src={shopLogo} alt='logo'></img> : ''}
                <div className='upload-store-logo-box'>
                    <label className='upload-store-logo-text'>
                        <input type='file' onChange={this.handleImageUpload}/>
                        ⬆️ Upload shop logo here ⬆️
                    </label>
                </div>

                <button className='save-store-btn' type='submit' onClick={this.handleSubmit}>Add Store</button>
                {addProductBtn}
                {addProductForm}
            </form>
        </div>
    }
}