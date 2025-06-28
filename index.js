const { AoiClient } = require("aoi.js");
const { Hamstersj } = require("hamster.sj");

const client = new AoiClient({
    token: "",
    prefix: "!",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

const hamster = new Hamstersj({ client:client });
hamster.functions();  

client.loadCommands("./commands");

client.status({
    name: "Boş Altyapı | Hamster.js",
    type: "Custom"
})

client.variables({
    ornek1: "degisken",
})

