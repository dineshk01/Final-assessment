
import Axios from 'axios';
import React from 'react';
import Classes from './ProductDetailsPage.module.css';

class ProductDetailspage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(e.target.Name.value)
            const data = {
                Name: e.target.Name.value,
                Description: e.target.Description.value,
                Price: e.target.Price.value,
                Length: e.target.Length.value,
                Breadth: e.target.Breadth.value,
                Height: e.target.Height.value

            }
            Axios.post('https://5f9d83db6dc8300016d6149e.mockapi.io/ProductDetails', data)
                .then(response => {
                    alert('Product successfully updated')

                })
                .catch(err => {
                    console.log(err)
                })


        }



        return (
            <div className={Classes.FormDiv}>
                <form onSubmit={handleSubmit} className={Classes.Form}>
                    <h1 className={Classes.Title}>Product Details</h1>
                    <div className={Classes.Wrapper}>
                        <p className={Classes.Heading}>Name</p>
                        <input className={Classes.Inputdata} name="Name" type="text" required />
                        <p className={Classes.Heading}>Description</p>
                        <input className={Classes.Inputdata} name="Description" type="text" required />
                        <p className={Classes.Heading}>Price</p>
                        <input className={Classes.Inputdata} name="Price" type="text" required />
                        <p className={Classes.Heading}>Length</p>
                        <input className={Classes.Inputdata} name="Length" type="text" required />
                        <p className={Classes.Heading}>Breadth</p>
                        <input className={Classes.Inputdata} name="Breadth" type="text" required />
                        <p className={Classes.Heading}>Height</p>
                        <input className={Classes.Inputdata} name="Height" type="text" required />
                    </div>
                    <input className={Classes.Btn} type="submit" value="Submit" />

                </form>


            </div>
        )
    }
}
export default ProductDetailspage;