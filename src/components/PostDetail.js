import { firestore } from "../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail(){
    const [post,setPost]=useState({});
    const {postid}=useParams();

    useEffect(()=>{
        firestore.collection('posts').doc(postid).get().then((snapshot)=>{
            console.log("Snapshot",snapshot.data());
            setPost(snapshot.data());
        }) 
    },[]);
    return(
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.Content}</p>
            
        </div>
    );
}
export default PostDetail;
