import React, { useState, useEffect } from 'react';
import './RenderCards.css';


// This is each card
const VerticalCard = ({ image, onClick, translateX, zIndex, saturation, onMouseEnter, onMouseLeave, text }) => {
  const cardStyle = {
    transform: `translateX(${translateX})`,
    zIndex,
    filter: `saturate(${saturation}%)`,
    position: 'relative',
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
      {text && <div className="vertical-card-text">{text}</div>}
    </div>
  );
};

const RenderCards = ({ data }) => {
  const numberOfCards = data.sectionOne.length;
  const [selectedCard, setSelectedCard] = useState(-1);
  const [hoveredCard, setHoveredCard] = useState(-1);

  // Placeholder state for the currently displayed card
  const [displayedCard, setDisplayedCard] = useState(-1);

  // This is used to wait until another card is selected to change the child component  
  useEffect(() => {
    if (selectedCard !== -1 && selectedCard !== displayedCard) {
      setDisplayedCard(selectedCard);
    }
  }, [selectedCard, displayedCard]);

  // If selecting a card, selectedCard = the selected card, otherwise it will be -1
  const handleCardClick = (index) => {
    setSelectedCard((prevSelectedCard) => {
      if (prevSelectedCard === index) {
        return -1; // Deselect the card
      } else {
        return index;
      }
    });
  };

  // When mouse hovers over a card, start the hover effect for that card
  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };
  // Once it leaves it sets the hoveredCard to -1. indicating the mouse is not over any cards
  const handleMouseLeave = () => {
    setHoveredCard(-1);
  };

  // css variable thats being passed in
  const cardRenderStyle = {
    '--number-of-cards': numberOfCards,
  };

  // Style responsible for calculating how much space it has to render the child component
  const detailStyle = {
    width: `calc(${100 - 100 / numberOfCards}% - 0.5em)`, // change the second param to change the padding
  };

  return (
    <div className="cards-container">
      <div className="card-render" style={cardRenderStyle}>
        {data.sectionOne.map((section, index) => {
          const isSelected = selectedCard !== -1;
          const isHovered = hoveredCard === index;
          const zIndex = isSelected ? (index === selectedCard ? numberOfCards : index) : (isHovered ? numberOfCards + 1 : index);
          const translateX = isSelected ? `-${index * 100}%` : '0';
          const saturation = isSelected ? 100 : (isHovered ? 100 : 15);

          return (
            <VerticalCard
              key={index}
              image={section.imageURL}
              onClick={() => handleCardClick(index)}
              translateX={translateX}
              zIndex={zIndex}
              saturation={saturation}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              text={section.imageText} // Pass the corresponding text for each card
            />
          );
        })}
      </div>

      {/* If a child card is allowed to be displayed and the child component exists, render it  */}
      {displayedCard !== -1 && data.sectionOne[displayedCard].childPageContent && (
        <div className="detail-container" style={detailStyle}>
          {data.sectionOne[displayedCard].childPageContent}
        </div>
      )}
    </div>
  );
};

export default RenderCards;
