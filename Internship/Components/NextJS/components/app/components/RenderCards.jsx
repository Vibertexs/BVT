import React, { useState, useEffect } from 'react';
import './RenderCards.css';

// Component for individual vertical card
const VerticalCard = ({ index, image, onClick, translateX, zIndex, saturation, onMouseEnter, onMouseLeave, text, animating, borderThickness, numberOfCards, isSelected }) => {
  // Styles for each card
  let borderStyle = {};

  if (isSelected) {
    // If the card is selected, all borders have the same thickness
    borderStyle = {
      border: `${borderThickness} solid var(--borderColor)`
    };
  } else {
    /*
      If there is only 2 cards, then make it so that the first one has normal styling and the second one doesnt have a left border
      Else if there are more than 2 then do the following:
        first one has normal
        then everyone after that has no left border
    */
    // If the card is not selected, set borders based on position
    if (index === 0) {
      // The right border should be half of the borderThickness that is passed in
      borderStyle = {
        borderRight: `calc(${borderThickness} / 2) solid var(--borderColor)`
      };
    } else if (index === numberOfCards - 1) {
      // If it is the last card, the left border should be half
      borderStyle = {
        borderLeft: `calc(${borderThickness} / 2) solid var(--borderColor)`
      };
    } else {
      // If it is not the first nor the last, then, the left and right border should be half of the value of borderThickness
      borderStyle = {
        borderLeft: `calc(${borderThickness} / 2) solid var(--borderColor)`,
        borderRight: `calc(${borderThickness} / 2) solid var(--borderColor)`
      };
    }
  }

  const cardStyle = {
    transform: `translateX(${translateX})`,     // Slide cards left if selected
    zIndex,                                     // Selected card is displayed on top
    filter: `saturate(${saturation}%)`,         // Saturate if card is selected
    position: 'relative',
    pointerEvents: animating ? 'none' : 'auto', // Disable pointer events if animating
    ...borderStyle                              // Apply the border styles
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

// Main component to render all the cards
const RenderCards = ({ data }) => {
  // Total number of cards
  const numberOfCards = data.cards.length;                
  
  // Index of the card that the user clicks
  const [selectedCard, setSelectedCard] = useState(-1);   

  // Index of the card that the mouse is currently hovering over
  const [hoveredCard, setHoveredCard] = useState(-1);    

  // Track if cards are animating
  const [animating, setAnimating] = useState(false);      
  
  // Index of the currently displayed card
  // Used so that children component wouldn't disapear
  const [displayedCard, setDisplayedCard] = useState(-1); 

  // Sync displayedCard with selectedCard
  useEffect(() => {
    // If a card is selected and it not the display card, change the display
    // Used for a cleaner transition between cards since the child will only change
    // once the cards hide it
    if (selectedCard !== -1 && selectedCard !== displayedCard) {
      setDisplayedCard(selectedCard);
    }
  }, [selectedCard, displayedCard]);

  // Handle card click events
  const handleCardClick = (index) => {
    setSelectedCard((prevSelectedCard) => {

      // Deselecting a card
      if (prevSelectedCard === index) {
        setAnimating(true); // Start animating when deselecting a card
        setTimeout(() => setAnimating(false), 600); // Set animation duration
        return -1; // Deselect card

      // Selecting a card
      } else {
        setAnimating(true); // Start animating when selecting a card
        setTimeout(() => setAnimating(false), 600); // Set animation duration
        return index; // Select new card
      }
    });
  };

  // Handle mouse enter events
  const handleMouseEnter = (index) => {
    if (!animating) {
      setHoveredCard(index);
    }
  };

  // Handle mouse leave events
  const handleMouseLeave = () => {
    if (!animating) {
      setHoveredCard(-1);
    }
  };

  // Style for the card render container
  const cardRenderStyle = {
    '--number-of-cards': numberOfCards,
    '--height': data.styling.height,
    '--borderThickness' : data.styling.borderThickness,
    '--borderColor' : data.styling.borderColor,
    };
    
    // Style for the child container
    const detailStyle = {
      '--childHeight': data.styling.height, // We can't just use the height in cardRenderStyle since it leads to issues in css even though they are the same
      width: `calc(${100 - 100 / numberOfCards}% - ${data.styling.childGap})`, // gap between the card and the child component
      };
      

  return (
    <div className="cards-container">
      <div className="card-render" style={cardRenderStyle}>

        {/* data.cards has image urls, text, and the component */}
        {data.cards.map((section, index) => {
          const isSelected = selectedCard === index; // Check if the current card is selected
          const isHovered = hoveredCard === index;  // Check if the current card is hovered
          const zIndex = isSelected ? numberOfCards : (isHovered ? numberOfCards + 1 : index); // Set zIndex
          const translateX = selectedCard !== -1 ? `-${index * 100}%` : '0'; // TranslateX if any card is selected
          const saturation = isSelected || isHovered ? 100 : 15; // Set saturation for selected or hovered card
          
          // we need to change it so that the borders for the first card on the right, last card on the left, and all cards in between have half the border thickness
          return (
            <VerticalCard
              key={index}
              index={index}
              image={section.imageURL}
              onClick={() => handleCardClick(index)}
              translateX={translateX}
              zIndex={zIndex}
              saturation={saturation}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              text={section.imageText}
              animating={animating}
              borderThickness={data.styling.borderThickness}
              numberOfCards={numberOfCards}
              isSelected={isSelected}
            />
          );
        })}

      </div>

      {/* Render detail container if a card is selected */}
      {displayedCard !== -1 && data.cards[displayedCard].childPageContent && (
        <div className="detail-container" style={detailStyle}>
          {data.cards[displayedCard].childPageContent}
        </div>
      )}
    </div>
  );
};

export default RenderCards;
