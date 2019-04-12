import React from 'react';
import AddProduct from '../../components/store/addproduct';
import './store.css';

export default class Store extends React.Component {
    state = {
        shopName: '',
        shopSummary: '',
        shopLogo: '',
        store: false,
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
                store: false,
            });
        } else if (!shopSummary){
            this.setState({
                errorMsg: 'Please enter a brief summary for the shop.',
                store: false,
            });
        } else {
            this.setState({ errorMsg: '', store: true });
        }
    }
    handleAddProduct = e =>{
        const {addProd} = this.state;
        this.setState({addProd: !addProd});
    }

    render (){
        const {shopName, shopSummary, errorMsg, store, addProd} = this.state;
        const displayError = errorMsg ? <div className='alert alert-danger' role='alert'>{errorMsg}</div> : '';
        const addProductBtn = store ? <button onClick={this.handleAddProduct}>Add Product</button> : '';
        const addProductForm = addProd ? 
            <form className='add-prod-form'>
                <AddProduct />
            </form> 
            : '';

        return <div className='store-box'>
            <h1 className='text-center'>Welcome!</h1>
            <h4 className='text-center'>This is where you will set up your store.</h4>
            {displayError}
            <form className='store-form'>
                <input type='text' className='input row' onChange={this.handleChange} name='shopName' value={shopName} placeHolder='Shop Name'></input>
                <input type='text' className='input row' onChange={this.handleChange} name='shopSummary' value={shopSummary} placeHolder='An About Shop Summary'></input>

                <div className='upload-store-logo-box'>
                    <label className='upload-store-logo-text'>
                        <input type='file' />
                        👉🏻 Upload shop logo here
                    </label>
                </div>

                <button className='save-store-btn' type='submit' onClick={this.handleSubmit}>Add Store</button>
                {addProductBtn}
                {addProductForm}
            </form>
        </div>
    }
}