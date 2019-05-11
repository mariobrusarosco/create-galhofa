const path = require('path')
const inquirer = require('inquirer')

const askAboutProjectName = () => {
  const question = [
    {
      name: 'projectName',
      type: 'input',
      message: 'Type your projects name'
    }
  ]
  return inquirer.prompt(question)
}

const askAboutBuild = cwdPath => {
  const { dir, base } = path.parse(cwdPath)

  const question = [
    {
      name: `existingWebpack`,
      type: "list",
      message: `You already have a folder named '${base}' inside '${dir}' folder. Do you want to override it?`,
      choices: ['yes','no'],
      default: ['no'],
    }
  ]

  return inquirer.prompt(question)
}

const askAboutFonts = () => {
  const question = [
    {
      name: 'fonts',
      type: 'confirm',
      message: `Are you going to use fonts hosted in your project (via '@font-face' rule?`,
      default: 'no'
    }
  ]

  return inquirer.prompt(question)
}

const askAboutFontFormats = () => {
  const fontFormats = [
    {
      name: 'fontTypes',
      type: 'checkbox',
      message: `Choose some font formats:`,
      choices: [' ttf',' woff',' woff2',' oet',' otf',' all'],
      default: ['all']
    }
  ]

  return inquirer.prompt(fontFormats)
}

module.exports = {
  askAboutProjectName,
  askAboutBuild,
  askAboutFonts,
  askAboutFontFormats,
  // askAboutLoaders,
}
