import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ReactiveFormsModule],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Desafio-Transferencia');
}
