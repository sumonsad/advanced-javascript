const students = [
    {id:11,name:'salam'},
    {id:21,name:'kalam'},
    {id:31,name:'jamal'},
    {id:41,name:'kamal'}
];

const names  = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 11);
const search = students.find(s => s.id > 11);
console.log(search);