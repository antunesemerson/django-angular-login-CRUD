import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'index', type: 'link', name: 'Home', icon: 'home', ordem: 'AAA' },
  { state: 'users', type: 'link', name: 'Usuários', icon: 'people', ordem: 'Usuários' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
