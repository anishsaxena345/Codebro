const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js')

//Customise yargs version

yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: false,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: false,
            type: 'string'
        },
    },
   
    handler: function(argv) {
        //console.log('Adding Title: ' + argv.title)
        //console.log('Adding Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe:'Removing a note',
    handler: function(){
        console.log('Removind the note')
    }
})

//Listing out all the notes

yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler: function(){
        console.log('Listing all the notes')
    }
})

//Read all the notes

yargs.command({
    command: 'read',
    describe: "Read all the notes",
    handler: function(){
        console.log('Read all the notes')
    }
})

yargs.parse()



