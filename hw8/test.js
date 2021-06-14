const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
});

BlogPost.create({
    title: 'jaehong',
    body: 'wtf',
}, (err, blogspot) => {
    console.log(err, blogspot);
});
BlogPost.create({
    title: 'test2',
    body: 'wtfffff',
}, (err, blogspot) => {
    console.log(err, blogspot);
});
BlogPost.create({
    title: 'test3',
    body: 'wtfwtfwtf',
}, (err, blogspot) => {
    console.log(err, blogspot);
});

BlogPost.find({}, (err, blogspot) => {
    console.log('find empty');
    console.log(err, blogspot);
});
BlogPost.find({
    title: 'test2'
}, (err, blogspot) => {
    console.log('find test2');
    console.log(err, blogspot);
});
BlogPost.find({
    title: /test/
}, (err, blogspot) => {
    console.log('find test');
    console.log(err, blogspot);
});

var id = '608fd8654de6906728157ea6';

BlogPost.findById(id, (err, blogspot) => {
    console.log(err, blogspot);
})

BlogPost.findByIdAndUpdate(id, {
    title: 'new title',
    body: 'new body'
}, (err, blogspot) => {
    console.log(err, blogspot);
})

var id2 = '608fda3ca3c68f15d8e6cf1e';

BlogPost.findByIdAndDelete(id2, (err, spot) => {
    console.log(err, spot);
})