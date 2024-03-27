import React, { useState, useContext } from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';
import Header from './Header.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.js';
import categories from './categories';
import uploadImageToCloudStorage from './imageCloud';


const CreateCollectionForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [customFields, setCustomFields] = useState([]);
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleAddField = () => {
        setCustomFields([...customFields, { dataType: '', name: '' }]);
    };

    const handleRemoveField = (index) => {
        setCustomFields(customFields.filter((_, i) => i !== index));
    };

    const handleCustomFieldChange = (index, field, value) => {
        const updatedCustomFields = [...customFields];
        updatedCustomFields[index][field] = value;
        setCustomFields(updatedCustomFields);
    };

    const renderCustomFields = () => {
        return customFields.map((field, index) => (
            <div key={index}>
                <Form.Group className='mt-4'>
                    <Form.Label>Data Type</Form.Label>
                    <Form.Control
                        as="select"
                        value={field.dataType}
                        onChange={(e) => handleCustomFieldChange(index, 'dataType', e.target.value)}
                    >
                        <option value="">Select Data Type</option>
                        <option value="date">Date / Time</option>
                        <option value="string">String</option>
                        <option value="text">Text</option>
                        <option value="number">Numerical</option>
                        <option value="logical">Logical</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mt-4'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={field.name}
                        onChange={(e) => handleCustomFieldChange(index, 'name', e.target.value)}
                    />
                </Form.Group>
                <Button variant="danger" onClick={() => handleRemoveField(index)} className="mt-4">Remove</Button>
            </div>
        ));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('test create await');
        const imageUrl = await uploadImageToCloudStorage(imageFile);
        const formData = {
            name,
            description,
            category,
            customFields,
            imageUrl
        };
        console.log('Form submitted:', formData);
        // You can send formData to your server for further processing
    };



    return (
        <Form onSubmit={handleSubmit} className="w-50 mt-5 ml-auto mr-auto">
            <h2 className="mt-5">Create new collection</h2>
            <Form.Group className='mt-4'>
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>

            <Form.Group className='mt-4'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Name your collection"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className='mt-4'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group className='mt-4'>
                <Form.Label>Category</Form.Label>
                <Form.Control
                    required
                    as="select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Category</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            <h4 className="mt-5">Choose optional fields for your collection's items</h4>
            <Button variant="secondary" onClick={handleAddField} className='mt-4'>Add Custom Field</Button>
            {renderCustomFields()}
            <hr></hr>
            <Button variant="primary" type="submit" className="w-100 mt-5 mb-5 bg-success border-success">
                Save
            </Button>
        </Form>
    );
};

const CreateCollection = () => {
    return (
        <div>
            <Header />
            <CreateCollectionForm />
        </div>
    )
}

export default CreateCollection;