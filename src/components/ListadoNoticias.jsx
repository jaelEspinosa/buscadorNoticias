import Grid  from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"
import '../App.css/'

const ListadoNoticias = () => {
const{noticias, totalNoticias,handleChangePagina,pagina}=useNoticias()
const totalPaginas = Math.ceil(totalNoticias/25)
  return (
    <>
        <Typography 
                 textAlign={'center'}
                 marginY={5}
                 variant={'h2'}
                 component={'h2'}
                 >
         Últimas Noticias
        </Typography>
        <div className="padding">
        <Stack 
             sx={{
              marginY:5
                      }}
              direction={'row'}
              justifyContent='center'
              alignItems={'center'} 
              spacing={2}>
     
              <Pagination page={pagina} count={totalPaginas} color="primary" onChange={handleChangePagina} />
              
   
       </Stack>
       </div>
        <Grid container
              spacing={2}
        >
          {noticias.map(noticia => (
            <Noticia
              key={noticia.url}
              noticia={noticia}
             />
          ))}  
        </Grid>
        <div className="padding">
        <Stack 
             sx={{
              marginY:5
                      }}
              direction={'row'}
              justifyContent='center'
              alignItems={'center'} 
              spacing={2}>
     
              <Pagination page={pagina} count={totalPaginas} color="primary" onChange={handleChangePagina} />
              
   
       </Stack>
       </div>
    </>
  )
}

export default ListadoNoticias