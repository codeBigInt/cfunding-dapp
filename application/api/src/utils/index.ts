const randomBytes = (length: number): Uint8Array => {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return bytes;
};

function pad(s: string, n: number): Uint8Array {
    const encoder = new TextEncoder();
    const utf8Bytes = encoder.encode(s);
    if (n < utf8Bytes.length) {
        throw new Error(`The padded length n must be at least ${utf8Bytes.length}`);
    }
    const paddedArray = new Uint8Array(n);
    paddedArray.set(utf8Bytes);
    return paddedArray;
}

function fromHex(hexString: string): Uint8Array {
    // Remove '0x' prefix if present
    const cleanHex = hexString.startsWith('0x') ? hexString.slice(2) : hexString;

    // Make sure the hex string has an even number of characters
    const paddedHex = cleanHex.length % 2 === 0 ? cleanHex : '0' + cleanHex;

    // Convert hex string to byte array
    const bytes = new Uint8Array(paddedHex.length / 2);
    for (let i = 0; i < paddedHex.length; i += 2) {
        bytes[i / 2] = parseInt(paddedHex.substr(i, 2), 16);
    }

    return bytes;
}

export const utils = {
    randomBytes,
    pad,
    fromHex
}

