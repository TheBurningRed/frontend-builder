const express = require('express');
const http = require('http');
const Git = require('simple-git');
const config = require('./deployconfig.json');
const child_process = require('child_process');

const enviorement = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const app = express();

app.set('port', process.env.PORT || 8080);

app.post('/deploy', (req, res) => {
    const projectDirPath = `${__dirname}/${config.workingDirPath}`;

    Git(projectDirPath).pull((err, update) => {
        if(update && update.summary.changes) {
            const command = enviorement === 'production'
                ? config.buildProductionCommand
                : config.buildTestCommand;

            child_process.exec(command, {cwd: projectDirPath}, (error, stdout, stderr) => {
                if (error) {
                    console.error(error);
                    return;
                }
                console.log(stdout);
                console.log(stderr);
            });
            res.send('Build started!');
        } else {
            res.send('Build is up to date!');
        }
    });
});



http.createServer(app).listen(app.get('port'), function(){
    console.log('Autodeploy server listening on port ' + app.get('port'));
});
