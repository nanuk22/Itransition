import React from 'react';
import { Container, Stack, Carousel, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';


//this is just a temporary template to visualize. 
const Collections = [
    { id: 0, category: "Books", name: "Borges" },
    { id: 1, category: "Books", name: "Fiction" },
    { id: 2, category: "Money", name: "Coins" },
    { id: 3, category: "Maps", name: "Austria" },
    { id: 4, category: "Cars", name: "BMW" },
];

function CreateNewItem({ name, category }) {
    return (
        <div>
            <p>{name}</p>
            <p>{category}</p>
        </div>
    );
}

function NewItems() {
    return (
        <Container>
            <h2>New Items</h2>
            <Row>
                {Collections.map((item) => {
                    console.log(item);
                    return (
                        <Col key={item.id}><CreateNewItem name={item.name} category={item.category} /></Col>)
                })}
            </Row>
        </Container>
    );
}

//this one also is for visualisation
function BiggestCollections() {
    return (<div className='m-auto'><h2>Biggest Collections</h2>
        <Carousel interval={null}>

            <Carousel.Item>
                <img width="80%" height="400" src="https://www.shutterstock.com/image-vector/countryside-panorama-evening-jpg-version-600nw-23688139.jpg" text="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width="80%" height="400" src="https://c4.wallpaperflare.com/wallpaper/324/424/56/waterfall-high-quality-hd-jpg-green-and-purple-water-falls-illustration-wallpaper-preview.jpg" text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width="80%" height="400" src="https://samples-files.com/samples/Images/jpg/1920-1080-sample.jpg" text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></div>
    )
}

function Tags() {
    return (
        <div>list of tags</div>
    )
}

function Main() {
    return (
        <Stack gap={5}>
            <div className='mb-2'>
                <Header />
            </div>
            <div>
                <NewItems />
            </div>
            <div>
                <BiggestCollections />
            </div>
            <div>
                <Tags />
            </div>
        </Stack>
    );
};



export default Main;
