import React,{useState,useRef,useMemo} from 'react';
import Counter from './component/Counter';
import InputValue from './component/InputValue';
import TableHeader from './component/TableHeader';
import TableItem from './component/TableItem';
import TableList from './component/TableList';
import ToogleBtn from './component/ToogleBtn';
import MyInput from './component/UI/input/MyInput';
import MyButton from './component/UI/button/MyButton';
import './style/style.css';
import PostForm from './component/PostForm';
import MySelect from './component/UI/select/MySelect';

function App() {


  const [posts,setPosts]=useState([
    {id:1,title:'Javascript',stack:"MERN Stack"},
    {id:2,title:'Java',stack:"Spring"},
    {id:3,title:'Python',stack:"Cyber"},
    {id:4,title:'Php',stack:"MERN Stack"},
    {id:5,title:'Django',stack:"Backend"},
    ])//Massiv(Array bilan shunaqa yuboriladi)
  
    const [select,setSelect]=useState("")
    const [search,setSearch]=useState("")
    // const [title,setTitle]=useState('');
    // const [stack,setStack]=useState('');
    const SortedPosts=useMemo(()=>{
      console.log('render')
      if(select){

        return [...posts].sort((a,b)=>a[select].localeCompare(b[select]))
     
      }
      return posts;
    } ,[select,posts])

    // const sortedPosts=getSortedPosts();
   const createPost=(newPost)=>{
     setPosts([...posts,newPost])
   }

   const removePost=(post)=>{
     setPosts(posts.filter(s=>s.id !==post.id))
   }
  //  setPost([...post,{...post,id:Date.now()}]);
   const sortPost=(sort)=>{
     setSelect(sort)
    //  setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  
     
    console.log(sort);
   }

   const sortedAndSearch=useMemo(()=>{
      return SortedPosts.filter(post=>post.title.toLowerCase().includes(search.toLowerCase()))
   },[search,SortedPosts])
// const inputRef=useRef()
    return (
    
     <div className='app w-50 mx-auto'>

      <PostForm createPost={createPost}/>
      <div className="d-flex justify-content-between my-2">
        <MyInput
        className="form-control"
        placeholder="Search..."
        value={search}
        onChange={e=>setSearch(e.target.value)}
        />
     <MySelect 
     value={select}
     onChange={sortPost}
     defaultValue="Sorted by"
     options={[
       {value:"title",name:"Programming"},
       {value:"stack",name:"Jobs"}

     ]}
     />
</div>
        {posts.length
        ? <TableList remove={removePost} posts={sortedAndSearch } title="Programming language"/>
      : <h1 className='my-3 ts-5 text-center text-danger '>You should add some Post</h1>}
      
       {/* <TableList remove={removePost} posts={posts} title="Free Courses"/> */}
     </div>
   
  );
}

export default App;
