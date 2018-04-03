'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    var masonThreeD = chalk.white.bold('')
    var masonWelcome = chalk.white.bold('\n\n  #     # #######     #     #    #    ####### ####### #     #\n   #   #  #     #     ##   ##   # #   #       #     # ##    #\n    ###   #     #     # # # #  #####  ####### #     # #  #  #\n     #    #     #     #  #  # #     #       # #     # #    ##\n     #    #######  #  #     # #     # ####### ####### #     #\n                   #\n')
    var masonDesc = chalk.white('  Mason, a project generator made with <3 and Yeoman.\n')
    var masonLinks = chalk.white('  Github - https://www.github.com/davidbkay/yo-mason-generator\n  Yeoman - https://yeoman.io\n  Dotnet Core - https://github.com/dotnet/core\n')
    console.log(masonWelcome);
    console.log(masonDesc);
    console.log(masonLinks);

    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'What do you want to call your project? ',
        // default: true
      },
      {
        type: 'input',
        name: 'appDescription',
        message: 'Give me a quick description of your project: ',
      },
      {
        type: 'confirm',
        name: 'api',
        message: 'Are you using an API? '
      },
      {
        type: 'input',
        name: 'author',
        message: 'Who are you? '
      },
      {
        type: 'input',
        name: 'email',
        message: 'Your Email? '
      }
    ];
    
    props => {
      const tpl = {
        api: props.api,
        description: props.description,
        author: props.author,
        appName: props.appName,
        email: props.email
      };

      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        {
          appName: this.appName,
          appDescription: this.appDescription,
          author: this.author,
        }
      );

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  install() {
    this.installDependencies();
  }
};
