var Skill = require('../models/Skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
};

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res){
    req.body.learned = false;
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res){
    res.render('skills/new');
}

function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id)    
    });
}

function index(req, res){
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }