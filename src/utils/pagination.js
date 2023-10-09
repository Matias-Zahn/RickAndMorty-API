//currentPage= Pagina Actual
//residents= Arreglo total de residentes en la dimenson actual

const paganitionLogic = (currentPage, residents) => {

    const RESIDENTS_PER_PAGE= 6;

    const totalPages= Math.ceil(residents.length / RESIDENTS_PER_PAGE)
    

    //?Residentes que se van a mostrar por pagina
    const sliceEnd= currentPage * RESIDENTS_PER_PAGE
    const sliceStart= sliceEnd - RESIDENTS_PER_PAGE 

    const residentsInPage= residents.slice(sliceStart, sliceEnd)

    //Arreglo para mostrar la cantidad de pags
    const pages=[]
    
    for (let i = 1; i < totalPages; i++) {
        pages.push(i)
    }

    return{
        residentsInPage,
        pages,
    };
}


export {
    paganitionLogic
}