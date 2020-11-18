const requireField = (fieldName) => {
    return (value) => {
        if (String(value).length === 0) {
            return fieldName + ' is Required';
        }
        return true;
    };
}

module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('basics', {
        description: 'this is a skeleton plopfile',
        prompts: [
           { type: 'input',
                name: 'name',
                firstname : 'firstname',
                message: 'Name of your component?',
                validate: requireField('name')
            } 
        ], // array of inquirer prompts
        actions: [
            {
                type: 'add',
                path:'src/{{pascalCase name}}.js',
                templateFile: 'plop-template/Component/component.js.hbs'
            },

          {
            type: 'add',
            path:'src/{{pascalCase name}}.test.js',
            templateFile: 'plop-template/Component/component.test.hbs'
          }

            
        ]  // array of actions
    });
};
