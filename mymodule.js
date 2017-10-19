var fs = require('fs');
var j=0;
var newList=[];



module.exports = function (dirname, extension, callback) 
{
    
    fs.readdir(dirname, function doneReadingDir(err, list) {
        if(err)
        {
             callback(err);
            
        }
        
        else
        {
            
            for (var i=0; i<list.length; i++)
            {
                ext=list[i].split(".");
                if (ext[1] == extension)
                {
                    newList[j]=list[i];
                    j +=1;
                }
            }
            
            callback(null,newList);

        }
        
    });
    
}
    
    