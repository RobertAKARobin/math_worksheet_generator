var files = [
  "helpers",
  "template",
  "calc",
  "class.problem",
  "class.problem_factory"
];

files.forEach(function(file){
  require("../../js/" + file + ".js");
});

Problem.prototype.template = new Template("{{#each addend}}{{#if _index}} + {{/if}}{{_value}}{{/each}} = {{sum}}");
