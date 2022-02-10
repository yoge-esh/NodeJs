function getToContact(req, res) {
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('<h1>Welcome to contact Page</h1>');
}

function postContact (req, res){
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('<h1>Welcome to Post contact Page</h1>');
}

exports = module.exports = { getToContact, postContact };