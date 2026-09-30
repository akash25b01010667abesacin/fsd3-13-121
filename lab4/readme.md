# Express
1. Create project folder
2. goto project and open terminal
3. execute 'npm init -y'
4. installl 'npm i nodemon -D'
5. install npm i express
5. open package.json
   a. change 'type:'module''
   b. update script {
    "start":"node prg1.js"
    "dev":"nodemon prg1.js"
   }
6. create prg1.js in folder
7. add folderName/node_module in .gitignore
send function used to return back content to the client it may be html,json,html file,plAIN TEXT
we can also add status code with status function it cna be change with send function

## map
these function is use to iterate any array it must return new array
```
array.map(item)=>{
   return
}
array
```
in 1 syntax we have to used explicit return keyboard where as in syntax 2 is not required
exclude no of property from any json object

to search any item json array we use find method it will return on unsuccessful or object on successfull 
