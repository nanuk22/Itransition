import React, { useState, useMemo } from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';
import Header from './Header.js';


import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Item() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://sgipgmarketingpd.blob.core.windows.net/graphics/ipg-logo/IPG-OUTLINE-BTN-RASTER.jpg" />
            <Card.Body>
                <Card.Title>Norway 1 krona 2008</Card.Title>
                <Card.Text>
                    A rare coin i found in the sea
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Norway</ListGroup.Item>
                <ListGroup.Item>2008</ListGroup.Item>
                <ListGroup.Item>Special edition</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Back to collection</Card.Link>
                <Card.Link href="#">Next</Card.Link>
            </Card.Body>
        </Card>
    );
}

function Comments() {
    return (
        <div>Comments</div>
    )
}

const ItemPage = () => {
    return (
        <div>
            <Header />
            <Item />
            <Comments />
        </div>
    )
}

export default ItemPage;