module.exports = function (RED) {
    function envNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function (msg) {
            try {
                if (msg.env && typeof msg.env == "object") {
                    var env = msg.env;
                    Object.keys(env).forEach(function (key) {
                        process.env[key] = env[key];
                    });
                } 
                node.send(msg);
            } catch(e) {
                node.error(e);
            }
        });
    }
    RED.nodes.registerType('nd-set-env', envNode);
};