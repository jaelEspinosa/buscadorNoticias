import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Noticia = ({noticia}) => {
    
    const{image, description, source, url, title}=noticia
  return (
      <Grid item md={6} lg={4} >
        <Card>
           {image && (
            <>
            <CardMedia 
                component ='img'
                alt={`imagen de la noticia ${description}`}
                image = {image}
                height={'250'}
                />
            <CardContent>
                <Typography variant='body1' color='error'>
                    {source}
                </Typography>
                <Typography variant='h6' component='div'>
                    {title}
                </Typography>
                <Typography variant='body2'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link target='_blank'
                      href={url}
                      variant='button'
                      color={'error'}
                      textAlign={'center'}
                      width={'100%'}
                      sx={{
                        textDecoration:'none'
                      }}
                      >Leer Noticia</Link>
            </CardActions>
            </>)}
        </Card>
       </Grid>
  )
}

export default Noticia