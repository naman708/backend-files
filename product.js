const path = require('path');
const rootDir=require('../util/path');
exports.adminpage=(req,res,next)=>{
    
        res.sendFile(path.join(rootDir,'view','admin.html'));

};
exports.contractuspage=(req, res) => {
    res.sendFile(path.join(rootDir,'view','form.html'));
};