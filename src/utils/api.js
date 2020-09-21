import axios from "axios";

let IP = ''
let PORT = ''
// 运行环境判断
if (process.env.NODE_ENV == "development") {
    // 开发环境
    IP = "http://127.0.0.1"
    PORT = ":8000"
  }else{
    //生产环境
    IP = ""
    PORT = ""
  }

export default {
    get(url){
        url = IP + PORT + url;
        const p = new Promise(
            (resolve, reject)=>{
                axios.get(url)
                    .then((response) => {
                        resolve(response)
                    })
                    .catch(function(error) {
                        reject(error);
                    }); 
            }
        );
        return p;
    },
    post(){

    }
}