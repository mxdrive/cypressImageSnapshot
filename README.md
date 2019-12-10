**Description**

This is a simple project that demonstrates Cypress Image Snapshot integration to Cypress

**Howto**

1. Clone project
2. Run _npm install_ inside project root directory:

    `npm install`
    
3. Open `.\cypress\integration\example.js` file
4. Pay attention to the `.matchImageSnapshot` method
5. Run `example.js` test:

    `.\node_modules\.bin\cypress run`
    
6. Check `.\cypress\snapshots\example.js` directory to be sure that Cypress Image Snapshot works properly despite of it's method is marked as _unresolved_