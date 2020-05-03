import React, { Component } from 'react';
import  ShopData from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreviewComponent';

export default class extends Component {

    state={
        collections:ShopData
    }
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
               { collections.map(({id, ...otherProps})=>(
                    <CollectionPreview key={id} {...otherProps}/>
                ))}
            </div>
        )
    }
}
