import axios from "axios";
import { useState, useEffect, createContext } from "react";


const NoticiasContext = createContext()


const NoticiasProvider =({children})=>{
    
    const[categoria, setCategoria]=useState('general')
    const[pagina, setPagina]=useState(1)
    const[noticias, setNoticias]=useState([])
    const[totalNoticias, setTotalNoticias]=useState(0)

    useEffect(()=>{
           const consultarApi = async ()=>{
            const url = `https://newsapi.org/v2/top-headlines?language=es&category=${categoria}&pageSize=100&apikey=${import.meta.env.VITE_API_KEY}`
            const url2 = `http://api.mediastack.com/v1/news?access_key=${import.meta.env.VITE_API2_KEY}&countries=es&categories=${categoria}`
            const {data} = await axios(url2)
            setNoticias(data.data) // para url2
            /* setNoticias(data.articles) */ // para url
            setTotalNoticias(data.pagination.total)
            setPagina(1)
        }

        consultarApi()

    },[categoria])

    useEffect(()=>{
        const consultarApi = async ()=>{
         const url = `https://newsapi.org/v2/top-headlines?language=es&category=${categoria}&pageSize=100&apikey=${import.meta.env.VITE_API_KEY}`
         const url2 = `http://api.mediastack.com/v1/news?access_key=${import.meta.env.VITE_API2_KEY}&countries=es&categories=${categoria}&offset=${pagina}`
         const {data} = await axios(url2)
         setNoticias(data.data) // para url2
         /* setNoticias(data.articles) */ // para url
         setTotalNoticias(data.pagination.total)
     }

     consultarApi()

 },[pagina])

    const handleChangeCategoria = e =>{
         setCategoria(e.target.value)
    }
    const handleChangePagina = (e, valor)=>{
        setPagina(valor)

    }
    return(

        <NoticiasContext.Provider value={{
            categoria,
            handleChangeCategoria,
            pagina,
            setPagina,
            noticias,
            totalNoticias,
            handleChangePagina

        }}>

          {children}  
        </NoticiasContext.Provider> 

    )
}

export {
    NoticiasProvider
}

export default NoticiasContext