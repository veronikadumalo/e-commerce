import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct,
        smallDetail: false,
        smallDetailProduct: detailProduct
    };
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct:product}
        })
        console.log( detailProduct, product);
    };
    addToCart = (id) => {
        console.log("add to cart");
    };
    sSize = (id) => {
        const product = this.getItem(id);
        product.selectedSize = "s";
        product.size = true;
        this.setState(() => {
            return { detailProduct: product }
        });
    }
    mSize = (id) => {
        const product = this.getItem(id);
        product.selectedSize = "m";
        product.size = true;
        this.setState(() => {
            return { detailProduct: product }
        });
    }
    lSize = (id) => {
        const product = this.getItem(id);
        product.selectedSize = "l";
        product.size = true;
        this.setState(() => {
            return { detailProduct: product }
        });
    }
    openSmallDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { smallDetailProduct: product, smallDetail: true }
        });
    };
    closeSmallDetail = () => {
        this.setState(() => {
            return { smallDetail: false }
        });
    }

    
    
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                sSize: this.sSize,
                mSize: this.mSize,
                lSize: this.lSize,
                openSmallDetail: this.openSmallDetail,
                closeSmallDetail: this.closeSmallDetail
            }}>
                {this.props.children}
            </ProductContext.Provider>

            );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};