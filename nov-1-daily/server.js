// Install modules
const express = require('express')
const app = express()

// Define seed data
// Your data here
const quote = [
  {
    id: 1,
    title: 'All we have is now',
    description: 'portrait photo',
    width: 640,
    height: 853,
    pathURL: 'images/sm/sm-a.jpg',
    linkURL: 'https://images.pexels.com/photos/1580625/pexels-photo-1580625.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    credit: 'Daria Shevtsova',
    creditURL: 'https://www.pexels.com/@daria',
  },
  {
    id: 2,
    title: 'Inspiring Words',
    description: 'portrait photo-2',
    width: 640,
    height: 960,
    pathURL: 'images/sm/sm-b.jpg',
    linkURL: 'https://images.pexels.com/photos/6956352/pexels-photo-6956352.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    credit: 'Eva Elijas',
    creditURL: 'https://www.pexels.com/@eva-elijas',
  },
  {
    id: 3,
    title: 'Dont Quit',
    description: 'portrait photo-3',
    width: 640,
    height: 959,
    pathURL: 'images/sm/sm-c.jpg',
    linkURL: 'https://images.pexels.com/photos/5238670/pexels-photo-5238670.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    credit: 'lya Kobruseva',
    creditURL: 'https://www.pexels.com/@olyakobruseva',
  },
  {
    id: 4,
    title: 'Be the change you want to see',
    description: 'portrait photo-4',
    width: 640,
    height: 959,
    pathURL: 'images/sm/sm-d.jpg',
    linkURL: 'https://images.pexels.com/photos/6185624/pexels-photo-6185624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    credit: 'Polina Kovaleva',
    creditURL: 'https://www.pexels.com/@polina-kovaleva',
  },
  {
    id: 5,
    title: 'You are beautiful',
    description: 'portrait photo-5',
    width: 640,
    height: 960,
    pathURL: 'images/sm/sm-e.jpg',
    linkURL: 'https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    credit: 'Lisa',
    creditURL: 'https://www.pexels.com/@fotios-photos',
  },
  {
    id: 6,
    title: 'You can change the world, girl',
    description: 'portrait photo-6',
    width: 640,
    height: 959,
    pathURL: 'images/sm/sm-f.jpg',
    linkURL: 'https://images.pexels.com/photos/6185361/pexels-photo-6185361.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    credit: 'Polina Kovaleva',
    creditURL: 'https://www.pexels.com/@polina-kovaleva',
  },
  {
    id: 7,
    title: 'You are an amazing human',
    description: 'portrait photo-7',
    width: 640,
    height: 960,
    pathURL: 'images/sm/sm-g.jpg',
    linkURL: 'https://images.pexels.com/photos/3974410/pexels-photo-3974410.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    credit: 'Lisa',
    creditURL: 'https://www.pexels.com/@fotios-photos',
  },
  {
    id: 8,
    title: 'Fight for your right',
    description: 'portrait photo-8',
    width: 640,
    height: 958,
    pathURL: 'images/sm/sm-h.jpg',
    linkURL: 'https://images.pexels.com/photos/4753879/pexels-photo-4753879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    credit: 'cottonbro',
    creditURL: 'https://www.pexels.com/@cottonbro',
  },
  {
    id: 9,
    title: 'Dont worry nobody knows what theyre doing either',
    description: 'portrait photo-9',
    width: 640,
    height: 959,
    pathURL: 'images/sm/sm-i.jpg',
    linkURL: 'https://images.pexels.com/photos/3927440/pexels-photo-3927440.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    credit: 'ready made',
    creditURL: 'https://www.pexels.com/@readymade',
  },
  {
    id: 10,
    title: 'Difficult roads leads to beautiful destinations',
    description: 'portrait photo-10',
    width: 640,
    height: 781,
    pathURL: 'images/sm/sm-j.jpg',
    linkURL: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80',
    credit: 'Hello Im Nik',
    creditURL: 'https://unsplash.com/@helloimnik',
  },
  {
    id: 11,
    title: 'Dont give up',
    description: 'portrait photo-11',
    width: 640,
    height: 960,
    pathURL: 'images/sm/sm-k.jpg',
    linkURL: 'https://images.unsplash.com/photo-1567219934540-9f75f7b87552?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    credit: 'capnsnap',
    creditURL: 'https://unsplash.com/@capnsnap',
  },
  {
    id: 12,
    title: 'Some things takes time',
    description: 'portrait photo-12',
    width: 640,
    height: 960,
    pathURL: 'images/sm/sm-l.jpg',
    linkURL: 'https://images.unsplash.com/photo-1613909327715-216aabf51c52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=699&q=80',
    credit: 'Duane Mendes',
    creditURL: 'https://unsplash.com/@duanemendes',
  },
  {
    id: 13,
    title: 'Youre not lost youre here',
    description: 'portrait photo-13',
    width: 640,
    height: 853,
    pathURL: 'images/sm/sm-m.jpg',
    linkURL: 'https://images.unsplash.com/photo-1553002401-c0945c2ff0b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
    credit: 'Eileen Pan',
    creditURL: 'https://unsplash.com/@eileenp',
  },
  {
    id: 14,
    title: 'You can do the hard things',
    description: 'portrait photo-14',
    width: 640,
    height: 960,
    pathURL: 'images/sm/sm-n.jpg',
    linkURL: 'https://images.unsplash.com/photo-1591088722104-ede622d0986e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    credit: 'Kelli McClintock',
    creditURL: 'https://unsplash.com/@kelli_mcclintock',
  }
];

// Dynamic JSON Endpoint
app.get('/api/quote', function(request, response) {
  response.send(quote)
})

app.get('/api/quote/:id', function(request, response) {
  console.log(request.params)
  const quotes = quote.find(function(item) {
    return item.id === Number(request.params.id)
     // Use Array.find() here
  })
  response.send(quotes)
})


// Handle 404 errors with middleware
app.use(function(request, response) {
  response.status(404)
  response.send('404: File Not Found')
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});