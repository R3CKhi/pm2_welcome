module.exports = {
    apps: [
        {
            name: "Ses1",
            namespace: "reck",
            script: 'reck.js',
            watch: false,
            exec_mode: "cluster",
            max_memory_restart: "1G",
            cwd: "./Bots/Bot1",
            output: '../../../Logger/[1]out.log',
            error: '../../../Logger/[2]error.log',
            log: '../../../Logger/[3]combined.outerr.log'
        },
        {
            name: "Ses2",
            namespace: "reck",
            script: 'reck.js',
            watch: false,
            exec_mode: "cluster",
            max_memory_restart: "1G",
            cwd: "./Bots/Bot2",
            output: '../../../Logger/[1]out.log',
            error: '../../../Logger/[2]error.log',
            log: '../../../Logger/[3]combined.outerr.log'
        },
        {
            name: "Ses3",
            namespace: "reck",
            script: 'reck.js',
            watch: false,
            exec_mode: "cluster",
            max_memory_restart: "1G",
            cwd: "./Bots/Bot3",
            output: '../../../Logger/[1]out.log',
            error: '../../../Logger/[2]error.log',
            log: '../../../Logger/[3]combined.outerr.log'
        },/*
        {
            name: "Ses4",
            namespace: "reck",
            script: 'reck.js',
            watch: false,
            exec_mode: "cluster",
            max_memory_restart: "1G",
            cwd: "./Bots/Bot4",
            output: '../../../Logger/[1]out.log',
            error: '../../../Logger/[2]error.log',
            log: '../../../Logger/[3]combined.outerr.log'
        }*/
    ]
}