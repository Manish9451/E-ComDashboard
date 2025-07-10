import {useState} from "react";

const AddProduct = () => {
     
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");
     
    const addProduct=()=>{

        console.warn(name,price,category,company);
    }


    return (

        <div className="add-product">
            <h1>Add Product</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Product Name" />
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Product Price" />
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Product Category" />
            <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Product Company Name" />

            <button className="add-product-button" onClick={addProduct}>Add Product</button>
        </div>



    )


}
export default AddProduct;
