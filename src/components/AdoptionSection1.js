import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './adopt.css'; // Import the CSS file

// Replace with actual image paths or URLs
import cat1 from './cat1.jpg';
import cat2 from './cat2.jpg';
import cat3 from './cat3.jpg';
import cat4 from './cat4.jpg';
import cat5 from './cat5.jpg';
import cat6 from './cat6.jpg';
import cat7 from './cat7.jpg';
import cat8 from './cat8.jpg';
import cat9 from './cat9.jpg';

function CardGrid() {
    const cardData = [
        { img: cat1, title: 'Car 1', text: 'Description for card 1.' },
        { img: cat2, title: 'Card 2', text: 'Description for card 2.' },
        { img: cat3, title: 'Card 3', text: 'Description for card 3.' },
        { img: cat4, title: 'Card 4', text: 'Description for card 4.' },
        { img: cat5, title: 'Card 5', text: 'Description for card 5.' },
        { img: cat6, title: 'Card 6', text: 'Description for card 6.' },
        { img: cat7, title: 'Card 7', text: 'Description for card 7.' },
        { img: cat8, title: 'Card 8', text: 'Description for card 8.' },
        { img: cat9, title: 'Card 9', text: 'Description for card 9.' },
    ];

    const handleAdoptClick = () => {
        window.location.href = "/adoption-form"; // Replace with your actual adoption form URL
    };

    return (
        <div>
            <div className="card-grid">
                {cardData.map((card, index) => (
                    <Card className="custom-card" key={index}>
                        <Card.Img variant="top" src={card.img} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.text}</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <div style={{ textAlign: 'center' }}>
                <button className="adopt-button" onClick={handleAdoptClick}>
                    Adopt a cat!
                </button>
            </div>
        </div>
    );
}

export default CardGrid;
