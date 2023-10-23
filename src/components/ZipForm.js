import { useState } from "react";

function ZipForm({ onSubmit }) {
    const [zipCode, setZipCode] = useState('');
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        onSubmit(zipCode);
    };

    const handleChange = (event) => {
        setZipCode(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Enter a zipcode: </label>
                <input value={zipCode} onChange={handleChange}/>
            </form>  
        </div>
    );
}

export default ZipForm;