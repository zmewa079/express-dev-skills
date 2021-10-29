const skills = [
  {text: 'Coding Languages', have: true, _id: 123321},
  {text: 'Database Knowledge', have: true, _id: 543123},
  {text: 'Data structures and algorithms', have: false, _id: 867543},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the skills
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}