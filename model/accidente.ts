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
 * sst.accidentes
 */
export class Accidente { 
    id: number;
    descripcionAccidente?: string;
    diasPerdidos?: number;
    diasCargados?: number;
    agenteAccidente?: string;
    accidenteInvestigado?: string;
    investigacionArl?: string;
    causasInmediatas?: string;
    causasBasicas?: string;
    accionImplementar?: string;
    fechaEjecucion?: string;
    observaciones?: string;
    idUsuario?: number;
    idTipoEvento?: number;
    diaAccidente?: string;
    idTipoAccidente?: number;
    idTipoLesion?: number;
    idTipoResponsable?: number;
}
