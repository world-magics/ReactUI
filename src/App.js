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
import FIlterAndSearch from './component/FIlterAndSearch';
import MyModal from './component/UI/modal/MyModal';

function App() {


  const [posts,setPosts]=useState([
    {id:1,title:'Javascript',stack:"MERN Stack"},
    {id:2,title:'Java',stack:"Spring"},
    {id:3,title:'Python',stack:"Cyber"},
    {id:4,title:'Php',stack:"MERN Stack"},
    {id:5,title:'Django',stack:"Backend"},
    {id:1,title:'Javascript',stack:"MERN Stack"},
    {id:2,title:'Java',stack:"Spring"},
    {id:3,title:'Python',stack:"Cyber"},
    {id:4,title:'Php',stack:"MERN Stack"},
    {id:5,title:'Django',stack:"Backend"},
    {id:1,title:'Javascript',stack:"MERN Stack"},
    {id:2,title:'Java',stack:"Spring"},
    {id:3,title:'Python',stack:"Cyber"},
    {id:4,title:'Php',stack:"MERN Stack"},
    {id:5,title:'Django',stack:"Backend"},
    ])//Massiv(Array bilan shunaqa yuboriladi)
  
    const [select,setSelect]=useState("")
    const [search,setSearch]=useState("")

    const [filter,setFilter]=useState({sort:"",query:""})
    const [modal,setModal]=useState(false);

     
    // const [title,setTitle]=useState('');
    // const [stack,setStack]=useState('');
    const SortedPosts=useMemo(()=>{
      console.log('render')
      if(filter.sort){

        return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
     
      }
      return posts;
    } ,[filter.sort,posts])

    // const sortedPosts=getSortedPosts();
   const createPost=(newPost)=>{
     setPosts([...posts,newPost])
   }

   const removePost=(post)=>{
     setPosts(posts.filter(s=>s.id !==post.id))
   }
  //  setPost([...post,{...post,id:Date.now()}]);
  //  const sortPost=(sort)=>{
  //    setSelect(sort)
  //   //  setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  
     
  //   console.log(sort);
  //  }

   const sortedAndSearch=useMemo(()=>{
      return SortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()))
   },[filter.query,SortedPosts])
// const inputRef=useRef()
    return (
    
     <div className='app w-50 mx-auto'>
      <button>Add Posts</button>
      <MyModal modal={modal} setModal={setModal}>
      <PostForm createPost={createPost}/>
      </MyModal>
     
      <FIlterAndSearch filter={filter} setFilter={setFilter}/>
    
      <TableList remove={removePost} posts={sortedAndSearch } title="Programming language"/>
     
      
       {/* <TableList remove={removePost} posts={posts} title="Free Courses"/> */}
     </div>
   
  );
}

export default App;
