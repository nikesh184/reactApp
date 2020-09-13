import React, {Component} from 'react';
import './directory.style.scss';
import Menuitem from '../menu-item/menu-item.component'
class Directory extends Component{
    constructor(){
        super()
        this.state={
            section:[{
                title:'HATE',
                id:1,
                LinkUrl:'hats',
                imageUrl:'http://i.bb.co/cvpntli/hat.png'
                
            },
            {
                title:'JACKET',
                id:2,
                LinkUrl:'jacket'
               
            },
            {
                title:'SNACKNES',
                id:3,
                LinkUrl:''
                
            },
            {
                title:'WOMEN',
                id:4,
                LinkUrl:''
            },
            {
                title:'MAN',
                id:5,
                LinkUrl:''
                
            }]
           
        }
    }
    render(){
        return(
            <div className ="directory-menu">
             {this.state.section.map(({id , ...otherSectionProps})=>(
                    <Menuitem  key={id} {...otherSectionProps}/>
                ))
             }
            
            </div>
            
        
        )
        
    }
}
export default Directory;