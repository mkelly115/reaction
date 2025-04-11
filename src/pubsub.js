import PubNub from "pubnub";
import pubnubConfig from './pubnub.config.json'

const pubnub = new PubNub(pubnubConfig);

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';


pubnub.subscribe({channels: [MESSAGE_CHANNEL]});

pubnub.addListener({
    message: messageObject => {
        console.log('mesageObject', messageObject);

    }
});

setTimeout(() => {
    pubnub.publish({
        message: 'foo',
        channel: MESSAGE_CHANNEL
    });
}, 1000);

