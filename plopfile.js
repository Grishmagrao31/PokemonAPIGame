const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + " is Required";
    }
    return true;
  };
};

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("basics", {
    description: "this is a skeleton plopfile",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name of your component?",
        validate: requireField("name"),
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "Plop-templates/component/component/component.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "Plop-templates/component/component/component.test.hbs",
      },
      {
        type: "add",
        path:
          "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js",
        templateFile:
          "Plop-templates/component/component/component.stories.hbs",
      },
      {
        type: "add",
        path:
          "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile:
          "Plop-templates/component/component/component.module.css.hbs",
      },
    ],
  });
};
