import * as skillDb from '../data/skill-db.js'

function index(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills,
      error
    })
  })
}

function show(req, res) {
  skillDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill,
      error
    })
  })
}

export {
  index,
  show
}