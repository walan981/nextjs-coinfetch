//we are importing whatever username that is written directly on the browser link
// Ex: http://localhost:3000/profile/alan
import {useRouter} from 'next/router'  //creating a dynamic route

const Profile=()=>{
    const router = useRouter()
    const {username} = router.query
    return(
       
        <div><h1>Hello {username}!</h1></div>
    )
};

export default Profile;