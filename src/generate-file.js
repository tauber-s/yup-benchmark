import fs from 'fs';
import path from 'path';

export const generateFile = (fileName, content) => {
    fs.writeFileSync(path.join(path.resolve('./data'), fileName), content, 'utf8', (err) => {
      if(err) console.log('Error on create file:\n' + err);
    });

    console.log('File successfully created!');
};
