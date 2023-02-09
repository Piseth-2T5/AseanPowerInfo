import React from "react";


const FormProduct = ({handleSubmit, product, setProduct, setPid}) =>{

    const handleFile1 = (e)=>{
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setProduct({...product, pimage: reader.result})
    }
    const handleFile2 = (e)=>{
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setProduct({...product, pimage2: reader.result})
    }
    const clear = (e) =>{
        e.preventDefault();
        setProduct({pname: "", pcategory: "", pdescription: "", pimage: "", heading2: "", description2: "", heading3: "", description3: "", pimage2: "", heading4: "",description4: ""});
        setPid(null);
    }
    return(
        <div className="container">
            <h4 className="text-center pt-4">Product Form</h4>
            <form className="form-inline pt-4" onSubmit={handleSubmit}>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                        <input 
                            value={product.pname}
                            onChange = {(e)=> setProduct({...product, pname: e.target.value})}
                            type="text"  
                            className="form-control my-4" 
                            placeholder="Heading 1"/>
                        <textarea 
                            value={product.pdescription}
                            onChange = {(e)=> setProduct({...product, pdescription: e.target.value})}
                            name="pdescription" 
                            className="w-100 form-control" 
                            rows={"5"} 
                            placeholder="Description 1"></textarea>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <input 
                            value={product.heading2}
                            onChange = {(e)=> setProduct({...product, heading2: e.target.value})}
                            type="text"  
                            className="form-control my-4" 
                            placeholder="Heading 2"/>
                        <textarea 
                            value={product.description2}
                            onChange = {(e)=> setProduct({...product, description2: e.target.value})}
                            name="pdescription" id="" className="w-100 form-control " rows={"5"} placeholder="Description 2"></textarea>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <input 
                            value={product.heading3}
                            onChange = {(e)=> setProduct({...product, heading3: e.target.value})}
                            type="text"  className="form-control my-4" placeholder="Heading 3"/>
                        <textarea 
                            value={product.description3}
                            onChange = {(e)=> setProduct({...product, description3: e.target.value})}
                            name="Description 3" id="" className="w-100 form-control " rows={"5"} placeholder="Description 3"></textarea>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-4">
                        <input 
                            value={product.heading4}
                            onChange = {(e)=> setProduct({...product, heading4: e.target.value})}
                            type="text"  className="form-control mb-4" placeholder="heading 4"/>
                        <textarea 
                            value={product.description4}
                            onChange = {(e)=> setProduct({...product, description4: e.target.value})}
                            name="Description 4" id="" className="w-100 form-control mb-lg-5" rows={"5"} placeholder="Description 4"></textarea>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <label htmlFor="" className="form-label mt-4">Product Image 1</label>
                        <input 
                            onChange={handleFile1}
                            type="file"  className="form-control mb-4"/>
                        <label htmlFor="">Product Image 2</label>
                        <input 
                            onChange={handleFile2}
                            type="file" className="form-control mb-lg-5"></input>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center">
                        <button className="w-50 d-inline-block my-2 p-2 bg-light text-primary rounded border-1 border-primary">Submit</button>
                        <button className="w-50 d-inline-block my-2 p-2 bg-light text-danger rounded border-1 border-danger" type="reset" onClick={clear}>Clear</button>
                    </div>
                </div>
            </form>
        </div>
    )
}



export default FormProduct;