/**
 * API SST
 * Api para aplicaciones del proyecto SST
 *
 * OpenAPI spec version: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * sst.ausentismos
 */
export class Ausentismo { 
    id: number;
    fechaAusentismo?: string;
    fechaInicio?: string;
    fechaFinal?: string;
    prorroga?: string;
    diasPerdidos?: number;
    idUsuario?: number;
    idTipoEvento?: number;
    idDiagnostico?: number;
}
