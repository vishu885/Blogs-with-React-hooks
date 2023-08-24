//import { useState } from "react";
import {firestore} from "../firebase";
import { useFormInput } from "./customHook";

// function CreatePost(){
// const [title,setTitle]=useState('title');
// const [subtitle,setSubTitle]=useState('');
// const [Content,setContent]=useState('');


// function handleSubmit(e){
//     e.preventDefault(); // to prevent page from loading automatically whn form is submitted
//     console.log("Form submitted",title);  
    
//     firestore.collection("posts").add({
//         title,
//         subtitle,
//         Content,
//         createdAt: new Date()
//     })
// }

//     return(
//         <div className="create-post">
//             <h1>CREATE POST</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-field">
//                     <label>Title</label>
//                     <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
//                 </div>

//                 <div className="form-field">
//                     <label>Sub Title</label>
//                     <input value={subtitle} onChange={(e)=>setSubTitle(e.target.value)} />
//                 </div>

//                 <div className="form-field">
//                     <label>Content</label>
//                     <textarea value={Content} onChange={(e)=>setContent(e.target.value)}></textarea>
//                 </div>

//                 <button className="create-post-btn">CreatePost</button>
//             </form>
            
//         </div>
//     );
// }
// export default CreatePost;


//using custom Hooks

function CreatePost(){
    const title=useFormInput('tt');
    const subtitle=useFormInput('st');
    const Content=useFormInput('');
    
    
    function handleSubmit(e){
        e.preventDefault(); // to prevent page from loading automatically whn form is submitted
        console.log("Form submitted",title);  
        
        firestore.collection("posts").add({
            title:title.value,
            subtitle:subtitle.value,
            Content:Content.value,
            createdAt: new Date()
        })
    }
    
        return(
            <div className="create-post">
                <h1>CREATE POST</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label>Title</label>
                        <input {...title}/>
                    </div>
    
                    <div className="form-field">
                        <label>Sub Title</label>
                        <input {...subtitle} />
                    </div>
    
                    <div className="form-field">
                        <label>Content</label>
                        <textarea {...Content}></textarea>
                    </div>
    
                    <button className="create-post-btn">CreatePost</button>
                </form>
                
            </div>
        );
    }
    export default CreatePost;
