import  {FormControl, InputLabel, Select, MenuItem, Button, Box} from '@mui/material'
import { CATEGORIAS } from '../Constants'
import  useNoticias from '../hooks/useNoticias'

const Formulario = () => {
    const { categoria, handleChangeCategoria } = useNoticias()   
   
    return (
        <>
    <form>
        <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select 
                  label= 'Categoria'
                  onChange={handleChangeCategoria}
                  value={categoria}
                  >
             {CATEGORIAS.map(categoria => (
                <MenuItem key={categoria.value} value={categoria.value}>
                    {categoria.label}
                </MenuItem>
            ))}

            </Select>
          
         
        </FormControl>
       
        
    </form>
       
</>
  )
}

export default Formulario