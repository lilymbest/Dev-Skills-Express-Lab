const skills = [
    {skill: 'JavaScript', learned: true},
    {skill: 'HTML', learned: true},
    {skill: 'CSS', learned: true},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id){
    skills.splice(id, 1);
}

function create(skill){
    skills.push(skill);
}

function getOne(id){
    return skills[id];
}

function getAll(){
    return skills;
}