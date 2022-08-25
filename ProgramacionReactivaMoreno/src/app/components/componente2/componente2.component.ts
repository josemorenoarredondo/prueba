import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { RxjsService } from '../../services/rxjs.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  personas: any[] = [];
  maestros: any[] = [];

  constructor(
    private PersonaService: PersonaService,
    private RxjsService: RxjsService
  ) { 

  }

  ngOnInit(): void {
    this.personas = this.PersonaService.obtenerPersonas();
    this.RxjsService.obtenerMaestros().subscribe((maestros)=>{
      this.maestros = maestros;
    });
  }

}
