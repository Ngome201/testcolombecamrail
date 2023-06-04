import * as fs from 'fs'

export const readCommandUrl=()=>{
    const commandUrl = fs.readFileSync('./backendUrls/commandUrl.txt', 'utf-8');
    return commandUrl;
}
export const readUserUrl=()=>{
    const userUrl = fs.readFileSync('./backendUrls/userUrl.txt', 'utf-8');
    return userUrl;
  }