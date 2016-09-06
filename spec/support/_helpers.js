var files = [
  "helpers",
  "calc",
  "class.problem_template"
];

files.forEach(function(file){
  require("../../" + file + ".js");
});
