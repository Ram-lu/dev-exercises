const mqtt = require('mqtt');
const fs = require('fs');
const path = require('path');

const options = {
    host: 'localhost',
    port: 1883,
    protocol: 'mqtt',
    username: 'admin',
    password: 'secret'
}

const client = mqtt.connect(options);

const FILE_PATHS = {
    low: path.join(__dirname, './logs/low-priority.txt'),
    medium: path.join(__dirname, './logs/medium-priority.txt'),
    high: path.join(__dirname, './logs/high-priority.txt')
}

client.on('connect', () => {
    console.log('🤖 Connected to RabbitMQ');
    client.subscribe('Notifications/#', error => {if (error) console.log('❌ Error:', error)}
    );
})

client.on('message', (topic, message) => {
    try {
        const priority = topic.split('/')[1];
        const data = JSON.parse(message);

        const logEntry = `[${data.timestamp}]: ${data.content}\n`;

        fs.appendFile(FILE_PATHS[priority], logEntry, error => {
            if (error) {console.log('❌ Error:', error)}
            else {console.log(`🤖 [${priority.toUpperCase()}] Log registrated: ${data.content}`)};
        });

    } catch (error) {
        console.error('❌ Error:', error);
    }
})

client.on('error', (error) => {
    console.error('❌ Error:', error);
});