import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

class Module {
    constructor(hi){
        this.hi = hi;

    }
sayHi(){
    return this.hi;
    }
}

module.exports = Module; // how to export module

const mod = new Module("hi");  // how to import module
mod.sayHi(); // how to use module once you import it