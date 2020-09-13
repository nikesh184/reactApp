import React from "react";
import ShopData from './shopData';
import CollectionPreview from '../../../component/menu-items/collectionpreview/collectionpreview';
class ShopPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            collections:ShopData

        };
    }
    render(){
        console.log(this.state)
       //const {collections}=this.state;
        return (
          <div className="shope">
              {
                this.state.collections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id}{...otherCollectionProps} />

                ))
              }
          </div>
        )
    }
}
export default ShopPage;