class GBXBaseFetcher {
    constructor() {
        this._gbxdata = null;
        this._gbxlen = 0;
        this._gbxptr = 0;
    }

    loadGBXdata(filename) {
        try {
            const fileContent = fs.readFileSync(filename);
            if (fileContent) {
                this.storeGBXdata(fileContent);
            } else {
                throw new Error(`Unable to read GBX data from ${filename}`);
            }
        } catch (err) {
            console.log('error', 1);
        }
    }
    storeGBXdata(gbxdata) {
        this._gbxdata = gbxdata;
        this._gbxlen = gbxdata.length;
        this._gbxptr = 0;
        if (this._gbxlen > 0) {
            console.log(`GBX data length: ${this._gbxlen}`);
        }
    }
}