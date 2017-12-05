# git 

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

## TODO

 * unit test ? I would like to use jasmine and upload tess to another suitelet that generate a report that i can easily curl and parse. npm test should do this. could we put some credentials in travis an do CI on git push?
 * many files try to have a project with many files. try to upload all of them automatically. define() require in ss2 works ?
 * make a bundle: be possible to bundle many files into one? is this correct in ss2 ? 

## Some Technologies used

 * @hitc/netsuite-types for getting suitescript 2 typescript description files and recommmendations for compile with typescript
 * typescript : language and compiler to js
 * netsuite-uploader-utilfor synch files in ns

 