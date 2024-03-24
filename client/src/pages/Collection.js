import React, { useState, useMemo } from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';
import Header from './Header.js';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Collection() {
    return (
        <CardGroup>
            <h2>Coins</h2>
            <Card>
                <Card.Img variant="top" src="https://sgipgmarketingpd.blob.core.windows.net/graphics/ipg-logo/IPG-OUTLINE-BTN-RASTER.jpg" />
                <Card.Title>Norway 1 krona</Card.Title>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://sgipgmarketingpd.blob.core.windows.net/graphics/ipg-logo/IPG-OUTLINE-BTN-RASTER.jpg" />
                <Card.Title>Norway 1 krona</Card.Title>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://sgipgmarketingpd.blob.core.windows.net/graphics/ipg-logo/IPG-OUTLINE-BTN-RASTER.jpg" />
                <Card.Title>Norway 1 krona</Card.Title>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://sgipgmarketingpd.blob.core.windows.net/graphics/ipg-logo/IPG-OUTLINE-BTN-RASTER.jpg" />
                <Card.Title>Norway 1 krona</Card.Title>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://sgipgmarketingpd.blob.core.windows.net/graphics/ipg-logo/IPG-OUTLINE-BTN-RASTER.jpg" />
                <Card.Title>Norway 1 krona</Card.Title>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://sgipgmarketingpd.blob.core.windows.net/graphics/ipg-logo/IPG-OUTLINE-BTN-RASTER.jpg" />
                <Card.Title>Norway 1 krona</Card.Title>
            </Card>
            
            
        </CardGroup>
    );
}

const CollectionPage = () => {
    return (
        <div>
            <Header />
            <Collection />

        </div>
    )
}

export default CollectionPage;