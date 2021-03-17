import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        smallDetail: false,
        smallDetailProduct: detailProduct,
        cartSubtotal: 0,
        cartTax : 50,
        cartTotal: 0,
       
    };
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts }
        });
    };
    componentDidMount() {
        this.setProducts();
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        });
    };
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        }, () => {
            this.calculationTotal();
        })
        
    };
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
    getCartProduct = (id) => {
        const cartProduct = this.state.cart.find(item => item.id === id);
        return cartProduct;
    }
    incrementCount = (id) => {
        let tempCart = [...this.state.cart];
        const index = tempCart.indexOf(this.getCartProduct(id));
        const selectedCartProduct = tempCart[index];
        selectedCartProduct.count = selectedCartProduct.count + 1;
        selectedCartProduct.total = selectedCartProduct.count * selectedCartProduct.price;
        this.setState(() => {
            return { cart: [...tempCart] }
        }, () => {
            this.calculationTotal();
        });
        
    }
    decrementCount = (id) => {
        let tempCart = [...this.state.cart];
        const index = tempCart.indexOf(this.getCartProduct(id));
        const selectedCartProduct = tempCart[index];
        if (selectedCartProduct.count > 1 ) {
            selectedCartProduct.count = selectedCartProduct.count - 1;
            selectedCartProduct.total = selectedCartProduct.count * selectedCartProduct.price;
        }
        this.setState(() => {
                return { cart: [...tempCart] }
        }, () => {
            this.calculationTotal();
        });
    }
    removeCartProduct = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedCartProduct = tempProducts[index];
        removedCartProduct.inCart = false;
        removedCartProduct.count = 0;
        removedCartProduct.total = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => {
                this.calculationTotal();
        });
    }
    calculationTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item =>(subTotal += item.total));
        const total = subTotal + this.state.cartTax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTotal: total
            }
        });
    }
    clearCart = (id) => {
        this.setState(() => {
            return {cart:[]}
        }, () => {
                this.calculationTotal();
                this.setProducts();
                
        });
    }
    
    
    
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openSmallDetail: this.openSmallDetail,
                closeSmallDetail: this.closeSmallDetail,
                incrementCount: this.incrementCount,
                decrementCount: this.decrementCount,
                removeCartProduct: this.removeCartProduct,
                calculationTotal: this.calculationTotal,
                clearCart: this.clearCart,
                getCartProduct: this.getCartProduct,
                setProducts: this.setProducts


            }}>
                {this.props.children}
            </ProductContext.Provider>

            );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};