import React,{ useState,useEffect}from "react";
import axios from 'axios';
const ProductList = () =>{
const [products,setProducts] = useState([]);
const [Preproducts,setPreProducts] = useState([]);
const includesKeys = ["brand","title","category","stock"];
useEffect(()=>{
callListApi();
},[]);
const callListApi = async()=>{
 let response = await axios.get(`https://dummyjson.com/products`);
 if(response?.status) {
  // console.log(response?.data?.products);
let randomArr = response?.data?.products.sort(() => Math.random() - 0.5);
 setProducts(randomArr); setPreProducts(randomArr);
 }
}
const searchEvent = (e)=>{
    let value = e?.target?.value?.toLowerCase()?.trim();
    FilterFun(value);
}
function FilterFun (value){
// console.log(`onchange values : ${value}`);
if(!value) {
    console.log(`pre prod: ${Preproducts}`);
setProducts(Preproducts);
} 
else {
let FilterData = Preproducts.filter((fl)=>{
    return Object.keys(fl).some(key => {
        return includesKeys?.includes(key) ? fl[key].toString().toLowerCase().includes(value) : false
      })
});
console.log(FilterData);
setProducts(FilterData);
}
}
// console.log(products);
const fun = (val)=>{
console.log(val);
}


// Debounceing

function Debounceing(searchEvent, delay = 500) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { searchEvent.apply(this, args); }, delay);
    };
}

const processChange = Debounceing((e) => searchEvent(e));

return(
        <>
        <h5>List of Product</h5>
        <input type = "search" className="searchClass" onChange={processChange}/>
        <table>
         <thead>
         <th>S.no.</th>
         <th>Brand Name</th>
         <th>Product Name</th>
         <th>Category</th>
         <th>Product no</th>
         <th>Price</th>
         <th>Rating</th>
         <th>Stock</th>
         <th>Img</th>
        </thead>
        <tbody>
            {products?.map((values,key)=>(
                <>
                <tr>
            <td onClick={()=>{fun(key+1)}}>{key+1}</td>
            <td onClick={()=>{fun(values?.brand)}}>{values?.brand}</td>
            <td onClick={()=>{fun(values?.title)}}>{values?.title}</td>
            <td onClick={()=>{fun(values?.category)}} >{values?.category}</td>
            <td onClick={()=>{fun(values?.id)}}>{values?.id}</td>
            <td onClick={()=>{fun(values?.price)}}>{values?.price}Rs.</td>
            <td onClick={()=>{fun(values?.rating)}} >{values?.rating}</td>
            <td onClick={()=>{fun(values?.stock)}}>{values?.stock}</td>
            <td className="singleLineImageContainer">{values?.images?.map(image => <img className="image" src={image} alt="product img"  width={90} height={80}/>)}</td>
            </tr>
                </>
            ))}
        </tbody>

        </table>
        </>
    );
}
export default ProductList;