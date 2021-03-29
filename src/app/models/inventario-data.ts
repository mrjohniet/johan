export interface InventarioData {
  id: number;
  nombre: string;
  precioUnitario: number;
  existencias:number;
  rutaImagen?:string;
  talla?: string;
}