//PRACTICA 3 JORGE BEJARANO SOLER

//CREAMOS UNA API CON EXPRESS
import express, { Request, Response } from "npm:express@4.18.2"

const app = express()

app.use(express.json())

//CREAR OBJETO DISCO 
type Disco = {
    nombre: string,
    autor: string,
    formato: string,
    matriz?: string,
    pais: string,
    artePortada: string,
    id: number
}

//CREAR ARRAY DE DISCOS
let discos: Disco[] = []

//--------METODOS GET--------

//MOSTAR TODOS LOS DISCOS 
app.get("/mostrar", (req: Request, res: Response) => {

  res.send(JSON.stringify(discos))

})

//MOSTRAR DISCOS POR ID
.get("/mostrar/id/:id", (req: Request, res: Response) => {
    
    const idBuscado = req.params.id

    const discosEncontrados = discos.filter((elem) => {
        return elem.id.toString().includes(idBuscado)
    })
        res.json(discosEncontrados)
})



// MOSTRAR DISCOS POR NOMBRE
.get("/mostrar/nombre/:nombre", (req: Request, res: Response) => {

    const nombreBuscado = req.params.nombre

    const discosEncontrados = discos.filter((elem) => {
        return elem.nombre.includes(nombreBuscado)
    })
        res.json(discosEncontrados)
})


//--------METODO POST--------
///disco/manolo/paco/vinilo/ninguna/es/moderno/4
.post("/disco/:nombre/:autor/:formato/:matriz/:pais/:artePortada/:id", (req: Request, res: Response) => {
  
  const disco: Disco = {
      nombre: req.params.nombre,
      autor: req.params.autor,
      formato: req.params.formato,
      matriz: req.params.matriz,
      pais: req.params.pais,
      artePortada: req.params.artePortada,
      id: req.params.id
  }

  discos.push(disco)
  res.send(disco)

})

//--------METODO PUT--------
.put("/modificar/id/:id", (req: Request, res: Response) => {
  
  const idModificado = req.params.id

  const discoModificado = discos.find((elem) => {
    return elem.id === idModificado
  })

  if (discoModificado) {

    const { nombre, autor, formato, matriz, pais, artePortada } = req.body

    if (nombre && autor && formato && matriz && pais && artePortada) {

      discoModificado.nombre = nombre
      discoModificado.autor = autor
      discoModificado.formato = formato
      discoModificado.matriz = matriz
      discoModificado.pais = pais
      discoModificado.artePortada = artePortada

      res.status(200).send(discoModificado)
    }
  }
})


//--------METODO DELETE--------
.delete("/borrar/id/:id", (req: Request, res: Response) => {

    const idEliminado = req.params.id
  
    const discoEliminado = discos.find((elem) => {
      
        return elem.id === idEliminado
    })
  
    if (discoEliminado) {
      
        discos = discos.filter((elem) => {
          
        return elem.id != idEliminado
      })

      res.status(200).send("Disco eliminado")
    }
  })
  

//PARA CORRERLO POR EL PUERTO 3000
  app.listen(3000, () => {
    console.log("Corriendo en el puerto 3000");
  });