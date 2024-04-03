import axios from "axios";


export async function IWannaComunicate(name, phone, type){
    if(!name || !phone){
        console.log('No puedes dejar los campos vacios');
        return false;
    }else{
        let body = {
            nameUser: name,
            phoneUser: phone,
            userCase: type ? type : null
        }
        let send = await axios.post('/c/post/new', body)
        .then(res => {
            console.log(res);
            return res;
        })
        .then(data => {
            if(data.status == 201){
                return 201
            }else if(data.status == 200){
                return 200
            }
        })
        .catch(err => {
            console.log(err);
            return false;
        })

        return send
    }
}

export async function IWannaSubscribe(email){
    if(!email){
        console.log('No puedes dejar los campos vacios');
        return false;
    }else{
        let body = {
            email
        }
        const send = await axios.post('/blog/subscribe/post/new', body)
        .then((res) => {
            console.log(res.status);
            if(res.status == 200){
                return 200
            }else if(res.status == 201){
                return 201
            }
        })
        .catch(err => {
            console.log(err);
            return false;
        })
        return send;
    }
}