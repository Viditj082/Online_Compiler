
import fs from 'fs';
import { execSync } from 'child_process'
import bodyParser from 'body-parser';
import {v4 as uuid} from 'uuid';

export const cppController=(req,res)=>{
  
    const inputs=req.body.input;
    const code=req.body.code;

    // file generation

    const fileName=uuid();

    try {
        fs.writeFileSync(`${fileName}.cpp`,code);
        console.log(`A C++ File was created successfully.`);
        } catch (error) {
        console.error('Error creating the file:', error);
        res.statusCode = 500;
        res.end('Error creating the file.');
      }
    
    // File execution

    try 
      {
        console.log(process.cwd());
        execSync(`g++ -o ${fileName} ${fileName}.cpp`);                       // generating executable file for the code
        const result= execSync(`${fileName}.exe`,{input:inputs});      // executing .exe file 
        console.log(result)
        res.send(result)
      } catch (error) 
      {
        res.send('Some error occured!! '+error.toString())
      }

      // file deletion(.cpp)

      console.log(`DELETING ${fileName}.cpp ..`);
      fs.unlink(`${fileName}.cpp`, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully.');
        }
      });
      
      // .exe file deletion

      fs.unlink(`${fileName}.exe`, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully.');
        }
      });

}


export const  JavaController=(req,res)=>{
    const inputs=req.body.input;
  const code=req.body.code;

  const fileName=uuid();

  // file generation

  try {
      
      fs.writeFileSync(`test.java`,code);
      console.log(`File test.java created successfully.`);
    } catch (error) {
      console.error('Error creating the file:', error);
      res.statusCode = 500;
      res.end('Error creating the file.');
    }
  
  // File execution

  try {
      execSync(`javac test.java`);                       // generating executable file for the code
      const result=execSync(`java test`,{input:inputs});  // executing .exe file 
      console.log(result)
      res.send(result)
    } catch (error) {
      // res.send('Some error occured!!')
      res.send('Some error occured!! '+error.toString())
    }

    fs.unlink(`test.java`, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        console.log('File deleted successfully.');
      }
    });
   

    // Why is test.class being generated??
    
    fs.unlink(`test.class`, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        console.log('File deleted successfully.');
      }
    });

}

export const pythonController=(req,res)=>{
    
  const inputs=req.body.input;
  const code=req.body.code;
  const fileName=uuid();

  // file generation

  try {
      
      fs.writeFileSync(`${fileName}.py`,code);
      console.log(`File test.py created successfully.`);
    } catch (error) {
      console.error('Error creating the file:', error);
      res.statusCode = 500;
      res.end('Error creating the file.');
    }
  
  // File execution

  try {
     // generating executable file for the code
      const result= execSync(`python ${fileName}.py`,{input:inputs});  // executing .exe file 
      console.log(result)
      res.send(result)
    } catch (error) {
      // res.send('Some error occured!!')
      res.send('Some error occured!! '+error.toString())
    }

    fs.unlink(`${fileName}.py`, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        console.log('File deleted successfully.');
      }
    });

}

export const jsController=(req,res)=>{
    const inputs=req.body.input;
    const code=req.body.code;
   
    const fileName=uuid();

    // file generation
  
    try {
        
        fs.writeFileSync(`${fileName}.js`,code);
        console.log(`File test.js created successfully.`);
      } catch (error) {
        console.error('Error creating the file:', error);
        res.statusCode = 500;
        res.end('Error creating the file.');
      }
    
    // File execution
  
    try {
         // generating executable file for the code
        const result= execSync(`node ${fileName}.js`,{input:inputs});  // executing .exe file 
        console.log(result)
        res.send(result)
      } catch (error) {
        // res.send('Some error occured!!')
        res.send('Some error occured!! '+error.toString())
      }

      fs.unlink(`${fileName}.js`, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully.');
        }
      });
  
}

