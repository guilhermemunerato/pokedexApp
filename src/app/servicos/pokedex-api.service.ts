import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {
  private url = "https://pokeapi.co/api/v2/pokemon"

  constructor(public http:HttpClient) { }

  public listarPokemonsApi(offset:number,limit = 20) {

    /// reduzir e chamar `crase`
return this.http.get(`${this.url}/?offset=${offset}&limit=${limit}`);
  }
public buscaPornumero(numero: Number){
  return this.http.get(`${this.url}/${numero}
  `);
}
public buscarPokemonUrl(url:string){
  return this.http.get(url);
}
  
}
