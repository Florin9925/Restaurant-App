export class MenuItem {

      name: string='';
      price: string='';
      description: string = '';
      
      constructor(init?: Partial<MenuItem>) {
            Object.assign(this, init);
      }
}
