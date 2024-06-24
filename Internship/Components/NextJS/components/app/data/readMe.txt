HORIZONTAL CARDS

Description:
    Has multiple cards which expand and collapse when you click on it.
    When you click a card, all the cards shift to the left.
    When you hover over a card it saturates and zooms in, inviting you to click it.
    Most of the data can be changed in the config.js file in the data folder.

Config File:
    1. styling
        a. "height": Height of the cards
        b. "BorderThickness": Thickness of each border surrounding the cards
        c. "BorderColor": The color of the border
        d. "childGap" : Gap between the child component and the card when a card is selected
    2. cards
        a. "imageURL" : Image of the card. (Note: the card will always show the center of the image)
        b. "imageText" : Overlay the text over the image. 
        c. "childPageContent" : A react component that you pass in which will be the child component

Potential Issues:
    1. When you click the image, the image width slightly shrinks
        not really noticable except for the first one and when there
        is a thick border and small space for iamges
    2. Card is always centered
    3. Cards currently only open to the left