export class Role {
  id: string;
  group: string;
  description: string;
  permissions: Permissions[];
  isCoreRole: boolean;

  clear(): void {
    this.id = undefined;
    this.group = '';
    this.description = '';
    this.permissions = [];
    this.isCoreRole = false;
  }
}

export enum Permissions {

  // Users
  readUsers   = 'read users',
  createUsers = 'create users',
  updateUsers = 'update users',
  deleteUsers = 'delete users',

  // Statics
  readStatics   = 'read statics',
  createStatics = 'create statics',
  updateStatics = 'update statics',
  deleteStatics = 'delete statics',

  // ContactMessages
  readContactMessages   = 'read contact messages',
  createContactMessages = 'create contact messages',
  updateContactMessages = 'update contact messages',
  deleteContactMessages = 'delete contact messages',

  // Arts
  readArts   = 'read arts',
  createArts = 'create arts',
  updateArts = 'update arts',
  deleteArts = 'delete arts',

  // Categories
  readCategories   = 'read categories',
  createCategories = 'create categories',
  updateCategories = 'update categories',
  deleteCategories = 'delete categories',

  // Designers
  readDesigners   = 'read designers',
  createDesigners = 'create designers',
  updateDesigners = 'update designers',
  deleteDesigners = 'delete designers',

  // Options
  readOptions    = 'read options',
  createOptions  = 'create options',
  updateOptions  = 'update options',
  deleteOptions  = 'delete options',

  // Products
  readProducts   = 'read products',
  createProducts = 'create products',
  updateProducts = 'update products',
  deleteProducts = 'delete products',

  // Reviews
  readReviews   = 'read reviews',
  createReviews = 'create reviews',
  updateReviews = 'update reviews',
  deleteReviews = 'delete reviews',

  // Vendors
  readVendors   = 'read vendors',
  createVendors = 'create vendors',
  updateVendors = 'update vendors',
  deleteVendors = 'delete vendors',
};