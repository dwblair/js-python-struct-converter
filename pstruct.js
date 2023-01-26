const struct = require('python-struct');

struct.sizeOf('>iixxQ10sb'); // --> 29

struct.pack('>iixxQ10sb', [1234, 5678, require('long').fromString('12345678901234567890'), 'abcdefg', true]); // --> <Buffer 00 00 04 d2 00 00 16 2e 00 00 ab 54 a9 8c eb 1f 0a d2 61 62 63 64 65 66 67 00 00 00 01>

function hexStringToByteArray(hexString) {
    if (hexString.length % 2 !== 0) {
        throw "Must have an even number of hex digits to convert to bytes";
    }
    var numBytes = hexString.length / 2;
    var byteArray = new Uint8Array(numBytes);
    for (var i=0; i<numBytes; i++) {
        byteArray[i] = parseInt(hexString.substr(i*2, 2), 16);
    }
    return byteArray;
}

function hexToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

var data = Buffer.from("982f854090673f43bc35bb410028cf4188577d44646ccf41", "hex");

//var data = hexStringToByteArray('982f854090673f43bc35bb410028cf4188577d44646ccf41')
console.log(data)

//var data = hexToBytes('982f854090673f43bc35bb410028cf4188577d44646ccf41')

var result = struct.unpack('>ffffff', data); // --> [ 1234, 5678, 12345678901234567890, 'abcdefg', 1 ]

console.log(result)
