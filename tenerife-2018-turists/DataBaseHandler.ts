/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc DataBaseHandler
 */

interface Turistas {
  procedencia: string;
  hoteles: string;
}

interface RawData {
  municipios: {
    municipio: string;
    annios: {
      annio: number;
      meses: {
        mes: string;
        procedencias: Turistas[];
      }[];
    }[];
  }[];
}


/**
 * Clase para manejar una base de datos de canciones.
 */
export class DataBaseHandlerHandler {
  private data: RawData | null; // Datos de la base de datos
  private url: string; // URL de la base de datos

  /**
   * Constructor de la clase DataBaseHandlerSongs.
   * @param url - URL de la base de datos
   */
  constructor(url: string) {
    this.url = url;
    this.data = null;
    this.initialize();
  }

  /**
   * Inicializa la base de datos obteniendo los datos desde la URL especificada.
   */
  async initialize() {
    try {
      const response = await fetch(this.url);
      this.data = await response.json();
      console.log('Datos obtenidos en el constructor:', this.data);
    } catch (error) {
      console.error('Error al obtener los datos en el constructor:', error);
    }
  }

  /**
   * Obtiene los datos de la base de datos.
   * @returns Los datos de la base de datos
   */
  public getData(): RawData | null {
    return this.data;
  }

  /**
   * Obtiene los datos de la base de datos mediante una solicitud HTTP.
   * @returns Una promesa que se resuelve cuando se obtienen los datos correctamente
   */
  public async fetchData(): Promise<void> {
    try {
      const response = await fetch(this.url);
      this.data = await response.json();
      console.log('Datos obtenidos:', this.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      this.data = null;
      throw error; // Propaga el error más adelante
    }
  }

  /**
   * Obtiene las canciones de la base de datos.
   * @returns Un array de objetos que representan las canciones
   */
  public getTurists(): Turistas[] {
    if (!this.data) { return []; }
    let procedencias: string[] = [];
    let hoteles: number[] = [];
    for (let months2018 = 0; months2018 < this.data.municipios[0].annios[9].meses.length; months2018++) {
      const month = this.data.municipios[0].annios[9].meses[months2018];
        for (let country = 0; country < month.procedencias.length; country++) {
          if (procedencias.includes(month.procedencias[country].procedencia)) {
            hoteles[procedencias.indexOf(month.procedencias[country].procedencia)] += parseInt(month.procedencias[country].hoteles);
          } else {
            procedencias.push(month.procedencias[country].procedencia);
            hoteles.push(parseInt(month.procedencias[country].hoteles));
          }
        }
    }
    let turists: Turistas[] = [];
    for (let index = 0; index < procedencias.length; index++) {
      turists.push({procedencia: procedencias[index], hoteles: hoteles[index].toString()});
    }
    return turists;
  }
}