# os
[Ref](https://nodejs.org/dist/latest-v14.x/docs/api/os.html)
The os module provides operating system-related utility methods and properties. It can be accessed using:
```js
const os = require('os');
```

## How to call each data
- node yourapp.js -arch ----> shows architecture
Use `os.arch()`
- node yourapp.js -cpu ----> shows cpus
Use `os.cpus()`
- node yourapp.js -ram----> shows ram
Use `os.totalmem()` and `os.freemem()`
- node yourapp.js -hdd----> shows disk space
Instal [check-disk-space](https://www.npmjs.com/package/check-disk-space)
- node yourapp.js -hostname ----> shows hostname
Use `os.hostname()`
- node yourapp.js -ip ----> shows ip address
Use `os.networkInterfaces()`