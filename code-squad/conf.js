/**
 * @file => conf.js
 */

 exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
     capabilities: {
         browserName: 'firefox', 
     },
     //baseUrl: 'https://angular.io',




    //Rodar testes simultaneamente em vários browsers
    // multiCapabilities:[
    //     {
    //         browserName: 'chrome'
    //     },
    //     {
    //         browserName: 'firefox'
    //     }
    // ], 
     
    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000
    },
    
}

