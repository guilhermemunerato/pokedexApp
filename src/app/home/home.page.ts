import { Component } from '@angular/core';
import { DadosService } from '../servicos/dados.service';
import { Router } from '@angular/router';
import { PokedexApiService } from '../servicos/pokedex-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons = [
    {
      numero: "001", nome: "Bulbasaur",
      tipos: ["Grass", "Poison"],
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },

    {
      numero: "002", nome: "charmander",
      tipos: ["Grass", "Poison"],
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },


    {
      numero: "003", nome: "Stakataka",
      tipos: ["Grass", "Poison"],
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },

    {
      numero: "004", nome: "Metapod",
      tipos: ["Grass", "Poison"],
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    },
    {
      numero: "005", nome: "INDIANA JONES",
      tipos: ["Grass", "Poison"],
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/808.png",
    },
    {
      numero: "006", nome: "MALOKA",
      tipos: ["Grass", "Poison"],
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/802.png",
    },
    {
      numero: "007", nome: "POPE",
      tipos: ["Grass", "Poison"],
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/799.png",
    },
    {
      numero: "008", nome: 'ARIZONA',
      tipos: ["Grass", "Poison"],
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/805.png",
    },

  ];

  public listaFiltrada = [];

  public listaPokemonApi: [];
  public offsetGeral = 0;
  public limiteGeral = 10;
  public paginaAtual = 0;
  public totalPokemons = 0;



  constructor(public dadosService: DadosService, public router: Router, public pokeApi: PokedexApiService) {
    this.buscaPokemonApi(this.offsetGeral, this.limiteGeral);
  }
  // busca os pokemons na Apio quiando abre a pagina..



  public buscaPokemonApi(offset, limit) {
    this.pokeApi.listarPokemonsApi(offset, limit).subscribe(dados => {
      console.log(dados);

      // pega o total de pokemons

      this.totalPokemons = dados['count'];

      this.listaPokemonApi = dados['result'];

      for (let item of listaApi){
        // busca todos os dados do pokemon usando a URl dele
        this.pokeApi.buscarPokemonUrl(it.url).subscribe(dadosPokemon => {
          this.listaPokemonApi.push(dadosPokemon);



        })
      }
      this.resetarLista;


    });

  }

  public resetarLista() {

    this.listaFiltrada = this.listaPokemons;
  }

  public abrirDadosPokemon(pokemon: any) {

    //salva os dados no Banco virtual

    this.dadosService.setDados('dadosPokemon', pokemon);

    //abre outra pagina por navegação
    this.router.navigateByUrl('/dados-pokemon');
  }

  public buscarPokemon(evento: any) {
    let busca = evento.target.value;
    this.resetarLista;

    if (busca && busca.trim() != '') {
      this.listaFiltrada = this.listaFiltrada.filter(dados => {

        if ((dados.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1) || (dados.numero.toLowerCase().indexOf(busca.toLowerCase()) > -1)) {
          return true;
        }
        return false;

      })
    }
  }


}




