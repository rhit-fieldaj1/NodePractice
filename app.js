const chalk = require('chalk');
const success = chalk.green('success');
const failure = chalk.red.bold('failure');
console.log(success, ' and this is a', failure);

const yargs = require('yargs');
const notes = require('./notes.js');
const msg = getNotes();

const add = require('./utils.js');


const fs = require('fs');
const dataBuffer = fs.readFileSync('Playground/data.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name, data.city)



// console.log(msg)
// const greenMsg = chalk.green.bold(msg);
// console.log(greenMsg);
// console.log(process.argv);
// console.log(process.argv[2]);
const command = process.argv[2]

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv) {
        //console.log(`Title: ${argv.title}`  ),
        //console.log(`${argv.body}`)
        notes.addNote(argv.title,argv.body);
    }
    
})

yargs.command({
    command: 'remove',
    describe: 'removing a ndw note',
    handler: function() {
        console.log('Removing a new note')
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function(){
        console.log('Listing all notes')
    }
})

yargs.command ({
    command: 'read',
    describe: 'Reading your note',
    handler: function() {
        console.log('Readin a note')
    }
})


console.log(process.argv)
console.log(yargs.argv)
yargs.parse()

  
