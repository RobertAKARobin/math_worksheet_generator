var files = [
  "helpers",
  "template",
  "calc",
  "class.problem",
  "class.problem_factory"
];

files.forEach(function(file){
  require("../../" + file + ".js");
});
