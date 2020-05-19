export class Permission {
  id: string;
  title: string;
  name: string;
  parentId: string;
  level: number;
  isSelected?: boolean;
  _children?: Permission[];

  clear() {
    this.id = '';
    this.title = '';
    this.name = '';
    this.parentId = '';
    this.isSelected = false;
    this._children = [];
  }
}