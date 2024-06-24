/*



OTHER:
Make text bigger when hovering
After long mouse hover, open it, toggle it on and off in the config file

Read me
1. This component displays the center of the image
2. Automatically takes up full width of the container that its in
3. 

Add a text that pops up from the bottom to either prompt the user, or display title

*/

import Page1 from '../components/Dummy';
import Page2 from '../components/Dummy';
import Page3 from '../components/Dummy';

const data = {
    
    "styling": {
        "height": "90vh",
        "borderThickness": "2em",
        "borderColor": "#FFFFFF",
        "childGap" : "0.5em",
    },

    "cards": [
        {
            "imageURL": "https://images.unsplash.com/photo-1571822325911-c01620a65e86?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "China",
            "childPageContent": <Page1 name="The Great Wall" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "India",
            "childPageContent": <Page2 name="Taj Mahal" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1554357475-accb8a88a330?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "Jordan",
            "childPageContent": <Page3 name="Petra" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1707414580289-f8919dbdafcc?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "Italy",
            "childPageContent": <Page2 name="The Colosseum" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f?q=80&w=1337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "Brazil",
            "childPageContent": <Page2 name="Christ the Redeemer" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "Mexico",
            "childPageContent": <Page2 name="Chichén Itzá" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1509216242873-7786f446f465?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "Peru",
            "childPageContent": <Page2 name="Machu Picchu" />
        },
    ]

};

export default data;
