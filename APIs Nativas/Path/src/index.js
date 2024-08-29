import path from "path";

const examplePath = "/Users/Refsnes/demo_path.js";

console.log("1: ", path.basename(examplePath)); //	Returns the last part of a path
console.log("2: ", path.delimiter); // Returns the delimiter specified for the platform
console.log("3: ", path.dirname(examplePath)); // 	Returns the directories of a path
console.log("4: ", path.extname(examplePath)); // 	Returns the file extension of a path

// format()	    Formats a path object into a path string
// isAbsolute()	Returns true if a path is an absolute path, otherwise false
// join()	        Joins the specified paths into one
// normalize()  	Normalizes the specified path
// parse()      	Formats a path string into a path object
// posix	        Returns an object containing POSIX specific properties and methods
// relative()	    Returns the relative path from one specified path to another specified path
// resolve()	    Resolves the specified paths into an absolute path
// sep	            Returns the segment separator specified for the platform
// win32	        Returns an object containing Windows specific properties and methods
