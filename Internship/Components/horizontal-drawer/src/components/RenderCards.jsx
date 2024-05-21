import React, { useState, useEffect } from 'react';
import './RenderCards.css';

const VerticalCard = ({ image, onClick, translateX, zIndex, saturation, onMouseEnter, onMouseLeave }) => {
  const cardStyle = {
    transform: `translateX(${translateX})`,
    zIndex,
    filter: `saturate(${saturation}%)`,
  };

  return (
    <div
      className="vertical-card"
      onClick={onClick}
      style={cardStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={image} alt="Vertical Card" className="vertical-card-image" />
    </div>
  );
};

const RenderCards = ({ numberOfCards, imagesArray, linksArray, ChildComponent }) => {
  const [selectedCard, setSelectedCard] = useState(-1);
  const [hoveredCard, setHoveredCard] = useState(-1);
  const [cardZIndex, setCardZIndex] = useState([]);

  useEffect(() => {
    const initialZIndex = Array.from({ length: numberOfCards }, (_, index) => index);
    setCardZIndex(initialZIndex);
  }, [numberOfCards]);

  const handleCardClick = (index) => {
    setSelectedCard((prevSelectedCard) => {
      if (prevSelectedCard === index) {
        return -1; // Deselect the card
      } else {
        const newZIndex = Array.from({ length: numberOfCards }, (_, i) => i);
        newZIndex[index] = numberOfCards;
        setCardZIndex(newZIndex);
        return index;
      }
    });
    console.log('Card clicked:', index);
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(-1);
  };

  useEffect(() => {
    console.log('Selected card:', selectedCard);
    console.log('Card Z-Index:', cardZIndex);
  }, [selectedCard, cardZIndex]);

  const cardRenderStyle = {
    '--number-of-cards': numberOfCards,
  };

  const detailStyle = {
    marginLeft: `calc(${100 / numberOfCards}% + 0.5em)`,
    width: `calc(${100 - 100 / numberOfCards}% - 0.5em)`,
  };

  return (
    <div className="cards-container">
      <div className="card-render" style={cardRenderStyle}>
        {Array.from({ length: numberOfCards }).map((_, index) => {
          const isSelected = selectedCard !== -1;
          const translateX = isSelected ? `-${index * 100}%` : '0';
          let saturation = 15; // Default saturation for non-selected, non-hovered cards
          
          if (hoveredCard === index) {
            saturation = 100; // Full saturation when hovered
          } else if (selectedCard === index) {
            saturation = 100; // Full saturation for the selected card
          } else if (isSelected) {
            saturation = 20; // Lower saturation for other non-selected cards when one is selected
          }

          return (
            <VerticalCard
              key={index}
              image={imagesArray[index]}
              onClick={() => handleCardClick(index)}
              translateX={translateX}
              zIndex={cardZIndex[index]}
              saturation={saturation}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      {selectedCard !== -1 && ChildComponent && (
        <div className="detail-container" style={detailStyle}>
          <ChildComponent name={`Card ${selectedCard + 1}`} />
        </div>
      )}
    </div>
  );
};

export default RenderCards;
