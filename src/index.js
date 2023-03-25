const fs = require('fs/promises')
const { dirname } = require('path')

const myFileWriter = async (fileName, fileContent) => {
	
	fs.writeFile(fileName,fileContent)

}

const myFileReader = async (fileName) => {
	
	fs.readFile(fileName,"utf8",(err,data)=>
	{
		console.log(data)

	})

}


const myFileUpdater = async (fileName, fileContent) => {
	
	fs.appendFile(fileName,fileContent)
}

const myFileDeleter = async (fileName) => {
	
	fs.unlink(fileName)
	
	
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

