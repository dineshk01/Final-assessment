import Axios from 'axios';
import React, { Component } from 'react';
import Classes from './ProductData.module.css';

class ProductDataDesign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productGetData: [],

        }
    }

    componentDidMount() {
        Axios.get("https://5f9d83db6dc8300016d6149e.mockapi.io/ProductDetails")
            .then(response => {
                console.log(response.data)
                this.setState({ productGetData: [ ...response.data ] })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {

        const EditIcon = ()=>{
            return(
                <div>
                <textarea ref="newText" defaultValue="Edit me"></textarea>
               <button onClick={this.save}>Save</button>
           </div>
            )
        }

    

        const productTable = this.state.productGetData.map((item) => {
            console.log(item)
            return (
                <tr>
                    <td>{item.Name}</td>
                    <td>{item.Description}</td>
                    <td>{item.Price}</td>
                    <td>{item.Length}</td>
                    <td>{item.Breadth}</td>
                    <td>{item.Height}</td>
                    <td ><i onClick={EditIcon}  class="fas fa-edit"></i></td>
                    <td><i class="fas fa-trash"></i></td>
                </tr>

            )
        })

        return (
            <div className={Classes.Datadiv}>

                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Length</th>
                        <th>Breadth</th>
                        <th>Height</th>
                        <th>Operation</th>
                    </tr>
                    {productTable}
                   

                </table>

            </div>

        )
    }
}

export default ProductDataDesign;
