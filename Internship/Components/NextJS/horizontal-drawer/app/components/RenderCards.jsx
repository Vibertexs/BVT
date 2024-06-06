import React, { useState, useEffect } from 'react';
import './RenderCards.css';

const VerticalCard = ({ image, onClick, translateX, zIndex, saturation, onMouseEnter, onMouseLeave, text, animating }) => {
  const cardStyle = {
    transform: `translateX(${translateX})`,
    zIndex,
    filter: `saturate(${saturation}%)`,
    position: 'relative',
    pointerEvents: animating ? 'none' : 'auto', // Disable pointer events if animating
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
  const numberOfCards = data.cards.length;
  const [selectedCard, setSelectedCard] = useState(-1);
  const [hoveredCard, setHoveredCard] = useState(-1);
  const [animating, setAnimating] = useState(false); // Track if cards are animating

  const [displayedCard, setDisplayedCard] = useState(-1);

  useEffect(() => {
    if (selectedCard !== -1 && selectedCard !== displayedCard) {
      setDisplayedCard(selectedCard);
    }
  }, [selectedCard, displayedCard]);

  const handleCardClick = (index) => {
    setSelectedCard((prevSelectedCard) => {
      if (prevSelectedCard === index) {
        setAnimating(true); // Start animating when deselecting a card
        setTimeout(() => setAnimating(false), 500); // Set animation duration
        return -1;
      } else {
        setAnimating(true); // Start animating when selecting a card
        setTimeout(() => setAnimating(false), 500); // Set animation duration
        return index;
      }
    });
  };

  const handleMouseEnter = (index) => {
    if (!animating) {
      setHoveredCard(index);
    }
  };

  const handleMouseLeave = () => {
    if (!animating) {
      setHoveredCard(-1);
    }
  };

  const cardRenderStyle = {
    '--number-of-cards': numberOfCards,
    '--height': data.styling.height,
  };
    
  const detailStyle = {
    '--childHeight': data.styling.height,
    width: `calc(${100 - 100 / numberOfCards}% - 0.5em)`,
  };

  return (
    <div className="cards-container">
      <div className="card-render" style={cardRenderStyle}>
        {data.cards.map((section, index) => {
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
              text={section.imageText}
              animating={animating}
            />
          );
        })}
      </div>

      {displayedCard !== -1 && data.cards[displayedCard].childPageContent && (
        <div className="detail-container" style={detailStyle}>
          {data.cards[displayedCard].childPageContent}
        </div>
      )}
    </div>
  );
};

export default RenderCards;
