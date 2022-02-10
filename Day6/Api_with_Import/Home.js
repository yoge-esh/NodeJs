function getToHome(req, res) {
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('<h1>Welcome to Home Page</h1>');
}

function postHome (req, res){
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('<h1>Welcome to Post Home Page</h1>');
}

exports = module.exports = { getToHome, postHome };