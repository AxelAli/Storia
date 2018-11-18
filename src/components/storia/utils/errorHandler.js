export const errorHandler =(error)=> {
    switch (error.name) {
        case 'ReferenceError':
            console.log(error)
            break;
    
        default:
            break;
    }
}