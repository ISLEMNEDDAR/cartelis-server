import validationType from "./validator"

export const validateProgram = (methode) =>{
    switch (methode) {
        case "p1" : {
            return validationType.pOneTypes
        }
        case "p2" : {
            return validationType.pTwoTypes
        }
    }
}

