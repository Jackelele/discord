const settings = { fakeMute: false, fakeDeafen: false };

const socket = webpackChunkdiscord_app.push([
    [Math.floor(Math.random() * 10000).toString(16)],
    {},
    (req) =>
        Object.values(req.c)
            .find((x) => x?.exports?.Z?.getSocket)
            .exports.Z.getSocket(),
]);

const originalvsu = socket.voiceStateUpdate.bind(socket);

socket.voiceStateUpdate = (state) =>
    originalvsu({
        ...state,
        selfMute: state.selfMute || settings.fakeMute,
        selfDeaf: state.selfDeaf || settings.fakeDeafen,
    });

// probs doesn't work tbh