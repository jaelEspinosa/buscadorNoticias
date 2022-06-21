import {Container, Grid, Typography }from '@mui/material'

import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'
import { NoticiasProvider } from './context/NoticiasProvider'
import './App.css'
function App() {
  

  return (
   <NoticiasProvider>
            <Container sx={{
              backgroundColor:'lightgray'
            }}>
              
                <header>
                  <Typography 
                        align ='center' 
                        variant = 'h2' 
                        component = 'h2' 
                        paddingY={'15'}
                        sx={{
                          fontWeight:'bold'
                          }}>

                    Buscador de Noticias

                  </Typography>
                </header>
                <Grid 
                  container
                  direction ='row'
                  justifyContent='center'
                  alignContent='center'
                >
                    <Grid item xs={12} md={8}  lg={5} >
                      <Formulario />
                      
                    </Grid>
                  
                </Grid>
                      
                <ListadoNoticias />
                      
            </Container>
   </NoticiasProvider>
  )
}

export default App
