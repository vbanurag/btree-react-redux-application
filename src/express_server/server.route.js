const btreeInsert = require('./btree/binaryTree');
const bodyParser = require('body-parser');

module.exports.route = (app) => {
    const allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');

        next();
    }
    app.use(allowCrossDomain);
    app.use(bodyParser.json());


    app.post('/btree/insert', (req,res) => {
        let data = req.body.node;
        let value = data.data.node
        let tree = btreeInsert.insertIntoTree(value);
        console.log(tree,'-----')
        res.send({tree: tree});
    })
    app.post('/btree/subtree' , (req, res ) => {
        let data = req.body.node;
        console.log(data,'---------subtre')
        let tree = btreeInsert.getSubTree(data.data.index);
        res.send({subtree:tree});
    })

}