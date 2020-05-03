import React from 'react'
import './collection-preview.styles.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

export default function CollectionPreviewComponent({title,items}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item,index)=>index<4)
                .map(({id,...otherProps})=>(
                    <CollectionItem key={id} {...otherProps}/>
                    
                ))
                }
            </div>
        </div>
    )
}
