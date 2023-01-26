console.log('hello')
import struct from "../struct.mjs";

function toArrayBuffer(buf) {
    const ab = new ArrayBuffer(buf.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}

//let s = struct("<10sHHb")
let s = struct("<6f")
//let record = s.pack("Raymond   ", 4658, 264, 8)
//let record = '982f854090673f43bc35bb410028cf4188577d44646ccf41'.match(/(..)/g).map(b => parseInt(b, 16))
let record = toArrayBuffer(Buffer.from("982f854090673f43bc35bb410028cf4188577d44646ccf41", "hex"));
let results = s.unpack(record)
console.log(results)

