module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require Cucumber/step-definitions/**/*.ts',
    'Cucumber/features/**/*.feature',  
  ].join(' '),
};