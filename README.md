# DAQ Webserver
* Webserver pilot for CMR 20e's DAQ system
* Runs a NodeJS Server to show racing data in a simple user interface
* See live webpage at [cmr.daq.com.ar](http://cmr.daq.com.ar)

# Instructions
## Branch Usage
Branches are used as follows:
* 'master'  - main branch, stable development of the webserver
* 'release' - branch used to publish to AWS Webserver
* other branches can be made as needed to test development of subsystems

## Instructions
### Build Steps
1. Download the zip file or clone the repository

2. Open a terminal in the top-level directory of the repository

3. Build the NodeJS Dependencies
```bash
sh aws_scripts/build_dependencies.sh
```

4. Run the NodeJS Server
```bash
sh source/run_local.sh
```
The server runs on port 3000. You can access it by going to [localhost:3000](localhost:3000) in a web browser while it is running.

5. Stop the server with ```Ctrl+C```

6. You can see server logs by opening the file ```source/info.log``` using a text editor of your choice.
These work in terminal, but a GUI will be better (the file is in plain text):
```bash
nano source/info.log
vim source/info.log
```

7. If you want to see logs in real time, you can:

   A.  Open another terminal window to the same directory and run  
   ```bash  
   tail -f source/info.log  
   ```  

   B.  Run the following command instead of ```source/run_local.sh```  
   ```bash  
   node source/index.js  
   ```  

### Deploying
The master branch contains the most up-to-date code for the webserver.
When ready to deploy to the AWS Server (be absolutely sure), merge release with master.
A webhook exists on AWS that will automatically pull the changes and deploy them to the webserver.
This process takes about five minutes.