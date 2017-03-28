'use strict'

const chalk = require('chalk')
const {table} = require('table')

function drawTable(messages) {
  const rows = []

  if (messages.length === 0) {
    return ''
  }

  rows.push([
    chalk.bold('Line'),
    chalk.bold('Column'),
    chalk.bold('Type'),
    chalk.bold('Message'),
    chalk.bold('Rule')
  ])

  messages.forEach(message => {
    let messageType

    if (message.severity === 'error') {
      messageType = chalk.red('error')
    } else {
      messageType = chalk.yellow('warning')
    }

    rows.push([
      message.line || 0,
      message.column || 0,
      messageType,
      message.text,
      message.rule || ''
    ])
  })

  return table(rows, {
    columns: {
      0: {
        width: 8,
        wrapWord: true
      },
      1: {
        width: 8,
        wrapWord: true
      },
      2: {
        width: 8,
        wrapWord: true
      },
      3: {
        paddingRight: 5,
        width: 50,
        wrapWord: true
      },
      4: {
        width: 20,
        wrapWord: true
      }
    },
    border: {

    },
    drawHorizontalLine(index, size) {
      return index === 0 || index === 1 || index === size - 1
    }
  })
}

module.exports = function (results) {
  let file = []

  results.forEach(message => {
    if (message.errored) {
      file.push(`${message.source}:\n`)
      file.push(`${drawTable(message.warnings)}\n\n`)
    }
  })
  return file.join('')
}
