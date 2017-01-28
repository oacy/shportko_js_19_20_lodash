
$.getJSON('data.json', function(json){
 
    var arr = json;
  
    

//1. Массив скиллов всех людей отсортированый по алфавиту;
var skills =_.map(arr, 'skills');
var unionskills = _.union.apply(null, skills);
var lcuk=_.mapValues(unionskills, _.method('toLowerCase'));
var array1 = _.sortBy(lcuk);

console.log(array1);

//2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends);
var k =_.map(arr, function (item) {
    return [item.name,_.size(item.friends)]
});
var l = _.sortBy(k,[1]);
var array2 = _.map(l,'0');

console.log(array2);


//3. Массив всех друзей всех пользователей
var friends =_.map(arr, function (item) {
    return [  _.map(item.friends,'name') ]
});
var unionfriends = _.union.apply(null, _.union.apply(null, friends));

console.log(unionfriends);
});