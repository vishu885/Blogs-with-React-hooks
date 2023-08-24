import { firestore } from "../firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        firestore.collection('posts').get().then((snapshot)=>{
            const posts=snapshot.docs.map((doc)=>{
               // console.log('posts',doc.data());
                return{
                    
                    id:doc.id,
                    ...doc.data()
                }
            })
            console.log("posts",posts);
            setPosts(posts);
            posts.map((post,index)=>{
                console.log("index",index)
            })

        })
        
    },[]);


    return(
        <div className="home">
            <h1>Tech Blog</h1>
        <div id="blog-by">Vishva</div>
        
           { posts.map((post,index)=>(
            <div className="post" key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
            </Link>
            <p>{post.subTitle}</p>
            </div>
            ))}
            

        </div>
            
        
    );
}
export default Home;
