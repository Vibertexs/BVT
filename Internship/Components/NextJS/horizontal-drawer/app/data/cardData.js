import Page1 from '../components/Dummy';
import Page2 from '../components/Dummy';
import Page3 from '../components/Dummy';

// Define your data structure with React components and props
const data = {
    "sectionOne": [
        {
            "imageURL": "https://images.unsplash.com/photo-1571822325911-c01620a65e86?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "The Great Wall",
            "childPageContent": <Page1 name="child1" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "Taj Mahal",
            "childPageContent": <Page2 name="child2" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1554357475-accb8a88a330?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "Petra",
            "childPageContent": <Page3 name="child3" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1707414580289-f8919dbdafcc?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "The Colosseum",
            "childPageContent": <Page2 name="child4" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f?q=80&w=1337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "Christ the Redeemer",
            "childPageContent": <Page2 name="child4" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "Chichén Itzá",
            "childPageContent": <Page2 name="child4" />
        },
        {
            "imageURL": "https://images.unsplash.com/photo-1509216242873-7786f446f465?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "imageText": "Machu Picchu",
            "childPageContent": <Page2 name="child5" />
        }
    ]
};


""

export default data;
