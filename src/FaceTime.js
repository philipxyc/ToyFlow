import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const AgoraRTC = window.AgoraRTC;
const appId = "747c8622435a4a97b32a518b935b9332";

export default class FaceTime extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            subscribers: [],
            streamQueue: []
        }

        this.client = undefined;
        this.localStream = undefined;
        this.channel = "1000";

        if(!AgoraRTC.checkSystemRequirements()) {
            alert("Your browser does not support WebRTC!");
            return;
        }

        let device = this.getDevices();
        if(device.videoInputs) this.camera = device.videoInputs[0];
        if(device.audioInputs) this.microphone = device.audioInputs[0];
    }

    getDevices()
    {
        let audioInputs = [], videoInputs = [];
        AgoraRTC.getDevices((devices) => {
            for (var i = 0; i !== devices.length; ++i) {
                let device = devices[i];
                let option = { text: "", id: device.deviceId };
                if (device.kind === 'audioinput') {
                    option.text = device.label || 'microphone ' + (audioInputs.length + 1);
                    audioInputs.push(option);
                } else if (device.kind === 'videoinput') {
                    option.text = device.label || 'camera ' + (videoInputs.length + 1);
                    videoInputs.push(option);
                } else {
                    console.log('Some other kind of source/device: ', device);
                }
            }
        });
        return { "audioInputs": audioInputs, "videoInputs": videoInputs };
    }

    componentDidMount() {

        let channel_key = null;

        console.log("Init AgoraRTC client with App ID: " + appId);
        this.client = AgoraRTC.createClient({ mode: 'interop' });
        this.client.init(appId, () => {
            console.log("AgoraRTC client initialized");
            this.client.join(channel_key, this.channel, null
                , (uid) => {
                    console.log("User " + uid + " join channel successfully");

                    this.localStream = AgoraRTC.createStream({
                        streamID: uid
                        , audio: true
                        , cameraId: this.camera
                        , microphoneId: this.microphone
                        , video: true
                        , screen: false
                    });
                    //localStream = AgoraRTC.createStream({streamID: uid, audio: false, cameraId: camera, microphoneId: microphone, video: false, screen: true, extensionId: 'minllpmhdgpndnkomcoccfekfegnlikg'});
                    this.localStream.setVideoProfile('720p_3');

                    // The user has granted access to the camera and mic.
                    this.localStream.on("accessAllowed", () => {
                        console.log("accessAllowed");
                    });

                    // The user has denied access to the camera and mic.
                    this.localStream.on("accessDenied", () => {
                        console.log("accessDenied");
                    });

                    this.localStream.init(
                        () => {
                            console.log("getUserMedia successfully");
                            this.localStream.play('agora_local');

                            this.client.publish(this.localStream, (err) => {
                                console.log("Publish local stream error: " + err);
                            });

                            this.client.on('stream-published', (evt) => {
                                console.log("Publish local stream successfully");
                            });
                        }, (err) => {
                            console.log("getUserMedia failed", err);
                        }
                    );

                }, (err) => {
                    console.log("Join channel failed", err);
                }
            );
        }, (err) => {
            console.log("AgoraRTC client init failed", err);
        });

        // channel_key = "";
        // this.client.on('error', (err) => {
        //     console.log("Got error msg:", err.reason);
        //     if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
        //         this.client.renewChannelKey(channel_key, () => {
        //             console.log("Renew channel key successfully");
        //         }, (err) => {
        //             console.log("Renew channel key failed: ", err);
        //         });
        //     }
        // });

        this.client.on('stream-added', (evt) => {
            let stream = evt.stream;
            console.log("New stream added: " + stream.getId());
            console.log("Subscribe ", stream);
            this.client.subscribe(stream, (err) => {
                console.log("Subscribe stream failed", err);
            });
        });

        this.client.on('stream-subscribed', (evt) => {
            const stream = evt.stream;
            console.log("Subscribe remote stream successfully: " + stream.getId());
            const { streamQueue ,subscribers} = this.state;
            streamQueue.push(stream);
            subscribers.push({id:stream.getId()});
            this.setState({
                streamQueue,
                subscribers
            });

            // setTimeout(()=>{
            //     debugger;
            //     stream.play('agora_remote' + stream.getId());
            // },6000)


            // if ($('div#video #agora_remote'+stream.getId()).length === 0) {
            // $('div#video').append('<div id="agora_remote'+stream.getId()+'" style="float:left; width:810px;height:607px;display:inline-block;"></div>');
            // }
            // stream.play('agora_remote' + stream.getId());
        });

        this.client.on('stream-removed', (evt) => {
            const stream = evt.stream;
            stream.stop();
            // $('#agora_remote' + stream.getId()).remove();
            console.log("Remote stream is removed " + stream.getId());
        });

        this.client.on('peer-leave', (evt) => {
            const stream = evt.stream;
            if (stream) {
                const { streamQueue ,subscribers } = this.state;
                streamQueue.splice(streamQueue.indexOf(stream), 1);
                for(let i = 0; i < subscribers.length; i++){
                    let x = subscribers[i];
                    if(x.id == stream.getId()){
                        subscribers.splice(i, 1);
                        break;
                    }
                }

                stream.stop();
                // $('#agora_remote' + stream.getId()).remove();
                console.log(evt.uid + " leaved from this channel");
            }
        });
    }


    renderGrids() {
        console.log("renderGrids:=>",this.state.subscribers);
        const { subscribers } = this.state;
        // return subscribers.map(k => <div key={k.id} id={"agora_remote" + k.id} style={{ float:"left", width:"200px", height:"200px", display:"inline-block" }}></div>);

            return (
                <div>
                    <div id = "agora_local" style={{position:"fixed", right:0, bottom:60, width:"200px", height:"200px", display:"inline-block"}}></div>
                    <GridList>
                        {subscribers.map(k => (
                            <GridListTile>
                                <div key={k.id} id={"agora_remote" + k.id} style={{ width:"200px", height:"200px", display:"inline-block"}}></div>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            );

    }

	render() {
		return (
            <div style = {{margin:"0 auto"}}>
                {this.renderGrids()}
            </div>
        );
	}

    componentDidUpdate() {
        const { streamQueue } = this.state;

        // console.log("11",streamQueue);
        streamQueue.forEach(k => k.play('agora_remote' + k.getId()));
        streamQueue.splice(0);
    }

}
