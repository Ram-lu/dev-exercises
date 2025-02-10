const mqtt = require('mqtt');

const options = {
    host: 'localhost',
    port: 1883,
    protocol: 'mqtt',
    username: 'admin',
    password: 'secret'
}

const client = mqtt.connect(options);

const PRIORITIES = ['low', 'medium', 'high'];

client.on('connect', () => {
    console.log('🤖 Connected to RabbitMQ');
    sendRandomMessage();
})

const sendRandomMessage = () => {
    const priority = PRIORITIES[Math.floor(Math.random() * PRIORITIES.length)];
    const message = {
        timestamp: new Date().toISOString(),
        content: `Random message with priority ${priority}`
    };

    client.publish(`Notifications/${priority}`, JSON.stringify(message))
    console.log(`🤖 [${priority.toUpperCase()}] Enviado: ${message.content}`)

    setTimeout(sendRandomMessage, Math.random() * 2000 + 1000);
}

client.on('error', (error) => {
    console.error('❌ Error:', error);
});

