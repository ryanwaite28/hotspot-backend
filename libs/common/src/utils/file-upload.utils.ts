import { IStoreImage, IUploadFile } from '../interfaces/request-constructs.interface';
import { uniqueValue } from '../utils/common.utils';
import { base64Regex } from '../utils/constants.utils';
import * as fs from 'fs';



export function upload_file(file: any): Promise<IUploadFile> {
  return new Promise((resolve, reject) => {
    if (!file) {
      return reject({error: true, filename: undefined, image_path: undefined, message: 'no file given...'});
    }
    const unique_filename = uniqueValue();
    const filename = unique_filename + (<string> file.name);
    const image_path = __dirname + '/' + filename;
    file.mv(filename, (error: any) => {
      if (error) {
        return reject({error: true, filename: undefined, image_path: undefined, message: 'could not upload file...'});
      } else {
        return resolve({ error: false, filename, image_path, message: undefined });
      }
    });
  });
}

export function decodeBase64Image(dataString: string) {
  const matches = dataString.match(base64Regex);
  const results: { image_type: string, image_data: Buffer } = {
    image_data: Buffer.from(''),
    image_type: '',
  };

  if (!matches || matches.length !== 3) {
    throw new Error('Invalid base64 input string');
  }

  results.image_type = matches[1];
  results.image_data = Buffer.from(matches[2], 'base64');

  if (!results.image_type || !results.image_data) {
    throw new Error(`Could not parse base64 string`);
  }

  return results;
}

export function upload_base64(base64_image: string): Promise<IUploadFile> {
  return new Promise((resolve, reject) => {
    try {
      if (!base64_image) {
        return reject({error: true, filename: undefined, image_path: undefined, message: 'no base64_image given...'});
      }
  
      const imageBuffer = decodeBase64Image(base64_image);
      const filetype = imageBuffer.image_type.split(`/`)[1];
      const filename = `${Date.now()}.${filetype}`;
      const image_path = __dirname + '/' + filename;
      console.log(`upload_base64:`, { filename, filetype, image_path });
      const writeOp = fs.writeFileSync(image_path, imageBuffer.image_data);
      console.log(`successfully uploaded base64`);
      return resolve({ error: false, filename, image_path, message: undefined });
    }
    catch (e) {
      console.log(`upload_base64 error:`, e);
      return reject({ error: true, filename: undefined, image_path: undefined, message: 'could not upload file...' });
    }
  });
}