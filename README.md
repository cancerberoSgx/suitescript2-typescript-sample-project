# Writing SuiteScript 2.0 with TypeScript 

## Install

```
 $ npm install
```

## Start developing

Your suitelet typescript source is src/test2.ts

Run developer tools with command: 

```
 $ gulp
```

This command watch your .ts files and when they change it compile them. After this it try to download to file cabinet. 

For this last task to work you need to make sure you pupt your account and folders in gulpfile.js (TODO: inquire and save)

## Some Technologies used

 * @hitc/netsuite-types for getting suitescript 2 typescript description files and recommmendations for compile with typescript
 * typescript : language and compiler to js
 * netsuite-uploader-utilfor synch files in ns
 

 