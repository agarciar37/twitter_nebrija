

type Props = {
    page:number,
    setPage: (page: number) => void;
    totalpaginas: number;
}

export const Paginador = ({page,setPage, totalpaginas}: Props)=> {

     return(
        <div className="paginador">
            <button 
              onClick={()=> setPage(page-1)} 
              disabled={page === 1}
            >
              Anterior
            </button>

            <p>{page} de {totalpaginas}</p>

            <button 
              onClick={()=> setPage(page+1)} 
              disabled={page === totalpaginas}
            >
              Siguiente
            </button>
        </div>
    )

}