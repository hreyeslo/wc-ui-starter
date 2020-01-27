const config = require('../config.json');
const capitalize = require('lodash/capitalize');

module.exports = function(plop) {
  // Generator prefix
  const { prefix = 'wc' } = config.stencil;
  plop.setHelper('storyName', (text) => capitalize(text).replace(/-/g, ' '));
  // create your generators here
  plop.setGenerator('Component', {
    description: 'Create a stencil JS component',
    // array of inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component Name'
      }
    ],
    // array of actions
    actions: [
      // Add all the template files to the dest folder
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'component/component.tsx'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.scss',
        templateFile: 'component/component.scss'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.e2e.ts',
        templateFile: 'component/component.e2e.ts'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.stories.js',
        templateFile: 'component/component.stories.js'
      },
      //   Update all the tempates files with the data
      {
        type: 'modify',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        pattern: /tag-template-component/g,
        template: `${prefix}-{{kebabCase name}}`
      },
      {
        type: 'modify',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        pattern: /template-component/g,
        template: '{{kebabCase name}}'
      },
      {
        type: 'modify',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        pattern: /TemplateComponent/g,
        template: '{{pascalCase name}}'
      },
      {
        type: 'modify',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.e2e.ts',
        pattern: /template-component/g,
        template: '{{kebabCase name}}'
      },
      {
        type: 'modify',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.scss',
        pattern: /template-component/g,
        template: '{{kebabCase name}}'
      },
      {
        type: 'modify',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.stories.js',
        pattern: /StoryNameTemplateComponent/g,
        template: '{{storyName name}}'
      },
      {
        type: 'modify',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.stories.js',
        pattern: /TemplateComponent/g,
        template: '{{pascalCase name}}'
      },
      {
        type: 'modify',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.stories.js',
        pattern: /template-component/g,
        template: `${prefix}-{{kebabCase name}}`
      }
    ]
  });
};
