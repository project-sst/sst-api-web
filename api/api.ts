export * from './empresas.service';
import { EmpresasService } from './empresas.service';
export * from './paramtricas.service';
import { ParamtricasService } from './paramtricas.service';
export const APIS = [EmpresasService, ParamtricasService];
