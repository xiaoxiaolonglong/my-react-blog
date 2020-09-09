import axios from "axios";

const IP = "http://127.0.0.1"
const PORT = "8000"

export default {
    get(url){
        url = IP + ':' + PORT + url;
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