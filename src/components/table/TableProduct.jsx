import React from "react"
import { deleteProduct } from "../../actions/product";
import { useDispatch  } from "react-redux";
const TableProduct = ({setSwicher, setHide, products, setProduct, setPid}) => {
    const dispatch = useDispatch();
    const handleUpdate = (id) =>{
        const product = products.find(e => e._id === id);
        setSwicher(true);
        setHide(false);
        setPid(id);
        setProduct(product);
    }
    let i = 0;
    return(
        <div className="table-wraper pt-4">
            <table className="table">
                <thead className="bg-dark bg-opacity-10">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Heading1</th>
                        <th scope="col">Description1</th>
                        <th>EDIT</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => 
                        <tr key={product._id}>
                        <th scope="row">{i+=1}</th>
                        <td>{product.pname}</td>
                        <td>{product.pdescription}</td>
                        <td >
                            <i className="fa-regular fa-pen-to-square me-2 " onClick={()=> handleUpdate(product._id)}></i>
                            <i className="fa-solid fa-trash-can m-2 text-danger" onClick={()=> dispatch(deleteProduct(product._id))}></i>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TableProduct;